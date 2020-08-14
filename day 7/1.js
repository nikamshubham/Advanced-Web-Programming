// Created abc function
function abc() {
    console.log("this is abc function");
};

// created xyz function which accept function as a parameter
function xyz(abc) {
    abc();
};

//calling xyz function
// If we pass no,float or string then it willgive you an error you need to pass function only
xyz(abc);

//xyz(1) or xyz("string") this will give an error..


