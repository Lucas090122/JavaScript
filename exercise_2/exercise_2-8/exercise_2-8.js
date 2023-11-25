const name_array = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
function concat(str_array) {
  let result = '';
  for (let i of str_array) {
    result += i;
  }
  return result;
}
const combined_array = concat(name_array);
document.querySelector('#result').innerHTML = combined_array;