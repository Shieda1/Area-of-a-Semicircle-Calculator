// https://calculator.swiftutors.com/area-of-a-semicircle-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofaSemicircleRadio = document.getElementById('areaofaSemicircleRadio');
const radiusoftheSemicircleRadio = document.getElementById('radiusoftheSemicircleRadio');

let areaofaSemicircle;
const PI = Math.PI;
let radiusoftheSemicircle = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

areaofaSemicircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the Semicircle';
  radiusoftheSemicircle = v1;
  result.textContent = '';
});

radiusoftheSemicircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of a Semicircle';
  areaofaSemicircle = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofaSemicircleRadio.checked)
    result.textContent = `Area of a Semicircle = ${computeAreaofaSemicircle().toFixed(5)}`;

  else if(radiusoftheSemicircleRadio.checked)
    result.textContent = `Radius of the Semicircle = ${computeRadiusoftheSemicircle().toFixed(5)}`;
})

// calculation

function computeAreaofaSemicircle() {
  return (PI * Math.pow(Number(radiusoftheSemicircle.value), 2)) / 2;
}

function computeRadiusoftheSemicircle() {
  return Math.sqrt((Number(areaofaSemicircle.value) * 2) / PI);
}