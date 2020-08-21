
window.addEventListener("load", () => {
    fetch("https://api.covid19api.com/summary").then((api) => {
        // console.log(api);
        return api.json();
    }).then((actualdata) => {
        //console.log(actualdata);
        Domoperation(actualdata);
    })

})

let getData = (actualdata) => {
    fetch("https://api.covid19api.com/summary").then((apicovid) => {
        //  console.log(actualdata);
        return apicovid.json();
    }).then((jsondoc) => {
        Dom(jsondoc);
    })

}

function Domoperation(jsonfile) {
    //console.log(jsonfile);
    let TotalConfirmed = jsonfile.Global.TotalConfirmed;
    // console.log(TotalConfirmed);
    $("#id1").val(TotalConfirmed);

    let TotalDeaths = jsonfile.Global.TotalDeaths;
    //console.log(TotalDeaths);
    $("#id2").val(TotalDeaths);

    let TotalRecovered = jsonfile.Global.TotalRecovered;
    //console.log(TotalRecovered);
    $("#id3").val(TotalRecovered);

}


function Dom(jsondoc) {
    console.log(jsondoc);
    var Search_Country = $("#search").val();

    for (var i = 0; i < jsondoc.Countries.length; i++) {
        var country1 = $("#search").val().toUpperCase();
        var country2 = jsondoc.Countries[i].Country.toUpperCase();
        if (country1 == country2) {
            var totconfirmed = jsondoc.Countries[i].TotalConfirmed;
            $("#id4 :nth-child(2) :nth-child(1)").val(totconfirmed);

            var totdeath = jsondoc.Countries[i].TotalDeaths;
            $("#id5 :nth-child(2) :nth-child(1)").val(totdeath);

            var totrecovered = jsondoc.Countries[i].TotalRecovered;
            $("#id6 :nth-child(2) :nth-child(1)").val(totrecovered);
            //document.querySelector("#id6").children[1].children[0].value = totrecovered;
        }
    }
    $("#search").val("");
};



