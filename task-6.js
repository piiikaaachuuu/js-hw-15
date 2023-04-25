//TODO: Необхідно відображати список завдань, які можна відмітити як виконані або невиконані. Для цього можна використовувати метод map ().

const tasks = [
  { nameTask: "Купити молоко", completed: false },
  { nameTask: "Приготувати обід", completed: true },
  { nameTask: "Поприбирати", completed: false },
];

function displayTasks(tasks) {
  return tasks
    .map((task) => {
      const checkbox = task.completed ? "[✓]" : "[ ]";
      return `${task.nameTask}: ${checkbox} `;
    })
    .join("\n");
}

console.log(displayTasks(tasks));
