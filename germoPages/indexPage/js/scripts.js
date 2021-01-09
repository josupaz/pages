//Menu 
const menu = document.querySelector('.navbar');
const menuRelleno = document.querySelector('.relleno-menu');
const iconMenu = document.querySelector('.icon-menu');
const iconGoToHomeButton = document.querySelector('.icon-goto-home');
const iconMenuClose = document.querySelector('.icon-menu-close');



//Logo principal 

const contenido = document.querySelector('.container');
const logoPrincipal = document.querySelector('.logoPrincipal');




//Pages 
const homeButton = document.getElementById("homeId");
const productsButton = document.getElementById("productsId");
const servicesButton = document.getElementById("servicesId");
const devButton = document.getElementById("devId");

const subOneProductsButton = document.getElementById("sub-one-products");
const subTwoProductsButton = document.getElementById("sub-two-products");
const subOneServicesButton = document.getElementById("sub-one-service");
const subTwoServicesButton = document.getElementById("sub-two-service");
const subThreeServicesButton = document.getElementById("sub-three-service");


const imgHomeToProductsButton = document.getElementById("img-home-to-products");
const imgHomeToServicesButton = document.getElementById("img-home-to-services");
const imgHomeToDevButton = document.getElementById("img-home-to-dev");




//Contenido Pages
const homeContent = document.querySelector('.home');
const productsContent = document.querySelector('.products');
const servicesContent = document.querySelector('.services');
const devContent = document.querySelector('.dev');

/*
Titulos
*/
const titleHome = document.querySelector('.title-home');
const titleProducts = document.querySelector('.title-products');
const titleServices = document.querySelector('.title-services');
const titleDev = document.querySelector('.title-dev');


//Menu responsive
iconMenu.addEventListener('click', () => {
    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
    logoPrincipal.classList.toggle("backgroundWhiteLogoPrincipal");
});

iconMenuClose.addEventListener('click', () => {
    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
    logoPrincipal.classList.toggle("backgroundWhiteLogoPrincipal");
});


iconGoToHomeButton.addEventListener('click', () => {

    closeAllForms();

    if (productsButton.classList.contains("selected-menu")) {
        productsButton.classList.toggle("selected-menu");
        productsContent.classList.toggle("spread-page-active");
        titleProducts.classList.toggle("title-visible");
    }

    if (servicesButton.classList.contains("selected-menu")) {
        servicesButton.classList.toggle("selected-menu");
        servicesContent.classList.toggle("spread-page-active");
        titleServices.classList.toggle("title-visible");
    }

    if (devButton.classList.contains("selected-menu")) {
        devButton.classList.toggle("selected-menu");
        devContent.classList.toggle("spread-page-active");
        titleDev.classList.toggle("title-visible");
    }

    if (!homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        iconGoToHomeButton.classList.toggle("display-none");
    }

});

