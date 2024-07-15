const days = document.getElementById("day");
const months = document.getElementById("month");
const years = document.getElementById("year");
const para = document.querySelectorAll(".error-para");
const yearDisplay = document.getElementById("age-years");
const monthDisplay = document.getElementById("age-months");
const dayDisplay = document.getElementById("age-days");
const errorDisplay = document.querySelectorAll(".error");
const submitButton = document.getElementById("submit-btn");

let ageDay;
let ageMonth;
let ageYear;

submitButton.addEventListener("click", ageCalculate);

function ageCalculate() {
  ageDay = parseFloat(days.value);
  ageMonth = parseFloat(months.value);
  ageMonth = ageMonth - 1;
  ageYear = parseFloat(years.value);
  let date = new Date();
  let isValid = false;
  let birthYear;
  birthYear = new Date(ageYear, ageMonth, ageDay);

  if (ageDay > birthYear.getDate() || ageDay < 1) {
    isValid = false;
    para[0].classList.add("error");
    errorDisplay[0].innerHTML = "Must be a valid day";
    days.style.border = "1px solid red";
    return;
  } else {
    para[0].classList.remove("error");
    errorDisplay[0].innerHTML = "";
    days.style.border = "";
    isValid = true;
  }

  if (ageMonth >= 12 || ageMonth < 0) {
    isValid = false;
    para[1].classList.add("error");
    errorDisplay[1].innerHTML = "Must be a valid month";
    months.style.border = "1px solid red";
    return;
  } else {
    para[1].classList.remove("error");
    errorDisplay[1].innerHTML = "";
    months.style.border = "";
    isValid = true;
  }
  if (ageYear > date.getFullYear()) {
    isValid = false;
    para[2].classList.add("error");
    errorDisplay[2].innerHTML = "Must be in the past";
    years.style.border = "1px solid red";
    return;
  } else {
    para[2].classList.remove("error");
    errorDisplay[2].innerHTML = "";
    years.style.border = "";
    isValid = true;
  }
  if (isValid) {
    let currentDate = new Date();
    let currentyear = currentDate.getFullYear() - new Date(0);
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let myAgeYear = currentyear - birthYear.getFullYear();
    let myAgeMonth = currentMonth - birthYear.getMonth();
    let myAgeDay = currentDay - birthYear.getDate();

    if (myAgeDay < 0) {
      myAgeMonth -= 1;
      let previousMonth = new Date(currentyear, currentMonth, 0);
      myAgeDay += previousMonth.getDate() - 1;
    }

    if (myAgeMonth < 0) {
      myAgeYear -= 1;
      myAgeMonth += 12;
    }

    yearDisplay.innerHTML = myAgeYear;

    monthDisplay.innerHTML = myAgeMonth;

    dayDisplay.innerHTML = myAgeDay;
  } else {
    return;
  }
}
