//TODO: Необхідно відобразити список товарів, відсортований за ціною в порядку зростання або спадання.Для цього можна використовувати метод sort() або reverse().

const goods = [
  { goodsName: "🍎", goodsPrice: 60 },
  { goodsName: "🥝", goodsPrice: 50 },
  { goodsName: "🍍", goodsPrice: 200 },
  { goodsName: "🍇", goodsPrice: 150 },
  { goodsName: "🥥", goodsPrice: 225 },
];

function sortGoods(goods) {
  return goods.slice().sort((a, b) => a.goodsPrice - b.goodsPrice);
}

console.table(sortGoods(goods));
