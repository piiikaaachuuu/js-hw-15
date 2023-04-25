//TODO: Створити функцію, яка приймає масив об'єктів з ключами "name" та "age" і повертає новий масив, який містить тільки імена людей старших за 18 років.

const arrObj = [
  { name: "Alex", age: 28 },
  { name: "Maria", age: 18 },
  { name: "Oleg", age: 16 },
  { name: "Pasha", age: 30 },
  { name: "Nastya", age: 14 },
];

const param = 18;

function age18(arr, prop, param) {
  return arr.filter((obj) => obj[prop] >= param);
}

console.table(age18(arrObj, "age", param));
