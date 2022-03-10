var currentDayEl = $("#currentDay");
var currentTimeEl = $("#currentTime");
var el11am = $("#11am")

console.log(el11am);

function displayDay() {
    var rightNow = moment().format("dddd MMM Do");
    currentDayEl.text(rightNow);
  }

  function displayTime() {
    var rightNow = moment().format("h:m a");
    currentTimeEl.text(rightNow);
  }

displayDay();
displayTime();
