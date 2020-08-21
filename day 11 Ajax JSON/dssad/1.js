window.addEventListener("load", () => {
    //step 1
    var xhr = new XMLHttpRequest();
    //step 2
    const url = `https://reqres.in/api/users?page=2`;
    xhr.open("GET", url);
})