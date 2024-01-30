function max(numbers) {
  // your code here
  // 在裡面宣告，maxNumber每次都會被初始化，若大於就重新賦值maxNumber
  let maxNumber = numbers[0]; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
