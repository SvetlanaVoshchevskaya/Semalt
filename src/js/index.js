'use strict';

const url = 'https://semalt.tech/dev/api/v1/example/test/';
const tableBody = document.querySelector('.information-js > tbody');
const table = document.querySelector('.information-js');

const createView = (arr) => {
  const result = arr.reduce(
    (acc, el, i) =>
      acc +
      `
      <tr> <td>
      <input type="checkbox"  class="check" id="check${i}" /> 
      <label for="check${i}"></label>
      </td> 
  <td> <a href="${el.path}" target="_blank">${el.path}</a></td> <td>${
        el.isSitemapsIndex ? 'Sitemaps Index' : ''
      }</td>
      <td>${new Date(el.lastSubmitted).toDateString()}</td> 
      <td>${new Date(el.lastCheck).toDateString()}</td> 
      <td class="status">${
        el.errors === 0 ? 'Success' : `${el.errors} errors`
      }</td> 
      <td>${el.urls}</td> 
      <td><button class="recrewl-btn">Recrewl</button></td> 
      <td><button class="trash-btn" ><i class="material-icons" data-tooltip="Remove from Search Console" >
      delete
      </i></button></td> 
      </tr>`,
    ''
  );
  tableBody.innerHTML = result;
  addStatusStyle();
};

const fetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => createView(data.result.sitemap));
};

const addStyleTr = (e) => {
  const target = e.target;

  if (target.closest('tr').classList.contains('tr__active')) {
    target.closest('tr').classList.remove('tr__active');
  } else {
    target.closest('tr').classList.add('tr__active');
  }
};

const addStatusStyle = () => {
  const status = document.querySelectorAll('.status');
  Array.from(status).map((el) => {
    if (el.innerHTML === 'Success') {
      el.classList.add('status__success');
    } else {
      el.classList.add('status__fail');
    }
  });
};

table.addEventListener('change', addStyleTr);
window.addEventListener('DOMContentLoaded', fetchData);
