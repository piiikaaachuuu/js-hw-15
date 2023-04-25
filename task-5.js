//TODO: Необхідно відобразити список товарів, які відповідають певному критерію цін. Для цього можна використовувати метод filter (), потім дати на них знижку 10%.

const goods = [
  { goodsName: "🍎", goodsPrice: 60 },
  { goodsName: "🥝", goodsPrice: 50 },
  { goodsName: "🍍", goodsPrice: 200 },
  { goodsName: "🍇", goodsPrice: 150 },
  { goodsName: "🥥", goodsPrice: 225 },
];
const param = 100;
const sales = 0.9;

function filterGoodsAndSales(arr, prop, param, sales) {
  return arr
    .filter((obj) => obj[prop] >= param)
    .map((obj) => ({
      goodsName: obj.goodsName,
      goodsPrice: obj[prop] * sales,
    }));
}

console.table(filterGoodsAndSales(goods, "goodsPrice", param, sales));
