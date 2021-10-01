import axios from 'axios'
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // HTML Elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');
  
  // .classList.add
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');
  
  // .textContent & .src
  headline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;
  
  // .appendChild
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(authorImg);
  author.appendChild(authorName);
  
  // .addEventListener
  card.addEventListener('click', () => {
    console.log(article.headline);
  })
  return card;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // axios.get
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    console.log(res)

    // HTML Elements
    const javascript = res.data.articles.javascript
    const bootstrap = res.data.articles.bootstrap
    const technology = res.data.articles.technology
    const jquery = res.data.articles.jquery
    const nodeJS = res.data.articles.node
    const random = document.querySelector(selector)

    // .forEach
    javascript.forEach(item => {
      random.appendChild(Card(item))
    })
    bootstrap.forEach(item => {
      random.appendChild(Card(item))
    })
    technology.forEach(item => {
      random.appendChild(Card(item))
    })
    jquery.forEach(item => {
      random.appendChild(Card(item))
    })
    nodeJS.forEach(item => {
      random.appendChild(Card(item))
    })
  })

  // .catch
  .catch(err => {
    console.error(err)
  })
}


export { Card, cardAppender }
