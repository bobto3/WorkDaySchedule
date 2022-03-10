var currentDayEl = $("#currentDay");

function displayTime() {
    var rightNow = moment().format("dddd MMM Do");
    currentDayEl.text(rightNow);
  }

displayTime();