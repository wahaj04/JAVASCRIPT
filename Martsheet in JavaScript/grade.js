function Total() {
    let subj1 = parseInt(document.getElementById("eng").value);
    let subj2 = parseInt(document.getElementById("urdu").value);
    let subj3 = parseInt(document.getElementById("islam").value);
    let subj4 = parseInt(document.getElementById("math").value);
    let subj5 = parseInt(document.getElementById("phy").value);
  
    if (subj1 > 0 && subj1 < 100 && subj2 > 0 && subj2 < 100 && subj3 > 0 && subj3 < 100 && subj4 > 0 && subj4 < 100 && subj5 > 0 && subj5 < 100) {
        document.write("Your Total Marks" + "<br/>" + "ENGLISH" +subj1 + "<br/>" + "URDU" + subj2 +"<br/>"+"ISLAMIAT"+ subj3 +"<br/>"+ "MATHS" + subj4 +"<br/>"+"PHYSICS" + subj5 + "<br/>");

    let subsum = subj1 + subj2 + subj3 + subj4 + subj5 ;
    window.alert(subsum);
    var percentage = (subsum / (500)) * 100;
        document.write(percentage);

    } 
    else {
        alert("Your value must be greater than zero")
    };
    // console.log("hello")
};
