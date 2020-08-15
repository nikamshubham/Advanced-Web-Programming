var likecount = 1;
function likeCounter() {
    document.querySelector('#likebtn').innerHTML = "like ".concat(likecount);
    likecount++;
}

function CommentHere() {
    var cmtRead = document.querySelector("#inputHere").value;
    console.log(cmtRead);
    var cmtblock = document.querySelector('#child');
    cmtblock.innerHTML = cmtRead;
    document.querySelector('#parent').appendChild('#child')


}

