var smallTimerDuration = 15 * 60;
var mediumTimerDuration = 30 * 60;
var largeTimerDuration = 60 * 60;

var intervalA;
var intervalB;
var intervalC;

const smallBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("sometimesburns");
const largeBtn = document.getElementById("neverburns");
const done = document.getElementById("stop");

var smallStyles = smallBtn.getAttribute("style");
var mediumStyles = mediumBtn.getAttribute("style");
var largeStyles = largeBtn.getAttribute("Style");


smallBtn.addEventListener("click", function() {

  smallBtn.style.display = "none";

  intervalA = setInterval(function() {
    smallTimerDuration--;

    if (smallTimerDuration < 0) {
      alert("apply sunscreen");
      smallTimerDuration = 15 * 60;
      clearInterval(intervalA);
      document.getElementById("timer1").innerHTML = "15:00";
      smallBtn.style.display = "block";
      smallBtn.setAttribute("style", smallStyles);
      smallTimerDuration = 15 * 60;
    }

    smallUpdateDisplay();
  }, 1000);

  
});



mediumBtn.addEventListener("click", function() {
  mediumBtn.style.display = "none";

  intervalB = setInterval(function() {
    mediumTimerDuration--;

    if (mediumTimerDuration < 0) {
      alert("apply sunscreen");
      mediumTimerDuration = 30 * 60;
      clearInterval(intervalB);
      document.getElementById("timer2").innerHTML = "30:00";
      mediumBtn.style.display = "block";
      mediumBtn.setAttribute("style", mediumStyles);
      mediumTimerDuration = 30 * 60;
    }
    
    mediumUpdateDisplay();
  }, 1000);
});

largeBtn.addEventListener("click", function() {
  largeBtn.style.display = "none";

  intervalC = setInterval(function() {
    largeTimerDuration--;

    if (largeTimerDuration < 0) {
      alert("apply sunscreen");
      largeTimerDuration = 60 * 60;
      clearInterval(intervalC);
      document.getElementById("timer3").innerHTML = "60:00";
      largeBtn.style.display = "block";
      largeBtn.setAttribute("style", largeStyles);
      largeTimerDuration = 60 * 60
    }

    largeUpdateDisplay();
  }, 1000);
});


function stopTimer() {
  clearInterval(intervalA);
  document.getElementById("timer1").innerHTML = "15:00";
  smallBtn.style.display = "block";
  smallBtn.setAttribute("style", smallStyles);
  smallTimerDuration = 15 * 60;


  clearInterval(intervalB);
  document.getElementById("timer2").innerHTML = "30:00";
  mediumBtn.style.display = "block";
  mediumBtn.setAttribute("style", mediumStyles);
  mediumTimerDuration = 30 * 60;

  clearInterval(intervalC);
  document.getElementById("timer3").innerHTML = "60:00";
  largeBtn.style.display = "block";
  largeBtn.setAttribute("style", largeStyles);
  largeTimerDuration = 60 * 60;
}

function smallUpdateDisplay() {
  var minutes = Math.floor(smallTimerDuration / 60);
  var seconds = smallTimerDuration - (minutes * 60);
  var secondsVal;
  secondsVal = seconds;
  if (seconds < 10) {
    secondsVal = "0" + seconds;
  }

   document.getElementById("timer1").innerHTML = minutes + ":" + secondsVal;
}


function mediumUpdateDisplay() {
  var minutes = Math.floor(mediumTimerDuration / 60);
  var seconds = mediumTimerDuration - (minutes * 60);
  var secondsVal;
  secondsVal = seconds;
  if (seconds < 10) {
    secondsVal = "0" + seconds;
  }
  document.getElementById("timer2").innerHTML = minutes + ":" + secondsVal;
}

function largeUpdateDisplay() {
  var minutes = Math.floor(largeTimerDuration / 60);
  var seconds = largeTimerDuration - (minutes * 60);
  var secondsVal;
  secondsVal = seconds;
  if (seconds < 10) {
    secondsVal = "0" + seconds;
  }

  document.getElementById("timer3").innerHTML = minutes + ":" + secondsVal;
}



