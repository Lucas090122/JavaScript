const number_array = [2, 7 ,4];
function even(num_array) {
  let even_array = [];
  for (let number of num_array) {
    if (number % 2 === 0) {
      even_array.push(number);
    }
  }
  return even_array;
}
console.log(number_array);
console.log(even(number_array));