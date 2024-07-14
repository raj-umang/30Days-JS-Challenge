//Task 01

function add(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
}

function sub(){
    let num1 = 50;
    let num2 = 30;
    return num1 - num2;
}

function mul(){
    let num1 = 10;
    let num2 = 20;
    return num1 * num2;
}

function div(){
    let num1 = 50;
    let num2 = 10;
    return num1 / num2;
}

function rem(){
    let num1 = 10;
    let num2 = 3;
    return num1 % num2;
}

//Task 06
let chai = 10
chai += 10
console.log(chai)

let chaim = 10
chai -= 10
console.log(chaim)

//Task 08
let num1 =10
let num2 = 20
if(num1 < num2){
    console.log(num1)
}
if(num1 > num2){
    console.log(num2)
}


//Task 09
if(num1 <= num2){
    console.log(num1)
}
if(num1 >= num2){
    console.log(num2)
}

//Task 10
let num6 = 10
let num7 = 20
console.log(num6==num7)
console.log(num6===num1)

//Task 11

if(num1 && num2){
    console.log("Both conditions are true")
}

if(num1 || num2){
    console.log("At least one condition is true")
}

if(!num1){
    console.log(num1)
}

//Task 14
let ter = num1<0 ? "negative" : "positive"
console.log(ter)