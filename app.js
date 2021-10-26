const getData = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

getData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
