// Data type js

//1. Исправь ошибки в скрипте
//2. Отвечай на вопросы в браузере
function checkAnswer(type, result){
    if(type == null){
        return "NULL" === result.toUpperCase();
    }
    return ((typeof(type)).toUpperCase()).toString() === result.toUpperCase()
}

let name ="Lexa";
let nameValue = prompt("data type let name = 'Lexa'");
alert(checkAnswer(name, nameValue));
let speed =6,3;
let speedValue = prompt("data type let speed = 6,7");
alert(checkAnswer(speed, speedValue));

let hasBicycle = true;

let hasBicycleValue = prompt("data type let hasBicycle = true");
alert(checkAnswer(hasBicycle, hasBicycleValue));

let hasMotorbike;
let hasMotorbikeValue = prompt("data type let hasMotorbike");
alert(checkAnswer(hasMotorbike, hasMotorbikeValue));
let hasBoat = null;
let hasBoatValue = prompt("data type let hasBoat = null");
alert(checkAnswer(hasBoat, hasBoatValue));

let uniqueValue = Symbol('Lexa');
let uniqueValueQuery = prompt("data type let unique = Symbol('Hello')");
alert(checkAnswer(uniqueValue, uniqueValueQuery));

let dataAboutyou ={
    name:'Lexa',
    gender:'male',
    girlFriend = 1
};
let dataAboutyouValue = prompt("data type let data = {key:value}");
alert(checkAnswer(dataAboutyou, dataAboutyouValue));
// Почитай почему массив ет объект
let testMe = ['Hello', 'my', 'name'];

console.lot(typeof(testMe));






