//!Create a Page with Two images and a Button.When the Button is clicked ,Swap the source attribute of the Images.
var Btn=document.querySelector('button');
var img1=document.querySelector('.img1');
var img2=document.querySelector('.img2');


Btn.addEventListener('click',function(){
       //Finding the image Source from the Every image 
       var imageOne=img1.src;
       var imageTwo=img2.src;
       img1.src=imageTwo;
       img2.src=imageOne;


})