function dice() {
  return Math.floor(Math.random() * 6 + 1);
}
while (true) {
  let result = dice();
  document.querySelector('#list').appendChild(document.createElement('li')).textContent = result;
  if (result === 6) {
    break;
  }
}