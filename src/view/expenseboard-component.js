import {createElement} from '../framework/render.js';

function createExpenseboardComponentTemplate() {
    return (
        `<div class="expense-list"></div>`
    );
}

export default class ExpenseboardComponent {
    getTemplate() {
        return createExpenseboardComponentTemplate();
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