var form =document.querySelector("form");
var InputOne=document.querySelector(".input1");
var InputTwo=document.querySelector(".input2");
var para=document.querySelector('p');

form.addEventListener("submit",function(eve){
    eve.preventDefault();

    if(InputOne.value===''||InputTwo.value===''){
        para.textContent=" Error ,Some Feild are blank";
          para.style.color='red';
        
    }
     
}) 