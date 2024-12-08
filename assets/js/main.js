const aColorNegro = (elemento) => {
  elemento.style.backgroundColor = '#000';
}

const cuadrado1 = document.getElementById('cuadrado1');
const cuadrado2 = document.getElementById('cuadrado2');
const cuadrado3 = document.getElementById('cuadrado3');
const cuadrado4 = document.getElementById('cuadrado4');

cuadrado1.addEventListener('click', ()=>{
  aColorNegro(cuadrado1);
});

cuadrado2.addEventListener('click', ()=>{
  aColorNegro(cuadrado2);
});

cuadrado3.addEventListener('click', ()=>{
  aColorNegro(cuadrado3);
});

cuadrado4.addEventListener('click', ()=>{
  aColorNegro(cuadrado4);
});