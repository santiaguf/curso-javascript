callApi();

function callApi(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("https://api.thedogapi.com/v1/images/search", requestOptions)
        .then(response => response.json())
        .then(result => printData(result))
        .catch(error => console.log('error', error));
}

function printData(result){

    const image = document.querySelector('#dog-photo');

    image.setAttribute('src', `${result[0].url}`);

    const title = document.querySelector('#dog-title');

    result[0].breeds[0] === undefined ? title.textContent = "la API no trajo la raza del perro" : title.textContent = `${result[0].breeds[0].name}`;

    const temperament = document.querySelector('#dog-temperament');

    result[0].breeds[0] === undefined ? temperament.textContent = "la API no trajo los temperamentos del perro" : temperament.textContent = `${result[0].breeds[0].temperament}`;
}