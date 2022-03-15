// Formula 1 (to update the rating of a player)

var formula1 = function (ratingF, scoreF, expectedScoreF) {
  return Math.round(ratingF + 32 * (scoreF - expectedScoreF));
};


//Formula 2 Player A (to predict the outcome of a game)
var formula2PA = function (ratingA, ratingB) {
  var equation = (ratingA - ratingB) / 400;
  equation = Math.pow(10, equation);
  equation = equation + 1;
  equation = 1 / equation;
  return equation.toFixed(2);
};


//Formula 2 Player B(to predict the outcome of a game)
var formula2PB = function (ratingA, ratingB) {
  var equation = (ratingB - ratingA) / 400;
  equation = Math.pow(10, equation);
  equation = equation + 1;
  equation = 1 / equation;
  return equation.toFixed(2);
};


//Function used to predict outcome
var predictOutcome = function (ratingA, ratingB) {
  var returnObj = {
    rating_a: ratingA,
    rating_b: ratingB,
    prediction_a: formula2PA(ratingB, ratingA),
    prediction_b: formula2PB(ratingB, ratingA),
  };
  return returnObj;
};

let ratingA = 2500;
let Score = 1; 
let ratingB = 2000;
let scoreF = 1
let value = predictOutcome(ratingA,ratingB)
console.log(value)
console.log('New Rating For Player A = ' + formula1(ratingA, scoreF, value.prediction_a))
console.log('New Rating For Player B = ' + formula1(ratingB, scoreF, value.prediction_b))



document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    const Player1 =  Number(document.getElementById("ratingA").value);
    const Player1Name =  document.getElementById("ratingAName").value;
    const Player2 =  Number(document.getElementById("ratingB").value);
    const Player2Name =  document.getElementById("ratingBName").value;
    const e =  document.getElementById("score");
    const score = Number(e.options[e.selectedIndex].value);
    let value = predictOutcome(Player1,Player2);
     const span = document.getElementById("Player1")
     const span2 = document.getElementById("Player2")
     const p1 = document.getElementById("Player1name")
     const p2 = document.getElementById("Player2name")
      span.textContent = ""
      span2.textContent = ""
      p1.textContent = ""
      p2.textContent = ""
      console.log(Player1Name)
    if (score === 1) {
      const Player1NewRating = formula1(Player1, 1, value.prediction_a);
      const Player2NewRating = formula1(Player2, 0, value.prediction_b);
      txt = document.createTextNode(Player1NewRating);
      span.appendChild(txt);
      txt1 = document.createTextNode(Player2NewRating);
      span2.appendChild(txt1);
    }
    if (score === 2) {
      const Player1NewRating = formula1(Player1, 0.5, value.prediction_a);
      const Player2NewRating = formula1(Player2, 0.5, value.prediction_b);
      txt = document.createTextNode(Player1NewRating);
      span.appendChild(txt);
      txt1 = document.createTextNode(Player2NewRating);
      span2.appendChild(txt1);
    }
    if (score === 3) {
      const Player1NewRating = formula1(Player1, 0, value.prediction_a);
      const Player2NewRating = formula1(Player2, 1, value.prediction_b);
      txt = document.createTextNode(Player1NewRating);
      span.appendChild(txt);
      txt1 = document.createTextNode(Player2NewRating);
      span2.appendChild(txt1);
    }
    p1.appendChild(document.createTextNode(Player1Name))
    p2.appendChild(document.createTextNode(Player2Name))

  })
})