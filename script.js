const adviceIdEl = document.querySelector("#adviceId");
const adviceEl = document.querySelector("#advice");
const rolldice = document.querySelector(".dice-icon-container");

async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data.slip);
  adviceIdEl.textContent = data.slip.id;
  adviceEl.textContent = data.slip.advice;
}

rolldice.addEventListener("click", fetchData);
