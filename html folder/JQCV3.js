function myFunction1() {
    var x =document.getElementById("expandEdu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display= "none";
    }
}

function myFunction2() {
    var x =document.getElementById("expandProEx");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display= "none";
    }
}

function myFunction3() {
    var x =document.getElementById("expandSkills");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display= "none";
    }
}
function myFunction4() {
    var x =document.getElementById("expandForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display= "none";
    }
}

function counterFunction() {
    var counter = document.getElementById("count");
    var count = 0;
    count = parseInt(counter.innerHTML);
    count = count + 1;
    counter.innerHTML = count;
}
    window.onload = counterFunction;
