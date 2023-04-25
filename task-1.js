//TODO: Створити функцію, яка приймає масив чисел і повертає новий масив, який містить тільки непарні числа.

const nums = [3, 6, 12, 16, 5, 17, 21];

function evenNums(nums) {
  let result = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log(evenNums(nums));
