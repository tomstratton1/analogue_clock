const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");




var date = new Date();
// console.log(date);

//Default time
var hr = date.getUTCHours();
var min = date.getUTCMinutes();
var sec = date.getUTCSeconds();

var time = [hr, min, sec];


let hrPosition = hr*360/12 + min*(360/12)/60;
let minPosition = min*360/60 + sec*(360/60)/60;
let secPosition = sec*360/60;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; 
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"; 
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"; 

//Other time zones 

function londontime() {
    let hrPosition = (hr+1)*360/12 + min*(360/12)/60;
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; 
}

function paristime() {
    let hrPosition = (hr+2)*360/12 + min*(360/12)/60;
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; 
}

function utctime() {
    let hrPosition = (hr)*360/12 + min*(360/12)/60;
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; 
}




