const url = 'http://localhost:8888';

let fetchData = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify(data),
  // headers: new Headers({
  //   'Content-Type': 'application/json; charset=UTF-8'
  // })
}
// POST
// fetch(url, fetchData)
//   .then(reponse => reponse.json())
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   });

// GET
// fetch(url, fetchData)
//   .then(async response => {
//     return await response.json();
    
//   })
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   });

// DELETE
// fetch(url, fetchData)
//   .then(reponse => reponse.json())
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   });

// PUT
// fetch(url, fetchData)
//   .then(reponse => reponse.json())
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   });


// const testuje = function() {
//     (async () => {
//     const rawResponse = await fetch(url, {
//             'method': 'POST',
//             'body': JSON.stringify(payload),
//             mode: 'cors',
//         })
//     })()
//     const content = await rawResponse.JSON();

//     console.log(content);uploadData)
// }

const login = document.querySelector('form')
login.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      'name': 'twojaaa staatawwddra'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });  
})