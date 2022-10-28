btnAdd = document.querySelector('#btn1');
btnDec = document.querySelector('#btn2');
Num = document.querySelector('#number');

let numero = 0

btnAdd.addEventListener('click', () => {
  numero++;
  Num.innerText = numero;
  console.log(numero);
})

btnDec.addEventListener('click', () => {
  numero--;
  Num.innerText = numero;
  console.log(numero);
})

