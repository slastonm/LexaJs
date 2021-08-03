// Data type js

function checkAnswer(type, result){
    if(type == null){
        return "NULL" === result.toUpperCase();
    }
    if(Number.isNaN(type)){
        return "NAN" === result.toUpperCase();
    }
    return ((typeof(type)).toUpperCase()).toString() === result.toUpperCase()
}

let userName ="Lexa";
let nameValue = prompt("data type String('Lexa')");
alert(checkAnswer(String(userName), nameValue));


let valueOperation = '4'/'2';
let operationValue = prompt("data type after:  '4'/'2' ");
alert(checkAnswer(valueOperation, operationValue));

let numValue = "321";
let numValueQuestion = prompt("data type after:  Number('321') ");
alert(checkAnswer(Number(numValue), numValueQuestion));

let strNumValue = "321Lexa";
let numValueQuestion2 = prompt("data type after:  Number('321Lexa') ");
alert(checkAnswer(Number(strNumValue), numValueQuestion2));


let trueNumValue = true;
let numValueQuestion3 = prompt("data type after:  Number(true) ");
alert(checkAnswer(Number(trueNumValue), numValueQuestion3));