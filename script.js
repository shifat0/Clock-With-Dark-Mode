const html = document.querySelector("html");
const toggle = document.querySelector(".toggle");
const hourNiddle = document.querySelector(".hour");
const minuiteNiddle = document.querySelector(".minuite");
const secondNiddle = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
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

// Dark Mode Feature
toggle.addEventListener("click", (e) => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

// Converting number of range to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const setClock = () => {
  const dateFormat = new Date();
  const hour = dateFormat.getHours();
  const hourFormat = hour % 12;
  const minuite = dateFormat.getMinutes();
  const second = dateFormat.getSeconds();
  const day = dateFormat.getDay();
  const month = dateFormat.getMonth();
  const date = dateFormat.getDate();

  hourNiddle.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourFormat,
    0,
    11,
    0,
    360
  )}deg)`;

  minuiteNiddle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minuite,
    0,
    59,
    0,
    360
  )}deg)`;

  secondNiddle.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hourFormat}:${minuite < 10 ? `0${minuite}` : minuite}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`;
};

setClock();

// constinuosly calling setClock funtion in every second
setInterval(setClock, 1000);