logoPrincipal.addEventListener('click', () => {

    closeAllForms();

    if (!homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        iconGoToHomeButton.classList.toggle("display-none");
        titleHome.classList.toggle("title-visible");

    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //       setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }


});

/*-------------------------------------------------------------------------------------------------------------*/

//Pages action
//setTimeout(functionInitial, 800);


homeButton.addEventListener('click', () => {

    closeAllForms();


    if (!homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        iconGoToHomeButton.classList.toggle("display-none");

        // homeContent.classList.toggle("display-none");
        titleHome.classList.toggle("title-visible");
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //       setTimeout(functionProductsDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //       setTimeout(functionServicesDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //       setTimeout(functionDevDisplayNone, 800);
    }


    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
    logoPrincipal.classList.toggle("backgroundWhiteLogoPrincipal");
});


productsButton.addEventListener('click', () => {

    closeAllForms();

    if (!productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        productsContent.classList.toggle("display-none");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);
    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
    logoPrincipal.classList.toggle("backgroundWhiteLogoPrincipal");

});


servicesButton.addEventListener('click', () => {

    closeAllForms();

    if (!servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        //        servicesContent.classList.toggle("display-none");
        titleServices.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);

    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
    logoPrincipal.classList.toggle("backgroundWhiteLogoPrincipal");
});


devButton.addEventListener('click', () => {

    closeAllForms();

    if (!devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        //        devContent.classList.toggle("display-none");
        titleDev.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
    logoPrincipal.classList.toggle("backgroundWhiteLogoPrincipal");
});








/*
SUB MENUS-----------------------------------------------------------------------------------------
*/


subOneProductsButton.addEventListener('click', () => {

    closeAllForms();

    if (!productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        productsContent.classList.toggle("display-none");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);
    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
});


subTwoProductsButton.addEventListener('click', () => {

    closeAllForms();

    if (!productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        productsContent.classList.toggle("display-none");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);
    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
});


subOneServicesButton.addEventListener('click', () => {

    closeAllForms();

    if (!servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        //        servicesContent.classList.toggle("display-none");
        titleServices.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);

    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
});


subTwoServicesButton.addEventListener('click', () => {

    closeAllForms();

    if (!servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        //        servicesContent.classList.toggle("display-none");
        titleServices.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);

    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
});


subThreeServicesButton.addEventListener('click', () => {

    closeAllForms();

    if (!servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        //        servicesContent.classList.toggle("display-none");
        titleServices.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);

    }

    if (iconGoToHomeButton.classList.contains("display-none")) {
        iconGoToHomeButton.classList.toggle("display-none");
    }

    menu.classList.toggle("spread-menu");
    menuRelleno.classList.toggle("spread-menu");
    iconMenu.classList.toggle("icon-close");
});




/*
CLOSE-ALL-FORMS-----------------------------------------------------------------------------------------
*/

const FormClose = document.querySelector('.form-close');
const FormClose2 = document.querySelector('.form-close2');
const FormClose3 = document.querySelector('.form-close3');
const FormClose4 = document.querySelector('.form-close4');
const FormClose5 = document.querySelector('.form-close5');
const FormClose6 = document.querySelector('.form-close6');

FormClose.addEventListener('click', () => {
    closeAllForms();
});

FormClose2.addEventListener('click', () => {
    closeAllForms();
});

FormClose3.addEventListener('click', () => {
    closeAllForms();
});

FormClose4.addEventListener('click', () => {
    closeAllForms();
});

FormClose5.addEventListener('click', () => {
    closeAllForms();
});

FormClose6.addEventListener('click', () => {
    closeAllForms();
});






/*
IMG-REDIRECCION-----------------------------------------------------------------------------------------
*/


imgHomeToProductsButton.addEventListener('click', () => {

    closeAllForms();

    if (!productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        iconGoToHomeButton.classList.toggle("display-none");
        titleProducts.classList.toggle("title-visible");
        //        productsContent.classList.toggle("display-none");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);
    }

    $("html, body").animate({ scrollTop: 0 }, 600);

});

imgHomeToServicesButton.addEventListener('click', () => {

    closeAllForms();

    if (!servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        iconGoToHomeButton.classList.toggle("display-none");
        //        servicesContent.classList.toggle("display-none");
        titleServices.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        titleDev.classList.toggle("title-visible");
        //        setTimeout(functionDevDisplayNone, 800);

    }
    $("html, body").animate({ scrollTop: 0 }, 600);

});

imgHomeToDevButton.addEventListener('click', () => {

    closeAllForms();

    if (!devContent.classList.contains("spread-page-active")) {
        devContent.classList.toggle("spread-page-active");
        devButton.classList.toggle("selected-menu");
        iconGoToHomeButton.classList.toggle("display-none");
        //        devContent.classList.toggle("display-none");
        titleDev.classList.toggle("title-visible");
    }

    if (homeContent.classList.contains("spread-page-active")) {
        homeContent.classList.toggle("spread-page-active");
        homeButton.classList.toggle("selected-menu");
        titleHome.classList.toggle("title-visible");
        //        setTimeout(functionHomeDisplayNone, 800);
    }

    if (productsContent.classList.contains("spread-page-active")) {
        productsContent.classList.toggle("spread-page-active");
        productsButton.classList.toggle("selected-menu");
        titleProducts.classList.toggle("title-visible");
        //        setTimeout(functionProductsDisplayNone, 800);
    }

    if (servicesContent.classList.contains("spread-page-active")) {
        servicesContent.classList.toggle("spread-page-active");
        servicesButton.classList.toggle("selected-menu");
        titleServices.classList.toggle("title-visible");
        //        setTimeout(functionServicesDisplayNone, 800);
    }

    $("html, body").animate({ scrollTop: 0 }, 600);
});





/*
Boton top -----------------------------------------------------------------------------------------
*/


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        closeAllForms();
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});





/*
Formulario de contacto -----------------------------------------------------------------------------------------
*/

const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

const contactFormButtonHome = document.querySelector('.contact-button-home');
const contactFormHome = document.querySelector('.form-contact-home');

const contactFormButtonProductPedidos = document.querySelector('.contact-button-product-sistema-pedidos');
const contactFormProductPedidos = document.querySelector('.form-contact-product-sistema-pedidos');

