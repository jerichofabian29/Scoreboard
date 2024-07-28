let homeScore = document.querySelector("#homeScore");
let guestScore = document.querySelector("#guestScore");

const homePlusOne = document.querySelector("#homeAddOne");
const homePlusTwo = document.querySelector("#homeAddTwo");
const homePlusThree = document.querySelector("#homeAddThree");

const guestPlusOne = document.querySelector("#guestAddOne");
const guestPlusTwo = document.querySelector("#guestAddTwo");
const guestPlusThree = document.querySelector("#guestAddThree");

let homeCount = 0;
let guestCount = 0;

function addOne(){
    homeCount ++;
    homeScore.textContent = homeCount;

}
     
function addTwo(){
    homeCount +=2;
    homeScore.textContent = homeCount;

}
     
function addThree(){
    homeCount +=3;
    homeScore.textContent = homeCount;

}   

guestAddOne = () =>{
    guestCount ++;
    guestScore.textContent = guestCount;
}

guestAddTwo = () =>{
    guestCount +=2;
    guestScore.textContent = guestCount;
}

guestAddThree = () => {
    guestCount +=3;
    guestScore.textContent = guestCount;
}



homePlusOne.addEventListener("click", addOne);
homePlusTwo.addEventListener("click", addTwo);
homePlusThree.addEventListener("click", addThree);


guestPlusOne.addEventListener("click", guestAddOne);
guestPlusTwo.addEventListener("click", guestAddTwo);
guestPlusThree.addEventListener("click", guestAddThree);
