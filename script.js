
gsap.from("h1", {opacity: 0, delay: .5, duration: 2})
gsap.from(".form", {opacity: 0, delay: 1.1, duration: 1.5})
gsap.from("#billSplit", {opacity: 0, delay: 1.3, duration: 1.5})
gsap.from("#totalTip", {opacity: 0, delay: 1.6,duration: 1.5})
gsap.from("#totalAmount", {opacity: 0, delay: 1.9, duration: 1.5})


const button = document.querySelector('#btn');
button.addEventListener ('click', calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener ('click', showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e){
    e.preventDefault();
    const payment = document.querySelector('#payment').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if(payment ===""||people ===""||people < 1||payment== isNaN||people ==isNaN){
        swal("Oops", "Please enter your information", "error");
    }
    else if(isNaN(payment)|| isNaN(people)){
        swal("Oops", "Please enter a number", "error");
    }
    


let amountPerPerson = payment/people;
let tipPerPerson = (payment*tip)/people;
let totalSum = amountPerPerson + tipPerPerson;

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector('#dividedBill').textContent = amountPerPerson;
document.querySelector('#dividedTip').textContent = tipPerPerson;
document.querySelector('#billAndTip').textContent = totalSum;
}