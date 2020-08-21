function sumbitform() {

    //fetch all values
    var username = document.querySelector("#uname").value;

    var Password = document.querySelector("#pwd").value;

    console.log(username);
    // assign into below div tag
    document.querySelector("#username").innerHTML = username;
    document.querySelector("#password").innerHTML = Password;

    // clear the fields
    document.querySelector("#uname").value = "";
    document.querySelector("#pwd").value = "";
}
