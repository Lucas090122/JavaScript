const p = document.querySelector('#trigger');
const img = document.querySelector('#target');
function change_picture() {
  img.setAttribute('src', 'img/picB.jpg');
}
function change_back() {
  img.setAttribute('src', 'img/picA.jpg');
}
p.addEventListener('mouseover', change_picture);
p.addEventListener('mouseout', change_back);