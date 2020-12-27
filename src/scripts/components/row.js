import Key from "./key";
export default class Row {
  constructor(rowName, keyList) {
    this.currentRow = rowName;
    this.keyList = keyList;
  }

  rowTemplate(rowName) {
    return `
      <div class="key-row ${rowName}"></div>
    `;
  }

  appendTo(container) {
    const rowTemplate = this.rowTemplate(this.currentRow);
    container.innerHTML += rowTemplate;
    const rowElement = container.querySelector("." + this.currentRow);
    for (const key of this.keyList) {
      new Key(key).appendTo(rowElement);
    }
  }
}
