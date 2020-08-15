function validate() {
    /*
    var uname = document.login.uname.value;
    var pwdd = document.login.pwd.value;
    /*/
    var uname = document.getElementById("uname").value;
    var pwdd = document.getElementById("pass").value;


    if (uname == "" || pwdd == "") {
        console.log("both fields are empty");
    }
    if (pwdd.length < 4 || pwdd.length > 12) {
        alert("Password must be min 5 and max 12 characters");
        return;
    }


}