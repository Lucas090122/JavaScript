const form = document.querySelector('form');
form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const name = document.getElementById('query').value;
  let link = `https://api.tvmaze.com/search/shows?q=${name}`;
  let response = await fetch(link);
  let data = await response.json();
  console.log(data);
})