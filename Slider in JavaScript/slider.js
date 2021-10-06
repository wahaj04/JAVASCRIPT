let count = 0;
let images = ["https://cdn.heleo.com/wp-content/uploads/2016/02/08144528/stevejobs-1200x6003.png", "https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg", "http://www.marchettidesign.net/demo/optimized-bootstrap/code.jpg", "http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg", "http://www.marchettidesign.net/demo/optimized-bootstrap/campus.jpg", "https://webartdevelopers.com/blog/wp-content/uploads/2018/12/css-buttons.png",
    "https://www.w3schools.com/bootstrap/ny.jpg", "https://www.w3schools.com/bootstrap/chicago.jpg", "https://www.w3schools.com/bootstrap/la.jpg"];


let image = document.getElementById("img");
image.src = images[count];
const dot = document.getElementById("doted");

for (i = 0; i < images.length; i++) {
    let span = document.createElement("span");
    span.setAttribute("id", `dot-${i}`);
    span.setAttribute("onclick", `currentSlide(${i})`);
    dot.appendChild(span);

}
function currentSlide(event) {
    let span = document.getElementById(`dot-${event}`).style.backgroundColor="red";
    console.log(span)
    // for (doted = 0; doted < images.length; doted++) {
    image.src = images[event];

    // }
    for ( index = 0; index < images.length; index++) {
       // const event = images.length[event];
        
        if(event == index){
            document.getElementById(`dot-${index}`).style.backgroundColor="red";
        }else{
            document.getElementById(`dot-${index}`).style.backgroundColor="#717171";
        }
    }



};

// }
function changeImg() {
    if (count < images.length - 1) {
        // alert("hello");
        count++;
        image.src = images[count];
        // alert("enough");

    } else {
        count = 0;
        image.src = images[count];
    }
};

function prevImg() {

    // alert("return");
    if (count === 0) {
        count = images.length - 1
        image.src = images[count];

    } else {
        count--;
        image.src = images[count];
    }
};



