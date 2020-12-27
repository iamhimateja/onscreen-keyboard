import rowData from "../data/rowData";
import Row from "./row";
import UserInput from "./userInput";
export default class KeyBoard {
  constructor() {
    this.width = 600;
    this.height = 300;
    this.keyboardRows = rowData;
    this.rowsContainer = document.getElementById("rows");
  };

  init() {
    this.addUserInput();
    this.addKeyboardToUI();
  }

  addUserInput() {
    // new UserInput().appendTo(this.rowsContainer);
  }

  addKeyboardToUI() {
    for (const [rowName, keyList] of Object.entries(this.keyboardRows)) {
      new Row(rowName, keyList).appendTo(this.rowsContainer);
    }
  }
}
