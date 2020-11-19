//--------------------------------------------------------------------Downloads Page--------------------------------------------------------------------
//
// Para crear una nueva tarjeta agregar un nuevo elemento a los arrays ubicado en VARIABLES GLOBALES y RESPETAR LO SIGUIENTE:
//
// Title        | Size: min: 1 max: 23 caracteres. [a partir de 12 caracteres, debe ser >= a 2 palabras].
// Descripcion  | Size: min: 1 max: 100 caracteres.
// Img          | Size: 100 x 100 px.
//
//---------------------------------------------------------------------Version 1.0---------------------------------------------------------------------

//---------------------(--VAR--GLOBALES--)----------------------
var titles = ["Office 2016",
  "KMSAuto 1.5.3",
  "Anydesk Particulares",
  "Anydesk didot",
  "Anydesk Mega",
  "Anydesk Dante"];

var imgs = [
  "https://img.icons8.com/bubbles/100/000000/office-365.png",
  "https://img.icons8.com/color/100/000000/windows8.png",
  "https://img.icons8.com/color/100/000000/anydesk.png",
  "https://img.icons8.com/color/100/000000/anydesk.png",
  "https://img.icons8.com/color/100/000000/anydesk.png",
  "https://img.icons8.com/color/100/000000/anydesk.png"];

var descriptions = [
  "Multiversion, MultIdioma",
  "Aplica en windows y Office 2004",
  "no description",
  "no description",
  "no description",
  "no description"];

var urls = [
  "https://drive.google.com/file/d/1pQu1umdLCKVRnbtdO78_nP3A7WrtWCqF/view?usp=sharin",
  "http://dl.xytech.com.ar/KMSAUTO.rar",
  "https://get.anydesk.com/j7fO0983/AnyDesk_XYTech_Particulares.exe",
  "http://dl.xytech.com.ar/anydesk-clients/AnyDesk_XYTech_Client_didot.exe",
  "http://dl.xytech.com.ar/anydesk-clients/AnyDesk_XYTech_Client_mega.exe",
  "http://dl.xytech.com.ar/anydesk-clients/AnyDesk_XYTech_Client_dante.exe"];

 
//--------------(--FIN--VAR--GLOBALES--)----------------------
var cantDeApps = titles.length;
var i;

createCard();
createSwitch();


// /* Interruptor ON/OFF */ 
document.getElementsByClassName("slider round").onclick = function () { myFunction() };







// CREACION DE TARJETA
function createCard() {
  var row = document.getElementById("row");

  for (i = 0; i < cantDeApps; i++) {
    row.innerHTML += `
          
      <div id="bootsId`+ i + `" class="col-sm-12 col-md-6 col-lg-4">
      <div id="card`+ i + `"class="card">
        <span id="title-card`+ i + `" class="title-card">${titles[i]}</span>
         <img id="img-card`+ i + `"class="img-card" src="${imgs[i]}"/>
         <span id="description-card`+ i + `"class="desctription-card">${descriptions[i]}</span>
         <a id="box-btn`+ i + `" href="${urls[i]}"  target="_blank" class="box-btn">Download</a>
      </div>
      </div>`;
  }

}

// CREACION DE SWITCH
function createSwitch() {
  var switchV = document.getElementById("switch-general");
  switchV.innerHTML += `
          
  <img class="icons-general" src="https://img.icons8.com/ios-glyphs/30/000000/bank-cards.png"/>
  <label class="switch" >
  <input type="checkbox">
  <div class="slider round"  onclick="myFunction()"></div>
    </label>
    <img class="icons-general" src="https://img.icons8.com/metro/26/000000/list.png"/> 
    `;
}


// /* Interruptor ON/OFF */ 
function myFunction() {

  if (document.getElementById("bootsId0").classList.contains("col-lg-4")) {

    //itero hasta la cantidad de apps y cambio los estilos vista-detalle
    for (i = 0; i < cantDeApps; i++) {

      document.getElementById("bootsId" + i).classList.remove("col-lg-4");
      document.getElementById("bootsId" + i).classList.add("col-lg-12");

      document.getElementById("card" + i).classList.remove("card");
      document.getElementById("card" + i).classList.add("card-detail");

      document.getElementById("title-card" + i).classList.remove("title-card");
      document.getElementById("title-card" + i).classList.add("title-card-detail");

      document.getElementById("img-card" + i).classList.remove("img-card");
      document.getElementById("img-card" + i).classList.add("img-card-detail");

      document.getElementById("description-card" + i).classList.remove("description-card");
      document.getElementById("description-card" + i).classList.add("description-card-detail");

      document.getElementById("box-btn" + i).classList.remove("box-btn");
      document.getElementById("box-btn" + i).classList.add("box-btn-detail");
    }

  } else {


    for (i = 0; i < cantDeApps; i++) {

      document.getElementById("bootsId" + i).classList.remove("col-lg-12");
      document.getElementById("bootsId" + i).classList.add("col-lg-4");

      document.getElementById("card" + i).classList.add("card");
      document.getElementById("card" + i).classList.remove("card-detail");

      document.getElementById("title-card" + i).classList.add("title-card");
      document.getElementById("title-card" + i).classList.remove("title-card-detail");

      document.getElementById("img-card" + i).classList.add("img-card");
      document.getElementById("img-card" + i).classList.remove("img-card-detail");

      document.getElementById("description-card" + i).classList.add("description-card");
      document.getElementById("description-card" + i).classList.remove("description-card-detail");

      document.getElementById("box-btn" + i).classList.add("box-btn");
      document.getElementById("box-btn" + i).classList.remove("box-btn-detail");
    }

  }

}

