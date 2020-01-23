const params = new URLSearchParams(location.search);

// console.log(params.get('id'));
const city = params.get('id');

requestData();

function getId(result) {
  result.forEach(value => {
    if (value.nome === city) {
      let cityId = value.id;
      //   alert(`Fetched: id: ${cityId}`);

      requestCities(cityId);

      //   return cityId;
    }
  });
}

function requestData() {
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
    method: 'GET'
  })
    .then(resp => {
      return resp.json();
    })
    .then(result => {
      const cityID = getId(result);

      //   alert(`Fetched: id: ${cityID}`);
    });
}

function requestCities(cityId) {
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
    });
}
