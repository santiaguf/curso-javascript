/* eslint-disable no-alert */
/* eslint-disable no-console */

function printData(result) {
  const API_FAIL = 'La API no trajo información';

  const image = document.querySelector('#dog-photo');

  image.setAttribute('src', `${result[0].url}`);

  const title = document.querySelector('#dog-title');

  title.textContent = result[0].breeds[0] === undefined ? API_FAIL : `${result[0].breeds[0].name}`;

  const temperament = document.querySelector('#dog-temperament');

  temperament.textContent = result[0].breeds[0] === undefined ? API_FAIL : `${result[0].breeds[0].temperament}`;
}

function callApi() {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const apiUrl = 'https://api.thedogapi.com/v1/images/search';

  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => printData(result))
    .catch((error) => console.info('error', error));
}

callApi();
