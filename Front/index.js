const url = 'http://localhost:8888/';

let fetchData = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
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
fetch(url, fetchData)
  .then(async response => {
    return await response.json();
    
  })
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

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