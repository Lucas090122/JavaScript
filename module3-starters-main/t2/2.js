const ul = document.getElementById('target');
const li1 = 'First item';
const li2 = 'Second item';
const li3 = 'Third item';
ul.appendChild(document.createElement('li')).textContent = li1;
ul.appendChild(document.createElement('li')).textContent = li2;
ul.appendChild(document.createElement('li')).textContent = li3;
document.getElementsByTagName('li')[1].className = 'my-item';