//ejercicio 1
const sum = (num1, num2) => num1+num2
sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))

//ejercicio2

const stringLength = str => console.log(`the length of "${str}" is:`, str.length)

//ejercicio3

function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")

const stringLength = str => {
    let length = str.length
    console.log
}

//ejercicio4

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff");

const showAlert = (name) =>  {return alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)}

//ejercicio6

const 
