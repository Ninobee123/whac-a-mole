document.body.innerHTML = `

<h2>Your Score:</h2>
<h2 id="score">0</h2>

<h2>Time left:</h2>
<h2 id="time-left">60</h2>
<h1></h1>
<div class="grid">
<div class="square" id="1"></div>
<div class="square" id="2"></div>
<div class="square" id="3"></div>
<div class="square" id="4"></div>
<div class="square" id="5"></div>
<div class="square" id="6"></div>
<div class="square" id="7"></div>
<div class="square" id="8"></div>
<div class="square" id="9"></div>
</div>
`;
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let  hitPosition;
let currentTime = 10;
let timerId = null

function randomSquare(){
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  
  let randomSquare = squares[Math.floor(Math.random()*9)]
  randomSquare.classList.add('mole')


  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', ()=> {
    if(square.id ==  hitPosition){
      result++;
      score.textContent = result
      hitPosition = null
    }
  })
})
function moveMole(){

  
  timerId = setInterval(randomSquare,500)
}

moveMole()

function countDown(){
currentTime --
timeLeft.textContent= currentTime;

if (currentTime == 0) {
  clearInterval(countDownId)
  clearInterval(timerId)
 // alert('GAME OVER! your final score is ' + result)
 document.querySelector('h1').innerHTML = `GAME OVER! your final score is ${result}`
}
}

let countDownId = setInterval(countDown, 1000)

//1:18:16