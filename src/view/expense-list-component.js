import { createElement } from "../framework/render.js";

function createExpenseListComponentTemplate(title) {
  return `<div class="expense-list">
            <h2>Список расходов</h2>
            <ul id="expense-list">
                
            </ul>
        </div>`;
}

export default class ExpenseListComponent {
  constructor(title) {
    this.title = title;
    this.element = null; 
  }

  getTemplate() {
    return createExpenseListComponentTemplate(this.title);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element; 
  }

  getTaskListElement() {
    return this.getElement().querySelector('.task-list'); 
  }

  removeElement() {
    this.element = null;
  }
}