let tdate = document.querySelector(".elem3");
let tyear = document.querySelector(".elem4");
let tday = document.querySelector(".elem1");
let tmonth = document.querySelector(".elem2");

function calender() {
  var today = new Date(); // creates a new date object with the current date and time

  var date = today.getDate(); // gets the day of the month (from 1 to 31)
  console.log(date);
  var day = today.getDay(); // gets the day of the week (from 0 to 6, 0 is Sunday)
  var month = today.getMonth(); // gets the month (from 0 to 11, 0 is January)
  var year = today.getFullYear(); // gets the year (four digits)
  tdate.innerHTML += date;
  tyear.innerHTML += year;
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  tday.innerHTML = days[day];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  tmonth.innerHTML += months[month];
}

calender();
