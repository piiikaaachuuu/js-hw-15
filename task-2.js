//TODO: Створити функцію, яка приймає масив об'єктів і повертає новий масив, який містить тільки об'єкти з певним значенням ключа.

const arrObj = [
  { age: 18, name: "John" },
  { age: 24, name: "Mary" },
  { age: 35, name: "John" },
  { age: 18, name: "Peter" },
];
const param = 18;

function filterByParam(arrObj, prop, param) {
  return arrObj.filter((obj) => obj[prop] === param);
}

console.table(filterByParam(arrObj, "age", param));
