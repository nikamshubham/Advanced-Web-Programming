function changename() {
    //   prompt("hello");
    // This console log never prints on output screen it just used for debugging purpose andyou can see it in console 
    //console.log("function called correctly");

    let a = document.querySelector(".inner");
    a.style.color = "#484f4f";

    a.innerHTML = "Aishwarya I Love You";


}

function returnname() {
    let b = document.querySelector(".inner");
    b.style.color = "black";

    b.innerHTML = "Hello User";

}

/*
function changename() {
myWindow = window.prompt("are you sure??");   // Opens a new window
}
*/