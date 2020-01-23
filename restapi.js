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
  document.querySelector('body').appendChild(spinner);
}

function remSpinner(spinner) {
  spinner.parentNode.removeChild(spinner);
}

setTimeout(requestData, 1000);

function requestData() {
  fetch(
    'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550304/distritos/',
    {
      method: 'GET'
    }
  )
    .then(resp => {
      // fazSpinner();
      return resp.json();
    })
    .then(result => {
      remSpinner(spinner);
      // alert('Fetched');
    });
}