const contactFormButtonProductTickets = document.querySelector('.contact-button-product-sistema-tickets');
const contactFormProductTickets = document.querySelector('.form-contact-product-sistema-tickets');

const contactFormButtonServicesCts = document.querySelector('.contact-button-services-cts');
const contactFormServicesCts = document.querySelector('.form-contact-services-cts');

const contactFormButtonServicesIts = document.querySelector('.contact-button-services-its');
const contactFormServicesIts = document.querySelector('.form-contact-services-its');

const contactFormButtonDev = document.querySelector('.contact-button-dev');
const contactFormDev = document.querySelector('.form-contact-dev');


contactFormButtonHome.addEventListener('click', () => {

    closeAllForms();

    contactFormButtonHome.classList.toggle("background-color");
    contactFormHome.classList.toggle("display-none");
    $("html, body").animate({ scrollTop: 1200 }, 1900);
});

contactFormButtonProductPedidos.addEventListener('click', () => {

    closeAllForms();

    contactFormButtonProductPedidos.classList.toggle("background-color");
    contactFormProductPedidos.classList.toggle("display-none");
    if (!logoPrincipal.classList.contains("backgroundWhiteLogoPrincipal")) {
        $("html, body").animate({ scrollTop: 800 }, 500);
    } else {
        $("html, body").animate({ scrollTop: 500 }, 500);
    }

});

contactFormButtonProductTickets.addEventListener('click', () => {

    closeAllForms();

    contactFormButtonProductTickets.classList.toggle("background-color");
    contactFormProductTickets.classList.toggle("display-none");
    $("html, body").animate({ scrollTop: 2000 }, 500);
});


contactFormButtonServicesCts.addEventListener('click', () => {

    closeAllForms();

    contactFormButtonServicesCts.classList.toggle("background-color");
    contactFormServicesCts.classList.toggle("display-none");
    if (!logoPrincipal.classList.contains("backgroundWhiteLogoPrincipal")) {
        $("html, body").animate({ scrollTop: 1450 }, 500);
    } else {
        $("html, body").animate({ scrollTop: 500 }, 500);
    }
});

contactFormButtonServicesIts.addEventListener('click', () => {


    closeAllForms();

    contactFormButtonServicesIts.classList.toggle("background-color");
    contactFormServicesIts.classList.toggle("display-none");
    $("html, body").animate({ scrollTop: 2200 }, 500);
});


contactFormButtonDev.addEventListener('click', () => {

    closeAllForms();

    contactFormButtonDev.classList.toggle("background-color");
    contactFormDev.classList.toggle("display-none");
    $("html, body").animate({ scrollTop: 1400 }, 500);
});





/*
Funciones sin uso -----------------------------------------------------------------------------------------
*/


function functionInitial() {
    productsContent.classList.toggle("display-none");
    servicesContent.classList.toggle("display-none");
    devContent.classList.toggle("display-none");
}

function functionHomeDisplayNone() {
    homeContent.classList.toggle("display-none");
}

function functionProductsDisplayNone() {
    productsContent.classList.toggle("display-none");
}

function functionServicesDisplayNone() {
    servicesContent.classList.toggle("display-none");
}

function functionDevDisplayNone() {
    devContent.classList.toggle("display-none");
}




function closeAllForms() {

    if (!contactFormHome.classList.contains("display-none")) {
        contactFormButtonHome.classList.toggle("background-color");
        contactFormHome.classList.toggle("display-none");
    }

    if (!contactFormProductPedidos.classList.contains("display-none")) {
        contactFormButtonProductPedidos.classList.toggle("background-color");
        contactFormProductPedidos.classList.toggle("display-none");
    }

    if (!contactFormProductTickets.classList.contains("display-none")) {
        contactFormButtonProductTickets.classList.toggle("background-color");
        contactFormProductTickets.classList.toggle("display-none");
    }

    if (!contactFormServicesCts.classList.contains("display-none")) {
        contactFormButtonServicesCts.classList.toggle("background-color");
        contactFormServicesCts.classList.toggle("display-none");
    }

    if (!contactFormServicesIts.classList.contains("display-none")) {
        contactFormButtonServicesIts.classList.toggle("background-color");
        contactFormServicesIts.classList.toggle("display-none");
    }

    if (!contactFormDev.classList.contains("display-none")) {
        contactFormButtonDev.classList.toggle("background-color");
        contactFormDev.classList.toggle("display-none");
    }
}


//Envio de correos, codigo a depurar

