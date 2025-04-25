   //!Create an Html page with a button.when the button is clicked,change the text of a paragraph element.

var para=document.querySelector("p");
var button=document.querySelector("button");

button.addEventListener("click",function(){
    para.textContent="Nice to meet You";
    para.style.color="red";
})