'use strict';

const url = 'https://semalt.tech/dev/api/v1/example/test/';
const table = document.querySelector('.information-js > tbody');

const createView = (arr) => {
  const result = arr.reduce(
    (acc, el,i) =>
      acc +
      `
      <tr> <td>
      <div> <input type="checkbox"  class="check" id="check${i}" /> 
      <label for="check${i}"></label></div>
      </td> 
  <td>${el.path}</td> <td>${el.isSitemapsIndex ? 'Sitemaps Index' : ''}</td>
      <td>${new Date(el.lastSubmitted).toDateString()}</td> 
      <td>${new Date(el.lastCheck).toDateString()}</td> 
      <td>${el.errors === 0 ? 'Success' : `${el.errors} errors`}</td> 
      <td>${el.urls}</td> 
      <td><button class="recrewl-btn">Recrewl</button></td> 
      <td><button class="trash-btn" ><i class="material-icons" data-tooltip="Remove from Search Console" >
      delete
      </i></button></td> 
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
