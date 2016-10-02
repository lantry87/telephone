$(".box").hide();

var boxes = document.getElementsByClassName("box");

function scanner() {

  var chance = Math.floor(Math.random()*9)
  $(boxes[chance]).show();
}

scanner();

 $(".box").on("click", function() {
  	$(this).hide();
    setInterval(scanner(), 2000);
  });