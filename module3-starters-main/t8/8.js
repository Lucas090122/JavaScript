let calculate = document.getElementById('start');
calculate.addEventListener('click', function() {
  const number_1 = document.getElementById('num1');
  const number_2 = document.getElementById('num2');
  let result;
  let num1 = parseFloat(number_1.value);
  let num2 = parseFloat(number_2.value);
  let option = document.getElementById('operation').value;
  if (option === 'add') {
    result = num1 + num2;
  } else if (option === 'sub') {
    result = num1 - num2;
  } else if (option === 'multi') {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  document.querySelector('#result').innerHTML = result;
})

