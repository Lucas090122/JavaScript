let dogs = [];
for (let i = 0; i < 6; i++) {
  let dog = prompt(`Enter six names of dogs, No. ${i + 1}:`);
  dogs.push(dog);
}
dogs.sort();
for (let i = dogs.length - 1; i >= 0; i--) {
  document.querySelector('#list').appendChild(document.createElement('li')).textContent = dogs[i];
}