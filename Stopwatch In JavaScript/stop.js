function stopWatch() {

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

     document.getElementById("hours").innerHTML = hours + ":";

     document.getElementById("minutes").innerHTML = minutes + ":";
    
     document.getElementById("seconds").innerHTML = seconds;

    setTimeout(stopWatch, 1000);
} 

const button = document.getElementById("startstop");
let timestop = true;
document.getElementById("startstop").addEventListener("click", () =>{
   timestop = !timestop
   if(timestop) {
        button.innerHTML  = "STOP"
        document.getElementById("startstop");
   }else {
       button.innerHTML = "START"
       document.getElementById("startstop");
   }
stopWatch();
});

// let hours = 0;
// let minutes = 0;
// let seconds = 0;

// function stopWatch() {
//     seconds++;
//     if(seconds / 60 === 1) {
//         seconds = 0;
//         minutes++;
//         if(minutes / 60 === 1) {
//             minutes = 0;
//             hours++;
//         }
//     }


//     document.getElementById("hours").innerHTML = hours + ":";
//     document.getElementById("minutes").innerHTML = minutes + ":";
//     document.getElementById("seconds").innerHTML = seconds;

//     setTimeout(stopWatch, 100);
// }

