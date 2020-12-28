import rowData from "../data/rowData";
import keyCodes from "../data/keyCodes";
import Row from "./row";
import { $id, $class, $classes } from "../helpers/helpers";
export default class KeyBoard {
  constructor() {
    this.width = 600;
    this.height = 300;
    this.keyboardRows = rowData;
    this.container = $class(".container");
    this.rowsContainer = $id("rows");

    // for traking capslock while using keys via mouse
    this.capsLock = false; 
    this.shiftKey = false;

    this.modifiersOverridedByUser = false;
  };

  init() {
    this.addKeyboardToUI();
    this.bindEvents();
  }

  addKeyboardToUI() {
    for (const [rowName, keyList] of Object.entries(this.keyboardRows)) {
      new Row(rowName, keyList).appendTo(this.rowsContainer);
    }
  }

  toggleKeyModifiersStatus(event) {
    // if user toggles the modifiers manually
    if (event.getModifierState("CapsLock") != this.capsLock) {
      window.capsLock = event.getModifierState("CapsLock");
    }

    if (event.getModifierState("Shift") != this.shiftKey) {
      window.shiftKey = event.getModifierState("Shift");
    }

    this.capsLock = event.getModifierState("CapsLock");
    this.shiftKey = event.getModifierState("Shift");
  }

  toggleCapsLockIndicator() {
    const capsLockIndicator = $class('.capsLockIndicator');
    capsLockIndicator.classList.remove((this.capsLock || window.capsLock) ? "off" : "on");
    capsLockIndicator.classList.add((this.capsLock || window.capsLock) ? "on" : "off");
  }

  isCapsOrShiftKeyOn() {
    return (this.capsLock || this.shiftKey || window.capsLock || window.shiftKey);
  }

  isShiftKeyOn() {
    return (this.shiftKey || window.shiftKey);
  }

  showKeyClickingTransition(eventKey, direction) {
    let keyElements = [];
    switch (eventKey) {
    case " ":
      keyElements = $classes("#virtual-spacebar-key");
      break;
    case "shift":
    case "rightshift":
    case "control":
    case "alt":
      keyElements = $classes(`#virtual-${eventKey}-key, #virtual-right${eventKey}-key`);
      break;
    default:
      if (Object.keys(keyCodes).includes(eventKey)) {
        let { className } = keyCodes[eventKey];
        keyElements = $classes(`#virtual-${ className || eventKey }-key`);
      }
      break;
    }
    
    keyElements.forEach(element => {
      if (direction == "down") {
        element.style.transform = `translateZ(-${element.clientHeight / 2}px)`;
      } else {
        element.style.transform = "";
      }
    });
  }

  bindEvents() {
    ["click", "mouseup", "mousedown", "keyup", "keydown", "mousemove"].forEach(eventName => {
      window.addEventListener(eventName, event => {
        this.toggleKeyModifiersStatus(event);
        this.toggleCapsLockIndicator();
      });
    });

    $id("keyboardToggle").addEventListener('click', function(event) {
      $id("keyboard").classList.toggle("open");
    });

    ["keydown", "keyup"].forEach(eventName => {
      $id("userInput").addEventListener(eventName, event => {
        let eventKey = event.key.toLowerCase();
        this.showKeyClickingTransition(eventKey, ((eventName == "keydown") ? "down" : "up"));
      });
    });

    ["mousedown", "mouseup", "mouseleave"].forEach(eventName => {
      $classes(".key", this.rowsContainer).forEach(keyElement => {
        keyElement.addEventListener(eventName, event => {
          let eventKey = keyElement.dataset.keyText;
          this.showKeyClickingTransition(eventKey, ((eventName == "mousedown") ? "down" : "up"));
        });
      });
    });

    $classes(".key", this.rowsContainer).forEach(keyElement => {
      keyElement.addEventListener("click", event => {
        let keyValue = keyElement.dataset.keyText,
            actualValue = "", 
            clearShiftKeyAfterAddingText = true, 
            isBackspaceButton = false;
        const userInput = $id("userInput");

        switch (keyValue) {
          case "backspace":
            isBackspaceButton = true;
            break;
          case "capslock":
            window.capsLock = !window.capsLock;
            actualValue = "";
            clearShiftKeyAfterAddingText = false;
            break;
          case "shift":
          case "rightshift":
            window.shiftKey = !window.shiftKey;
            actualValue = "";
            clearShiftKeyAfterAddingText = false;
            break;
          case "meta":
          case "alt":
          case "rightalt":
          case "control":
          case "rightcontrol":
          case "contextmenu":
          case "fn":
            actualValue = "";
            break;
          case "spacebar":
            actualValue = " ";
            break;
          case "tab":
            actualValue = "\t";
            break;
          case "enter":
            actualValue = "\n";
            break;
          default:
            if (this.shiftKey || window.shiftKey) {
              actualValue = keyElement.dataset.shiftCharecter;
            } else {
              actualValue = keyValue;
            }
            break;
        }
        if (isBackspaceButton) {
          userInput.value = userInput.value.slice(0, -1);
        } else {
          actualValue = this.isCapsOrShiftKeyOn() ? actualValue.toUpperCase() : actualValue;
          userInput.value = userInput.value + actualValue;
          if (clearShiftKeyAfterAddingText) {
            window.shiftKey = false;
          }
        }
        $id("userInput").focus();
      });
    });
  }
}
