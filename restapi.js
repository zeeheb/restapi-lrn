const spinner = document.createElement('img');

loadEventListener();

function loadEventListener() {
  document.addEventListener('DOMContentLoaded', fazSpinner(spinner));
}

function fazSpinner(spinner) {
  // const spinner = document.createElement('img');
  spinner.classList.add('spinner');
  spinner.src =
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c215736197347.57135ca123427.gif';
  document.querySelector('form').appendChild(spinner);
}

function remSpinner(spinner) {
  spinner.parentNode.removeChild(spinner);
}

function fazLista(result) {
  const selectList = document.createElement('select');
  selectList.className = 'myselect';
  document.querySelector('.form').appendChild(selectList);
  result.forEach(value => {
    const option = document.createElement('option');
    option.value = value.id;
    option.text = value.nome;
    selectList.appendChild(option);
  });
}

function fazInput() {
  const btn = document.createElement('input');
  btn.className = 'btn';
  btn.type = 'submit';
  btn.value = 'List cities';
  // btn.onClick = location.href = 'after.html';
  // btn.addEventListener('', changeScreen(btn));
  document.querySelector('form').appendChild(btn);

  changeScreen();
}

function changeScreen() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', e => {
    const option = document.querySelector('.myselect');
    // const params = new URLSearchParams(location.search);
    const valueId = option.value;
    // console.log(new URLSearchParams(location.search));
    
    location.replace(`after.html?id=${valueId}`);
    e.preventDefault();
  });
}

function fazDiv() {
  const div = document.createElement('div');
  div.className = 'div-title';

  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  paragraph.textContent = 'Select a state';

  div.appendChild(paragraph);
  document.querySelector('.form').appendChild(div);
}

setTimeout(requestData, 1000);

function requestData() {
  // criaLista();

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
    method: 'GET'
  })
    .then(resp => {
      return resp.json();
    })
    .then(result => {
      remSpinner(spinner);
      fazDiv();
      fazLista(result);
      fazInput();
    });
}
