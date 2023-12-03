const form = document.querySelector('form');
form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const name = document.getElementById('query').value;
  let link = `https://api.tvmaze.com/search/shows?q=${name}`;
  let response = await fetch(link);
  let data = await response.json();
  const container = document.getElementById('results');
  container.innerHTML = '';
  for (let item of data) {
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    h2.innerHTML = item['show']['name'];
    let a_link = document.createElement('a');
    a_link.setAttribute('href', `${item['show']['url']}`);
    a_link.setAttribute('target', '_blank');
    a_link.innerHTML = `${item['show']['url']}`;
    let img = document.createElement('img');
    img.setAttribute('src', item.show.image?.medium);
    img.setAttribute('alt', `${item['show']['name']}`);
    let summary = document.createElement('div');
    summary.innerHTML = `${item['show']['summary']}`;
    article.appendChild(h2);
    article.appendChild(a_link);
    article.appendChild(img);
    article.appendChild(summary);
    container.appendChild(article);
  }
})