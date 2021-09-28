/* eslint-disable */
/*
// global
{
  'environmentRecord': {
    'message': 'Test',
    'weight': 55,
    'createMessanger': func,
    ...
  },
  'otherLexicalEnv': null

  //createMessenger
  'environmentRecord': {
    'message': 'Just learn it',
    'sender': 'Gromcode',
    'sendMessanger': func,
    ...
  },
  'otherLexicalEnv': global

  //run {
  'environmentRecord': { },
  'otherLexicalEnv': global
  }

  //sendMessage {
  'environmentRecord': { },
  'otherLexicalEnv': createMessenger()
  }
}
*/

const message = "Test";
const weight = 55;

function run() {
  console.log("RUN");
}

function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

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

const messanger = createMessenger();
messanger.sendMessage('TestName')
run();
