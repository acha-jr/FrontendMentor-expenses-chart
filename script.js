const spent = [...document.querySelectorAll("span")];
const bars = [...document.querySelectorAll(".bar")];
const days = [...document.querySelectorAll(".day p")];

fetch("./data.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    spent.forEach((e) => {
      let current = spent.indexOf(e);
      spent[current].textContent = "$" + data[current].amount;
      days[current].textContent = data[current].day;
      bars[current].style.height = `${data[current].amount * 3}px`;
    });
  });

// Sets background for current day
let today = new Date().getDay();
today = today - 1;

bars[-1] = bars[6];
for (i = 0; i < bars.length; i++) {
  bars[i].classList.remove("today");
}
bars[today].classList.add("today");

console.log(window.location.hostname);