import {createElement} from '../framework/render.js';

function createExpenseFilterComponentTemplate() {
    return (
        `<label for="category-filter">Фильтр по категориям:</label>
            <select id="category-filter">
                <option value="all">Все</option>
                <option value="Food">Еда</option>
                <option value="Transport">Транспорт</option>
                <option value="Entertainment">Развлечения</option>
                <option value="Other">Другое</option>
            </select>

            <label><input type="checkbox" id="max-amount-filter" /> Показывать расходы более 5000</label>`
    );
}

export default class ExpenseFilterComponent {
    getTemplate() {
        return createExpenseFilterComponentTemplate();
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