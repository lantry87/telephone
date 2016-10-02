$(".box").hide();

var boxes = document.getElementsByClassName("box");
var score = 0;
// to stop multiple clicks 
var canClick = false;

function scanner() {

  var chance = Math.floor(Math.random()*9)
  $(boxes[chance]).show();
  canClick = true;
}

scanner();

$(".box").on("click", function() {
  if(canClick){
    canClick = false;
    $(this).hide();
    score++;
    $("#score").text(score);
    setInterval(scanner(), 2000);
  }
});