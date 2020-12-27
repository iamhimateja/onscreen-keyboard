import keyCodes from "../data/keyCodes";
export default class Key {
  constructor(key, row) {
    this.currentKey = key;
    this.currentRow = row;
    this.keyData = keyCodes[this.currentKey];
  }

  keyTemplate(keyData) {
    const {
      keyCode,
      shiftCharecter,
      disabled: keyDisabled,
      className,
      shortForm
    } = keyData;
    return `
      <div id="${ className || this.currentKey }-key" class="key${ keyDisabled ? " disabled" : "" }" data-key-text="${ this.currentKey }" data-key-code="${ keyCode }">
        <div class="key-side front"></div>
        <div class="key-side back"></div>
        <div class="key-side left"></div>
        <div class="key-side right"></div>
        <div class="key-side top">
          <div class="charecters">
            <span class="main-charecter">${ shortForm || this.currentKey }</span>
            <span class="shift-charecter">${ shiftCharecter || "" }</span>
          </div>
          ${ (this.currentKey == "capsLock") ? '<span class="capsLock"></span>' : "" }
        </div>
      </div>
    `;
  }

  appendTo(parentRow) {
    const keyTemplate = this.keyTemplate(this.keyData);
    parentRow.innerHTML += keyTemplate;
    const keyElement = parentRow.lastElementChild;
    const keyWidth = keyElement.querySelector(".key-side.top").clientWidth;
    const keyHeight = keyElement.querySelector(".key-side.top").clientHeight;
    const keyTop = keyElement.querySelector(".key-side.top");
    const keyfront = keyElement.querySelector(".key-side.front");
    const keyBottom = keyElement.querySelector(".key-side.back");
    const keyLeft = keyElement.querySelector(".key-side.left");
    const keyRight = keyElement.querySelector(".key-side.right");

    keyTop.style.transform = `translateZ(${keyHeight / 2}px)`;
    keyfront.style.transform = `rotateX(-90deg) translateY(-${keyHeight / 4}px) translateZ(${keyHeight / 2}px)`;
    keyBottom.style.transform = `rotateX(-90deg) translateY(-${keyHeight / 4}px) translateZ(-${keyHeight / 2}px)`;
    keyLeft.style.width = `${keyElement.clientHeight / 2}px`;
    keyLeft.style.transform = `rotateY(90deg) translateX(-${keyHeight / 4}px) translateZ(-${keyWidth / 2}px)`;
    keyRight.style.width = `${keyElement.clientHeight / 2}px`;
    keyRight.style.transform = `rotateY(90deg) translateX(-${keyHeight / 4}px) translateZ(${keyWidth / 2}px)`;
  }
}
