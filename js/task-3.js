const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInputChange);
console.log("inputEl:", inputEl);

function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue.trim() === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = inputValue;
  }
}
