let callajaxXML = () => {
    // step. 1
    let xhr = new XMLHttpRequest;
    // step.2
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors")
    // step.3
    xhr.setRequestHeader("accept", "application/xml");
    xhr.onload = () => {
        const xmldoc = xhr.responseXML;
        // console.log(xmldoc);
        // pass the xml data for DOM XmlDomOperation. 
        XmlDomOperation(xmldoc);
    }
    //step.4
    xhr.send();
}

let XmlDomOperation = (xmldoc) => {
    const authorlist = xmldoc.querySelectorAll("Author");
    console.log(xmldoc);
    for (var i = 0; i < authorlist.length; i++) {
        let authoritem = authorlist[i];

        var fname = xmldoc.children[0].children[0].children[0].innerHTML;
        var id = xmldoc.children[0].children[0].children[1].innerHTML;
        var lname = xmldoc.children[0].children[0].children[3].innerHTML;

        var pcb = document.querySelector("#parentcontrolblock");
        var newElement = pcb.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.children[1].innerHTML = "ID" + " = " + id + fname + " " + lname;
        pcb.insertBefore(newElement, pcb.firstChild);
    }



    console.log(authorlist);

    console.log(fname);
}