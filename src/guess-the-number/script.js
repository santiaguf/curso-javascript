const getRandomNumber = () => Math.floor(Math.random() * (101 - 1)) + 1;

const endGame = () => {
  document.getElementById('value').classList.add('hide');
  document.getElementById('sendBtn').classList.add('hide');
  document.getElementById('playBtn').classList.remove('hide');
  document.getElementById('playBtn').textContent = 'Play again!';
}

  let theNumber = getRandomNumber();
  let count = 0;
  const attempts = 6;

  const btn = document.getElementById('sendBtn');
  btn.addEventListener('click', () => {
    const userNumber = document.getElementById('value').value;
    if (theNumber > userNumber) {
      printResult(`your number is lower, ${attempts - count} attempts`, `warning`);
      count++;
    }
    if (theNumber < userNumber) {
      printResult(`your number is greater, ${attempts - count} attempts`, `warning`);
      count++;
    }
    if (theNumber == userNumber) {
      printResult(`congrats, the number is ${theNumber}`, `success`);
      count = 0;
      endGame();
    }
    if (count == 7) {
      printResult(`Sorry, the number is ${theNumber}`, `error`);
      count = 0;
      endGame();
    }
  });

const printResult = (response, color) => {
  const divResult = document.getElementById('result');
  divResult.innerHTML = response;
  divResult.className = `nes-text is-${color}`;
}

const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  document.getElementById('result').className = `nes-text is-normal`;
  document.getElementById('result').innerHTML = 'type a number between 1 and 100';
  document.getElementById('value').classList.remove('hide');
  document.getElementById('sendBtn').classList.remove('hide');
  document.getElementById('playBtn').classList.add('hide');
  theNumber = getRandomNumber();
})