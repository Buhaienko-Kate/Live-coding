/* eslint-disable */

// лексическое окружение -это про память, scope- это просто границы
//global глобальное лексичесское окружение(создается на момент сканирования, до выполнения)

/* {
    'enviromentRecord: {
        'message': 'Test',
        'weight': 55,
        createMessenger: func,
        ****
    },
    'outerLexicalEnv': null (ссылка на внешнее лексическое окружение)

   }
*/

// createMessenger лексическое окружение
/* {
    'enviromentRecord: {
        'message': 'Just learn it',
        'sender': 'Gromcode',
        sendMessage: func,
        ****
    },
    'outerLexicalEnv': global

   }
*/

// run лексическое окружение
/* {
    'enviromentRecord: { },
    'outerLexicalEnv': global
   }
*/

// sendMessage лексическое окружение
/* {
    'enviromentRecord: { },
    'outerLexicalEnv': createMessenger
   }
*/
const message = 'Test message';
const weight = 55;

//  if for создают лексическое окружение во время сканирования
for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

if (true) {
  const currentDay = 'Monday';
  console.log(message);
}

// console.log(currentDay); not difined

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

// console.log(sender); not defined
const messanger = createMessenger();
messanger.sendMessage('TestName');
run();

// удалится лексическое окружение, когда не будет на нее ссылки,
// или после выполнения кода, если оно ни кому больше не нужно
// глобальное лексическое окружение удаляется после выполнения всего кода

// замыкание - ф-ция фиксирует за собой лексическое окружение и не дает ему уалиться,
// из-за того, что есть переменная, которая ссылается на это лексическое окружение
// (если создается дополнительная переменная,в которой ф-ция будет выполняться,
// и эту переменную мы можем использовать в дальнейшем коде)
// (дает гибкость, и разные вызовы функции независимы друг от друга)

// scope - область видимости ( все, что в фигурных скобках)
// глобальный scope - весь код
const messanger1 = createMessenger();
messanger1.setSender('Nova poshta');
messanger1.sendMessage('Andrey');

const messanger2 = createMessenger();
messanger2.setSender('Rozetka');
messanger2.sendMessage('Denis');
messanger2.sendMessage('Yevgen');

const messanger3 = createMessenger();
