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
    let img_container = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', 'https://via.placeholder.com/210x295?text=Not%20Found');
    if (item.show.image && item.show.image.medium) {
    img.setAttribute('src', `${item['show']['image']['medium']}`);
    }
    img.setAttribute('alt', `${item['show']['name']}`);
    img_container.appendChild(img)
    let summary = document.createElement('div');
    summary.innerHTML = `${item['show']['summary']}`;
    article.appendChild(h2);
    article.appendChild(a_link);
    article.appendChild(img_container);
    article.appendChild(summary);
    container.appendChild(article);
  }
})