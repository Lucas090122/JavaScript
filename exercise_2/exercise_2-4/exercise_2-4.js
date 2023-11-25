let number_array = [];
while (true) {
  let number = parseInt(prompt('Enter number, 0 to finish'));
  if (number === 0) {
    break;
  } else {
    number_array.push(number);
  }
}
number_array.sort(function(a, b) {
  return b - a;
});
for (let num of number_array) {
  console.log(num);
}