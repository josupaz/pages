document.getElementsByClassName("home").onclick = function () { myFunction() };

function myFunction(){

    alert("funciona1");



    if(document.getElementsById("idHome").classList.contains("home")){
    document.getElementById("idHome").innerHTML += `
    TEXTO NUEVO
    `;
}

    if(document.getElementsById("idHome").classList.contains("home"))
    {
        alert("funciona2");
    }else{
        alert("funciona3");
    }


    alert("funcionaFin");
}