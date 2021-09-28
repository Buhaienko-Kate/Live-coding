// используют для http запросов в основном (fetch)

// input: obj
// output: undefined
function saveUser(userData) {
  // input: url(string), options(опционально)(object)
  // output:promise
  const res = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    // input: calback
    // output: promise
    .then(responce => responce.json())
    //     {
    //   console.log(responce.status);
    //     // input: -
    //     // output: promice
    //     // .json() конвертируетв обьект
    //   const body = responce.json();
    //   console.log(body);
    // })
    .then(body => {
      console.log(body);
    });
  console.log(res);
}

const user = {
  email: 'test@mail.com',
  firstName: 'Kate',
  lastName: 'Bugayenko',
  city: 'Odessa',
  age: 31,
};
console.log(JSON.stringify(user));

saveUser(user);
