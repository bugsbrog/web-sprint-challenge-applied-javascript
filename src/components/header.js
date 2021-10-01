const Header = (title, date, temp) => {

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
// HTML Elements
const header = document.createElement('div');
const dateNews = document.createElement('span');
const h1 = document.createElement('h1');
const tempSpan = document.createElement('span');

// /appendChild
header.appendChild(dateNews);
header.appendChild(h1);
header.appendChild(tempSpan);

// .classLists
header.classList.add('header')
dateNews.classList.add('date')
tempSpan.classList.add('temp')

// .textContent
dateNews.textContent = date
h1.textContent = title
tempSpan.textContent = temp

// return
return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // const
const newHeader = Header('Lambda Times', 'January 6, 2021', '26°C')
document.querySelector(selector).appendChild(newHeader)
}

export { Header, headerAppender }
