let number_array = [];
while (true) {
  let number = parseInt(prompt('Enter numbers'));
  if (number_array.includes(number)) {
    console.log('This number has been given.');
    break;
  } else {
    number_array.push(number);
  }
}
number_array.sort(function(a, b) {
  return a - b;
})
for (let num of number_array) {
  console.log(num);
}