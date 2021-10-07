function Total() {
    let subj1 = parseInt(document.getElementById("eng").value);
    let subj2 = parseInt(document.getElementById("urdu").value);
    let subj3 = parseInt(document.getElementById("islam").value);
    let subj4 = parseInt(document.getElementById("math").value);
    let subj5 = parseInt(document.getElementById("phy").value);
    let student = document.getElementById("student").value;

    if (subj1 > 0 && subj1 < 100 && subj2 > 0 && subj2 < 100 && subj3 > 0 && subj3 < 100 && subj4 > 0 && subj4 < 100 && subj5 > 0 && subj5 < 100) {
        let subsum = subj1 + subj2 + subj3 + subj4 + subj5;
        alert(subsum);
        var percentage = (subsum / (500)) * 100;
        
        document.getElementById("paragraph").innerHTML = student +"<br/>"+ "YOUR PERCENTAGE THIS" + "<br/>" + percentage;
    }
    else {
        alert("Your value must be greater than zero")
    };
};