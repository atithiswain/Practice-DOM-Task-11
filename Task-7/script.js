let about=document.querySelector("#About");
let Home=document.querySelector("#Home");
let Contact=document.querySelector("#Contact");

// console.log(about,Home,Contact); 
let aboutText=document.querySelector("#aboutText");
let HomeText=document.querySelector("#HomeText");
let ContactText =document.querySelector("#ContactText");


Home.addEventListener("click",function(){
    TextController();
    HomeText.style.display="block";
HomeText.style.width ="50%"; 
});
about.addEventListener("click",function(){
    TextController();
    aboutText.style.display="block";
    aboutText.style.width ="50%"; 
});
Contact.addEventListener("click",function(){
    TextController();
    ContactText.style.display="block";
    ContactText.style.width ="50%"; 
});

// We are Create a function that help us to control the h3 Flow on it!
function TextController(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    })
}