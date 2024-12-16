
// body
let body = document.querySelector("body");


// random number
let randomNum = Math.random() * 10;

// convert
let num = Math.round(randomNum);

// print
console.log(num);


// condition apply

if (num == 0) {
    console.log("bg - red");
    body.style.backgroundColor = "red";
    // window.alert("Occupied Red By 0");
}

else if (num == 1) {
    console.log("bg - yellow")
    body.style.backgroundColor = "yellow";
    // window.alert("Occupied Yellow By 1");
}

else if (num == 2) {
    console.log("bg - purple")
    body.style.backgroundColor = "purple";
    // window.alert("Occupied Purple By 2");
}

else if (num == 3) {
    console.log("bg - green")
    body.style.backgroundColor = "green";
    // window.alert("Occupied Green By 3");
}

else if (num == 4) {
    console.log("bg - pink")
    body.style.backgroundColor = "pink";
    // window.alert("Occupied Pink By 4");
}

else if (num == 5) {
    console.log("bg - orange")
    body.style.backgroundColor = "orange";
    // window.alert("Occupied Orange By 5");
}

else if (num == 6) {
    console.log("bg - black")
    body.style.backgroundColor = "black";
    // window.alert("Occupied Black By 6");
}

else if (num == 7) {
    console.log("bg - aqua")
    body.style.backgroundColor = "aqua";
    // window.alert("Occupied Aqua By 7");
}

else if (num == 8) {
    console.log("bg - darkcyan")
    body.style.backgroundColor = "darkcyan";
    // window.alert("Occupied Darkcyan By 8");
}

else if (num == 9) {
    console.log("bg - gray")
    body.style.backgroundColor = "gray";
    // window.alert("Occupied Gray By 9");
}

else if (num == 10) {
    console.log("bg - wheat")
    body.style.backgroundColor = "wheat";
    // window.alert("Occupied Wheat By 10");
}

else (
    console.log("nohting")
);