/* eslint-disable no-undef */
const todoList = require("../todo.js");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Testing", () => {
  beforeAll(() => {
    add({
      title: "Preparation ",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in list", () => {
    // expect(all.length).toBe(0);

    let length_all = all.length;

    add({
      title: "node js learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length_all + 1);
  });

  test("Mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrive all todos that are overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueToday", () => {
    let listOfTodos = dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueLater", () => {
    let listOfTodos = dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
