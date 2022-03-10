var currentDayEl = $("#currentDay");
var currentTimeEl = $("#currentTime");

//store element text content into variable
var row9ALabelEl = $("#row9ALabel");
var timeBlock9 = row9ALabelEl.text;
var row9ABlockEl = $("#row9ABlock")

row9ABlockEl.css("background-color", "red");
console.log(row9ABlockEl);

//compare text content to current time hour
// function compareTime() {

//     if (text content = current hour) {
//         blockTextEl.css("background-color", "red")
//     }
//     if (text content < current hour) {
//         blockTextEl.css("background-color", "gray")
//     }
//     if (text content > current hour) {
//         blockTextEl.css("background-color", "green")
//     }
// }

function displayDay() {
    var rightNow = moment().format("dddd MMM Do");
    currentDayEl.text(rightNow);
  }

  function displayTime() {
    var rightNow = moment().format("h:mm a");
    currentTimeEl.text(rightNow);
  }

// compareTime();
displayDay();
displayTime();
