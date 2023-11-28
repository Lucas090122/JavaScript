const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const first_name = document.querySelector('input[name=firstname]').value;
  const last_name = document.querySelector('input[name=lastname]').value;
  document.getElementById('target').innerHTML = `Your name is ${first_name} ${last_name}`;
  event.preventDefault();
})
