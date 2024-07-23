# Project Related To DOM 

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-ndxzvq?file=index.html)
## Solution Code

## project 1

```javascript
console.log("Hitesh")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click', (e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor =e.target.id 
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'blue'){blue
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id 
    }
  })
})

```
## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



```

## project 3 solution code 

``` javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 Solution code

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



```

## Project 5 Solution Code 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body style="background-color: #212121; color: #fff;" >
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="https://www.youtube.com/@chaiaurcode">Youtube Channel</a>
    </nav>
    <main>
        <h1>Start Should Change the Background Color Every Second </h1>
         <button id="Start">Start</button>
         <button id="Stop">Stop</button>
    </main>
</body>
<script>
    // generate a random color 
    const randomColor = function () {
        const hex = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor((Math.random()) * 16)]
        }
        return color;
    };
    let intervalId;
    const startChangingColor = function() {
        if (!intervalId) {
            intervalId = setInterval(changeBgColor,500);
        }
      
        function changeBgColor(){
            document.body.style.backgroundColor = randomColor()
        }
    };
    const stopChangingColor = function() {
        clearInterval(intervalId)
        console.log('Changing Color Has Been Stopped');
        intervalId = null;
    };

    document.getElementById('Start').addEventListener('click', startChangingColor)
    
    document.getElementById('Stop').addEventListener('click', stopChangingColor)

      </script>
</html>
```

## Project 6 Solution Code 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event KeyCodes</title>
    <style>
        table,th,td{
            border: 1px solid #e7e7e7;
        }
        .project{
            background-color: #1c1c1c;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100vh;
        }

        .color{
            color: aliceblue;
            display: flex;
            flex-direction: row;
        }
    </style>
</head>
<body>
    <nav>
    </nav>
    <div class="project">
        <div id="insert">
            <div class="key">Press the key and watch magic</div>
        </div>
    </div>
</body>
<script>
   const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


</script>
</html>

```