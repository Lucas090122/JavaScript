const button = document.getElementById('start');
button.addEventListener('click', function() {
  const calculation = document.getElementById('calculation').value;
  let number_array;
  let result;
  if (calculation.includes('+')) {
    number_array = calculation.split('+');
    result = parseInt(number_array[0]) + parseInt(number_array[1]);
  } else if (calculation.includes('-')) {
    number_array = calculation.split('-');
    result = parseInt(number_array[0]) - parseInt(number_array[1]);
  } else if (calculation.includes('*')) {
    number_array = calculation.split('*');
    result = parseInt(number_array[0]) * parseInt(number_array[1]);
  } else if (calculation.includes('/')) {
    number_array = calculation.split('/');
    result = parseInt(number_array[0]) / parseInt(number_array[1]);
  }
  document.getElementById('result').innerHTML = result;
  })
