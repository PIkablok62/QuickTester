var cps = document.getElementById("cps");
var score = document.getElementById("score");
var mode = document.getElementById("mode");
var divNode = document.createElement("div");
var count_score = 0;
var darkmode = false;

function addClick() {
  count_score = count_score + 1
  score.innerHTML = "Score : " + count_score;
}

function reset_score() {
  count_score = 0
  score.innerHTML = "Score : ";
}