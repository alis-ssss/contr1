import HeaderComponent from "./view/header-component.js";
import ExpenseFormComponent from "./view/expense-form-component.js";
import ExpenseListComponent from "./view/expense-list-component.js";
import ExpenseComponent from "./view/expense-component.js";
import ExpenseFilterComponent from "./view/expense-filter-component.js";
import ExpenseboardComponent from "./view/taskboard-component.js";
import { render, RenderPosition } from "./framework/render.js";

const bodyContainer = document.querySelector(".container");
const formContainer = document.querySelector("form");
const expenseFilterContainer = document.querySelector(".expense-filter");
const ExpenseboardContainer = document.querySelector("ul");


render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

render(new ExpenseFormComponent(), formContainer);

render(new ExpenseFilterComponent(), expenseFilterContainer);

const ExpenseboardComponent = new ExpenseboardComponent();
render(ExpenseboardComponent, ExpenseboardContainer, RenderPosition.AFTERBEGIN);

const ExpenseListComponent1 = new ExpenseListComponent("Название");
render(ExpenseListComponent1, ExpenseboardComponent.getElement());

const ExpenseComponent11 = new ExpenseComponent("Задача");
render(ExpenseComponent11, ExpenseListComponent1.getTaskListElement());
const ExpenseComponent12 = new ExpenseComponent("Задача");
render(ExpenseComponent12, ExpenseListComponent1.getTaskListElement());
const ExpenseComponent13 = new ExpenseComponent("Задача");
render(ExpenseComponent13, ExpenseListComponent1.getTaskListElement());