// bad option
const withdraw = (clients, balances, names, amount) => {
  let result = 0;
  clients.forEach(function (client, index) {
    if (client.includes(names) && balances[index] >= amount) {
      result = balances[index] - amount;
    } else if (client.includes(names) && balances[index] < amount) {
      result = -1;
    }
  });
  return result;
};

// good option
const withdraw = (clients, balances, clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// bad
function withdraw(clients, balances, client, amount) {
  let i = 0;
  for (; i < clients.length; ++i) {
    if (clients[i] === client) {
      break;
    }
  }

  balances[i] -= amount;
  console.log(balances);
  return balances[i] > 0 ? balances[i] : -1;
}
// good
function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] >= amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
}

// bad
const withdraw = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);
  console.log(clientNum);

  const isEnough = num => {
    if (num > amount) {
      return num - amount;
    }
    return -1;
  };
  const newBalances = balances.map(isEnough);
  return newBalances[clientNum];
};

// good
const withdraw = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);

  if (balances[clientNum] >= amount) {
    return -1;
  }

  balances[clientNum] -= amount;
  return balances[clientIndex];
};

const clients = ['Tom', 'Jack', 'Andrey'];
const balances = [100, 1200, 80];
const client = 'Jack';
const amount = 500;
console.log(withdraw(clients, balances, client, amount));
console.log(balances);

// bad
const withdraw = (clients, balances, client, amount) => {
  //put your code here
  let ind = clients.indexOf(client);
  let bal = balances[ind];
  return bal < amount ? -1 : (balances[ind] -= amount);
};
// good
const withdraw = (clients, balances, client, amount) => {
  //put your code here
  const index = clients.indexOf(client);
  return balances[index] < amount ? -1 : (balances[index] -= amount);
};

// bad
function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    balances[indexOfPerson] -= amount;
    return amount;
  }
  if (balances[indexOfPerson] < amount) {
    return -1;
  }
}
// good
function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }

  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

// bad
function withdraw(clients, balances, client, amount) {
  let output = 0;
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    output = balances[indexOfPerson] - amount;
    return output;
  }
  output = -1;

  return output;
}
// good
function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }

  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}
// ...
const users = [18, 89, 58, 23, 24, 26, 28];
const res = users.filter(age => age > 18);
console.log(res.length);
