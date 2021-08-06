// Data type js

window.addEventListener('DOMContentLoaded', (event) => {
   let number = document.getElementById('checkNumber');

   let sideA = document.querySelector('#sideA');
   let sideB = document.querySelector('#sideB');
   let planetName = document.querySelector('#planetName');
   let checkNumber = document.querySelector('#evenCheck');
   let calculateArea = document.querySelector('#calculateArea');
   let checkPlanet = document.querySelector('#getPlanetNumber');

    checkNumber.addEventListener('click', ()=>{
        // создать проверку на парность числа. Так же исключить 0 и пустую строку
        console.log(number.value);
        // alert("even value");
        // alert("odd value");
    });

    calculateArea.addEventListener('click', ()=>{
        console.log(sideA.value);
        console.log(sideB.value);
        // cоздать расчет площи треугольника, сделать проверку размеров и значения полей
        alert("Area value");
    });

    checkPlanet.addEventListener('click', ()=>{
        console.log(planetName.value.toUpperCase());
        //Исключть пустую строку и имена что не подходят.
        alert("Not found");
        alert("Planetn Name number 7");
    });

});