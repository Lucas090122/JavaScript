function dice(num) {
  return Math.floor(Math.random() * num + 1);
}
const side = parseInt(prompt('How many sides you need.'));
while (true) {
  let result = dice(side);
  document.querySelector('#list').appendChild(document.createElement('li')).textContent = result;
  if (result === side) {
    break;
  }
}