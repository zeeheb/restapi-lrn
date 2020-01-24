const params = new URLSearchParams(location.search);
const spinner = document.createElement('img');
const cityId = params.get('id');

loadEventListener();

function loadEventListener() {
  document.addEventListener('DOMContentLoaded', fazSpinner);
}

function fazSpinner() {
  // const spinner = document.createElement('img');
  spinner.classList.add('spinner');
  spinner.src =
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c215736197347.57135ca123427.gif';
  document.querySelector('body').appendChild(spinner);
}

function remSpinner() {
  spinner.parentNode.removeChild(spinner);
}

function listCities(result) {
  result.forEach(value => {
    let nome = value.nome;
    // let id = value.id;
    const ul = document.createElement('ul');
    ul.className = 'li-value';
    ul.textContent = nome;
    document.querySelector('.menu').appendChild(ul);
  });
}

setTimeout(requestCities, 1000);

function requestCities() {
  const temp = cityId;

  fetch(
    ` https://servicodados.ibge.gov.br/api/v1/localidades/estados/${temp}/distritos `,
    {
      method: 'GET'
    }
  )
    .then(resp => {
      return resp.json();
    })
    .then(result => {
      console.log(result);
      // alert('Fetched');
      remSpinner();

      listCities(result);
    });
}
