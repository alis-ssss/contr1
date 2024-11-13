import { createElement } from "../framework/render.js";

function createExpenseFormComponentTemplate() {
  return `<h2>Добавить расходы</h2>
            <form id="expense-form">
                <label for="expense-name">Наименование расхода:</label>
                <input type="text" id="expense-name" placeholder="Например, еда" required />
                <label for="expense-amount">Стоимость:</label>
                <input type="number" id="expense-amount" placeholder="Amount" required />
                
                <fieldset>
                    <legend>Категория:</legend>
                    <label><input type="radio" name="expense-category" value="Food" required /> Еда</label>
                    <label><input type="radio" name="expense-category" value="Transport" required /> Транспорт</label>
                    <label><input type="radio" name="expense-category" value="Entertainment" required /> Развлечения</label>
                    <label><input type="radio" name="expense-category" value="Other" required /> Другое</label>
                </fieldset>

                <button type="submit">Добавить расходы</button>
            </form>`;
}

export default class ExpenseFormComponent {
  getTemplate() {
    return createExpenseFormComponentTemplate();
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
