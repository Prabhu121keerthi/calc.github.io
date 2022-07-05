document.querySelector("#clear").addEventListener("click",() => {
  document.querySelector('.display').value = '';
});

const backspace = () => {
  const num = document.querySelector('.display').value.slice(0,-1);
  document.querySelector('.display').value = num;
}

const displayData = (val) => {
  document.querySelector('.display').value += val;
}

const equate = () => {
  const x = document.querySelector('.display').value;
  const y = eval(x);
  document.querySelector('.display').value = y;
}