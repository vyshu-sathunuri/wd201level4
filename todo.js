/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  //const yesterday = formattedDate(
   // new Date(new Date().setDate(dateToday.getDate() - 1))
  //);
  //const tomorrow = formattedDate(
    //new Date(new Date().setDate(dateToday.getDate() + 1))
  //);

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    overdue_arr = [];
    all.forEach((x) => {
      if (x["dueDate"] < today) {
        overdue_arr.push(x);
      }
    });
    return overdue_arr;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    duetoday_arr = [];
    all.forEach((x) => {
      if (x["dueDate"] === today) {
        duetoday_arr.push(x);
      }
    });
    return duetoday_arr;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    duelater_arr = [];
    all.forEach((x) => {
      if (x["dueDate"] > today) {
        duelater_arr.push(x);
      }
    });
    return duelater_arr;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // return OUTPUT_STRING
    display = [];
    list.forEach((item) => {
      if (item.completed === false) {
        if (item.dueDate === today) {
          display.push(`[ ] ${item.title}`);
        } else {
          display.push(`[ ] ${item.title} ${item.dueDate}`);
        }
      } else {
        if (item.dueDate === today) {
          display.push(`[x] ${item.title}`);
        } else {
          display.push(`[ ] ${item.title} ${item.dueDate}`);
        }
      }
    });
    return display.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
