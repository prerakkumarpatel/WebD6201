"use strict";
(function () {
    function DisplayHomePage() {
        {
            let AboutUsButton = document.getElementById("AboutUsBtn") ;
            AboutUsButton.addEventListener("click",function () {
                // console.log("About Us Button clicked");
                location.href = "about.html";
            });
            let MainContent= document.getElementsByTagName("main")[0];
            let MainParagraph = document.createElement("p");
            MainParagraph.setAttribute("id","MainParagraph");
            MainParagraph.setAttribute("class","mt-3");
            MainParagraph.textContent="This is javascript generated paragraph";
            MainContent.appendChild(MainParagraph);
            //
            let FirstString = "This is {concatenated}";
            let SecondString = `${FirstString} the Main Paragraph.` ;
            MainParagraph.textContent= SecondString;

            let Article = document.createElement("article");
            let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is Article paragraph</p>`;
            Article.setAttribute("class","container");
            Article.innerHTML=ArticleParagraph;
            document.body.appendChild(Article);
        }
    }
    function DisplayProductPage(){}
    function DisplayServicePage(){}
    function DisplayAboutPage(){}
    function DisplayContactPage(){}

    function Start() {
        console.log("app started");
        let MainContent= document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        MainParagraph.textContent="This is javascript generated paragraph";
        MainContent.appendChild(MainParagraph);

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