function enviar_correo() {

    var correo = new FormData();


    correo.append('tipoConsulta', document.getElementById('tipoConsulta').value);
    correo.append('name', document.getElementById('name').value);
    correo.append('email', document.getElementById('email').value);
    correo.append('phone', document.getElementById('phone').value);
    correo.append('rrss', document.getElementById('rrss').value);
    correo.append('message', document.getElementById('message').value);

    $.ajax({
        url: "enviarcorreo.php",
        type: "POST",
        data: correo,
        cache: false,
        contentType: false,
        processData: false,
        success: function(resp) {
            console.log(resp);
            msj = JSON.parse(resp);
            alert(msj.mensaje);

            if (msj.error == 0) {
                document.getElementById("formHome").reset();
                closeAllForms();
            }
        }
    });

}

function enviar_correo2() {

    var correo = new FormData();


    correo.append('tipoConsulta', document.getElementById('tipoConsulta2').value);
    correo.append('name', document.getElementById('name2').value);
    correo.append('email', document.getElementById('email2').value);
    correo.append('phone', document.getElementById('phone2').value);
    correo.append('rrss', document.getElementById('rrss2').value);
    correo.append('message', document.getElementById('message2').value);

    $.ajax({
        url: "enviarcorreo.php",
        type: "POST",
        data: correo,
        cache: false,
        contentType: false,
        processData: false,
        success: function(resp) {
            console.log(resp);
            msj = JSON.parse(resp);
            alert(msj.mensaje);

            if (msj.error == 0) {
                document.getElementById("formPedidos").reset();
                closeAllForms();
            }
        }
    });


}


function enviar_correo3() {

    var correo = new FormData();


    correo.append('tipoConsulta', document.getElementById('tipoConsulta3').value);
    correo.append('name', document.getElementById('name3').value);
    correo.append('email', document.getElementById('email3').value);
    correo.append('phone', document.getElementById('phone3').value);
    correo.append('rrss', document.getElementById('rrss3').value);
    correo.append('message', document.getElementById('message3').value);

    $.ajax({
        url: "enviarcorreo.php",
        type: "POST",
        data: correo,
        cache: false,
        contentType: false,
        processData: false,
        success: function(resp) {
            console.log(resp);
            msj = JSON.parse(resp);
            alert(msj.mensaje);

            if (msj.error == 0) {
                document.getElementById("formTickets").reset();
                closeAllForms();
            }
        }
    });

}

function enviar_correo4() {

    var correo = new FormData();


    correo.append('tipoConsulta', document.getElementById('tipoConsulta4').value);
    correo.append('name', document.getElementById('name4').value);
    correo.append('email', document.getElementById('email4').value);
    correo.append('phone', document.getElementById('phone4').value);
    correo.append('rrss', document.getElementById('rrss4').value);
    correo.append('message', document.getElementById('message4').value);

    $.ajax({
        url: "enviarcorreo.php",
        type: "POST",
        data: correo,
        cache: false,
        contentType: false,
        processData: false,
        success: function(resp) {
            console.log(resp);
            msj = JSON.parse(resp);
            alert(msj.mensaje);

            if (msj.error == 0) {
                document.getElementById("formCts").reset();
                closeAllForms();
            }
        }
    });

}

function enviar_correo5() {

    var correo = new FormData();


    correo.append('tipoConsulta', document.getElementById('tipoConsulta5').value);
    correo.append('name', document.getElementById('name5').value);
    correo.append('email', document.getElementById('email5').value);
    correo.append('phone', document.getElementById('phone5').value);
    correo.append('rrss', document.getElementById('rrss5').value);
    correo.append('message', document.getElementById('message5').value);

    $.ajax({
        url: "enviarcorreo.php",
        type: "POST",
        data: correo,
        cache: false,
        contentType: false,
        processData: false,
        success: function(resp) {
            console.log(resp);
            msj = JSON.parse(resp);
            alert(msj.mensaje);

            if (msj.error == 0) {
                document.getElementById("formIts").reset();
                closeAllForms();
            }
        }
    });


}

function enviar_correo6() {

    var correo = new FormData();


    correo.append('tipoConsulta', document.getElementById('tipoConsulta6').value);
    correo.append('name', document.getElementById('name6').value);
    correo.append('email', document.getElementById('email6').value);
    correo.append('phone', document.getElementById('phone6').value);
    correo.append('rrss', document.getElementById('rrss6').value);
    correo.append('message', document.getElementById('message6').value);

    $.ajax({
        url: "enviarcorreo.php",
        type: "POST",
        data: correo,
        cache: false,
        contentType: false,
        processData: false,
        success: function(resp) {
            console.log(resp);
            msj = JSON.parse(resp);
            alert(msj.mensaje);

            if (msj.error == 0) {
                document.getElementById("formDev").reset();
                closeAllForms();
            }
        }
    });

}