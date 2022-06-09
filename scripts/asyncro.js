//синхронный код
const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

//callback function - устаревшый способ выполнения асинхроного кода
const btn2 = document.querySelector('#btn2');
coffeeURL = 'https://media.istockphoto.com/id/1349239413/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BD%D1%96%D0%BC%D0%BE%D0%BA-%D0%BA%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%85-%D0%B7%D0%B5%D1%80%D0%B5%D0%BD-%D1%96-%D1%87%D0%B0%D1%88%D0%BA%D0%B0-%D1%87%D0%BE%D1%80%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D0%B2%D0%B8-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BE%D0%BC%D1%83-%D1%81%D1%82%D0%BE%D0%BB%D1%96.webp?s=612x612&w=is&k=20&c=BuUXnQOx6-vOj_jFKQCOkORt0VVT_EwNjcNmrNguoIQ=';

function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

btn2.addEventListener('click', () => {
  loadAsset(coffeeURL, 'blob', displayImage);
});

//Промисы — новый стиль написания асинхронного кода, который используется в современных Web API
const btn3 = document.querySelector('#btn3');
productsURL = 'https://reqres.in/api/products/';

btn3.addEventListener('click', () => {
/*   fetch(productsURL).then(function(response) {
    return response.json();
  }).then(function(json) {
    products = json;
    initialize();
  }).catch(function(err) {
    console.log('Ошибка загрузки: ' + err.message);
  }); */

  console.log ('Starting');
  let image;

  fetch(coffeeURL).then((response) => {
    console.log('It worked :)')
    return response.blob();
  }).then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  }).catch((error) => {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });

  console.log ('All done!');
});




