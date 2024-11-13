import {createElement} from '../framework/render.js';

function createExpenseComponentTemplate(task) {
    return (
        `<li class="expense">
            ${expense}
        </li>`
    );
}

export default class ExpenseComponent {
    constructor(expense) {
        this.expense = expense;
        this.element = null;
    }

    getTemplate() {
        return createExpenseComponentTemplate(this.task);
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}