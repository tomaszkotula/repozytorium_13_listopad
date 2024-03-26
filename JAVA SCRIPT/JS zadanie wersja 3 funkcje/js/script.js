console.log("Zadanie JS numer 1");
let nameFirst = ["Akademia108"];
const nameTakeapart = function(){
let result1 = [...nameFirst];
return result1;
}
let nameSecond = nameTakeapart(nameFirst)
console.log(nameSecond);

const nameReverse = function(){
    let result2 = nameSecond.reverse();
    return result2;
}
let nameThird = nameReverse(numberSecond);
console.log(nameThird);

const nameConnect = function(){
    let  result3 = nameThird.join("");
    return result3;
}
let nameFourth = nameConnect(numberThird);
console.log(nameFourth);



