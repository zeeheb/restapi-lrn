loadEventListener();

function loadEventListener() {
  document.addEventListener('DOMContentLoaded', fazSpinner);
}

function fazSpinner() {
  const spinner = document.createElement('img');

  spinner.src =
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c215736197347.57135ca123427.gif';
  document.querySelector('body').appendChild(spinner);
}

fetch(
  'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550307/distritos/',
  {
    method: 'GET'
  }
)
  .then(resp => {
    fazSpinner();
    return resp.json();
  })
  .then(result => {
    alert('Fetched');
  });
