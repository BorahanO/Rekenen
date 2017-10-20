const myAnswer = document.getElementById('answerinput');
const myFeedback = document.getElementById('feedback');
const myProblem = document.getElementById('problem');
const img = document.getElementById('Image');
const myScore = document.getElementById('score');
const myLevel = document.getElementById('level');

var score = 0;
var level = 1;
var answer;


var a = getNumber();
var b = getNumber();
var c = getNumber();
var d = a + b * c;

function Level2(){
  a = getNumber();
  b = getNumber();
  c = getNumber();
}

function Level4(){
  a = getNumber();
  b = getNumber();
  c = getNumber();
  d = a + b * c;
}

createProblem();

function createProblem(){
  switch (level) {
  case 1:
    answer = getNumber() + " * " + getNumber();
    theProblem = answer;
  break;

  case 2:
  Level2();
    answer = a + " * " + "?  = " + a * b;
    theProblem = answer;
  break;

  case 3:
      answer = getNumber() + " + " + getNumber() + " * " + getNumber();
      theProblem = answer;
  break;

  case 4:
  Level4();
    answer = a + " + " + b + " * " + "?  = " + d;
    theProblem = answer;
  break;
  }
  myProblem.innerHTML = theProblem;
  myAnswer.focus();
}

/*
level 1 = a*b= eval(a*b)
level 2 = a*?= eval(a*b)
level 3 = a*b*c= eval(a*b*c)
level 4 = a+b*?= eval(a+b*c)
*/

function changeScore(){
  if (score == 10) {
    level++;
    setLevel.innerHTML = level;
  }
  else if(score == 20){
    level++;
    setLevel.innerHTML = level;
  }
  else if(score == 30){
    level++;
    setLevel.innerHTML = level;
  }
  else if(score == 40){
    level++;
    setLevel.innerHTML = level;
  }
}

function getNumber(){
  return Math.floor(Math.random()*9+1)
}

myAnswer.addEventListener("keydown",keyPressed,false);

function keyPressed(evt){

    if(evt.keyCode == 13)
    {
      if(level == 1 || level == 3){
        if (eval(theProblem) == myAnswer.value){
          feedback.src = "img/good.png";
          score += 1;
          setScore.innerHTML = score;
          setLevel.innerHTML = level;
        }
        else
        {
          feedback.src = "img/wrong.png";
        }
        window.setTimeout(wait,500);
        }
        else if (level == 2)
        {
        if (b == myAnswer.value){
          feedback.src = "img/good.png";
          score += 1;
          setScore.innerHTML = score;
          setLevel.innerHTML = level;
        }
        else
        {
          feedback.src = "img/wrong.png";
        }
        window.setTimeout(wait,500);
      }
      else if (level == 4)
      {
      if (c == myAnswer.value){
        feedback.src = "img/good.png";
        score += 1;
        setScore.innerHTML = score;
        setLevel.innerHTML = level;
      }
      else
      {
        feedback.src = "img/wrong.png";
      }
      window.setTimeout(wait,500);
      }
      changeScore();
      //console.log(score);
      console.log(level);
    }
}

function wait(){
  feedback.src = "img/white.png";
  myAnswer.value = "";
  createProblem();
}
