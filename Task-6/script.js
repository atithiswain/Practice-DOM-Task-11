let btn=document.querySelector("button");
let h3=document.querySelector("h3");
//In this Code we are Using SetInterval...

btn.addEventListener("click",function(){
           let Count=0;
          setInterval(function(){
            h3.textContent=
            Count=Count+1;

          },1000); 
});