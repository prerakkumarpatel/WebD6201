"use strict";
(function () {
    function DisplayHomePage() {
        let AboutUsButton = document.getElementById("AboutUsBtn") ;
        AboutUsButton.addEventListener("click",function () {
            console.log("About Us Button clicked");
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


    function DisplayProductPage(){
        console.log("Display Product page called");
    }
    function DisplayServicePage(){
        console.log("Display Service page called");}
    function DisplayAboutPage(){
        console.log("Display About page called");}
    function DisplayContactPage(){
        console.log("Display Contact page called");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click" , function (event){

            if(subscribeCheckbox.checked){
                console.log("Send contact");
                let contact = new Contact(fullName.value,contactNumber.value,emailAddress.value);
                if(contact.serialize()){
                    console.log(contact);
                    let key = contact.FullName.substring(0,1)+Date.now();
                    localStorage.setItem(key,contact.serialize());
                }
            }

        });}
    function DisplayContactListPage(){
        console.log("Display Contact List page called");
        if(localStorage.length>0){
            let contactList = document.getElementById("contactList");
            let data ="";

            let keys = Object.keys(localStorage);
            let index = 1;
            for(const key of keys){

                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data+=`
                <tr>
                    <th scope="row" class="text-center">${index}</th>
                    <td>${contact.FullName}</td>
                    <td>${contact.ContactNumber}</td>
                    <td>${contact.EmailAddress}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`;
                index++ ;
            } contactList.innerHTML = data;
        }

    }

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
            case "Contact List":
                DisplayContactListPage();
                break;
        }


    }

    window.addEventListener("load",Start);

})()