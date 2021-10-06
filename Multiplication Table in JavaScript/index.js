function myFunction() {     
let number = document.getElementById("table").value;
let result;
let times = document.getElementById("times").value;
if(number > 0 && times > 0 ){
    for (i = 1; i <= times; i++) {
        result = number * i;
        document.write(number + "x" + i + "=" + result +"<br/>");
    }
}else {
    alert("Your number must be greater than zero")
}
}
