function clean() {
    document.querySelector('html').children[1].children[0].children[0].children[2].value = "";
    // document.querySelector('#output').value = "";
}

function add(x) {
    document.querySelector('#output').value = document.querySelector('#output').value + x;
}

/*
function equal(i) {
    if (i === "=") {
        document.querySelector("#output").value = eval(document.querySelector("#output").value);
    }
}
*/



function equal() {

    var exp = document.querySelector('#output').value;
    if (exp) {
        document.querySelector('#output').value = eval(exp);
    }
}


function evaluate() {
    document.getElementById("output").value = eval(document.getElementById("output").value);
}

document.getElementById("equal").onclick = function () {
    evaluate();
} 