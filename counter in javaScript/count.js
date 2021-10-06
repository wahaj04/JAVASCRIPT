let count = 0;
let value = document.getElementById("val");
let upval = document.getElementById("upval");
let downval = document.getElementById("downval");
let clr = document.getElementById("clear");

function countUp() {
    count += 1;
    value.innerHTML = count;
    if (count > 0) {    
        value.style.color = "green";
    }
    else if (count == 0) {
        value.style.color = "#000";
    }
};
function countDown() {
    if (count == 0) {
        value.style.color = "#ffb703";
        alert("Your number is less than zero so You can't go below zero")
    
    }
    else if (count > 0) {
        value.style.color = "red";
        count -=1 ;
        value.innerHTML = count;
    
    } 
};

function countReset() {
    count = 0;
    value.innerHTML = count;
    if (count == 0) {
        value.style.color = "#000";
    }
};