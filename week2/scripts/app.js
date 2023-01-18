"use strict";
(function () {
    function DisplayHomePage() {
        {
            let AboutUsButton = document.getElementById("AboutUsBtn") ;
            AboutUsButton.addEventListener("click",DisplayHomePage);
            console.log("About Us Button clicked");
            location.href="about.html";
        };
    }
    function DisplayProductPage(){}
    function DisplayServicePage(){}
    function DisplayAboutPage(){}
    function DisplayContactPage(){}

    function Start() {
        console.log("app started");
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Product":
                DisplayProductPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Service":
                DisplayServicePage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }


    }

    window.addEventListener("load",Start);

})()