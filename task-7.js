//TODO: Необхідно об'єднати два списки даних в один, для цього можна використовувати метод concat ().

const goods1 = [
  { goodsName: "🍎", goodsPrice: 60 },
  { goodsName: "🥝", goodsPrice: 50 },
  { goodsName: "🍍", goodsPrice: 200 },
];
const goods2 = [
  { goodsName: "🍇", goodsPrice: 150 },
  { goodsName: "🥥", goodsPrice: 225 },
];

console.table(goods1.concat(goods2));
