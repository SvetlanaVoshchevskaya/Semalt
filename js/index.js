'use strict';

const url = 'https://semalt.tech/dev/api/v1/example/test/';
const table = document.querySelector('.information-js > tbody');

const createView = (arr) => {
  const result = arr.reduce(
    (acc, el) =>
      acc +
      `<input type="checkbox" />
      <tr> <td>${el.path}</td> <td>${
        el.isSitemapsIndex ? 'Sitemaps Index' : ''
      }</td>
      <td>${new Date(el.lastSubmitted).toDateString()}</td> 
      <td>${new Date(el.lastCheck).toDateString()}</td> 
      <td>${el.errors === 0 ? 'Success' : el.errors}</td> 
      <td>${el.urls}</td> 
      <td><button>Recrewl</button></td> 
      <td><button><img src="../icon/trash-bin.svg"></img></button></td> 
      </tr>`,
    ''
  );
  table.innerHTML = result;
};

const fetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => createView(data.result.sitemap));
};

window.addEventListener('load', fetchData);
