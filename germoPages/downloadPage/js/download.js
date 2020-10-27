
// /* Interruptor ON/OFF */ 
document.getElementsByClassName("slider round").onclick = function() {myFunction()};

function myFunction() {

  // /* CANTIDAD DE APP - SI SE AGREGA UNA APP SE DEBE SUMAR AQUI */
  var cantidadDeApps = 5;
  var i;

  if(document.getElementById("clase-con-id0").classList.contains("col-lg-4")){
    //itero hasta la cantidad de apps y cambio los estilos vista-detalle
    for( i = 0 ; i < cantidadDeApps; i++ ){

      document.getElementById("clase-con-id"+i).classList.add("col-lg-12");
      document.getElementById("clase-con-id"+i).classList.remove("col-lg-4");
    
      document.getElementById("card-detail"+i).classList.remove("card");
      document.getElementById("card-detail"+i).classList.add("detail");
      
      document.getElementById("title-card-detail"+i).classList.remove("title-card");
      document.getElementById("title-card-detail"+i).classList.add("title-card-detail");
    
      document.getElementById("img-card-detail"+i).classList.remove("img-card");
      document.getElementById("img-card-detail"+i).classList.add("img-card-detail");
    
      document.getElementById("description-card-detail"+i).classList.remove("description-card");
      document.getElementById("description-card-detail"+i).classList.add("description-card-detail");
    
      document.getElementById("box-btn-detail"+i).classList.remove("box-btn");
      document.getElementById("box-btn-detail"+i).classList.add("box-btn-detail");
    }

  }else{


        for( i = 0 ; i < cantidadDeApps; i++ ){

      document.getElementById("clase-con-id"+i).classList.remove("col-lg-12");
      document.getElementById("clase-con-id"+i).classList.add("col-lg-4");
    
      document.getElementById("card-detail"+i).classList.add("card");
      document.getElementById("card-detail"+i).classList.remove("detail");
      
      document.getElementById("title-card-detail"+i).classList.add("title-card");
      document.getElementById("title-card-detail"+i).classList.remove("title-card-detail");
    
      document.getElementById("img-card-detail"+i).classList.add("img-card");
      document.getElementById("img-card-detail"+i).classList.remove("img-card-detail");
    
      document.getElementById("description-card-detail"+i).classList.add("description-card");
      document.getElementById("description-card-detail"+i).classList.remove("description-card-detail");
    
      document.getElementById("box-btn-detail"+i).classList.add("box-btn");
      document.getElementById("box-btn-detail"+i).classList.remove("box-btn-detail");
    }
    
  }
}




