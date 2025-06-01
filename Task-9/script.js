var data = [
  {
    name: "Harmit",
    src: "https://plus.unsplash.com/premium_photo-1687187499405-54e63830337f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Sona",
    src: "https://images.unsplash.com/photo-1650139504331-9bc867a86b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },{
    name:"Lonam",src:"https://plus.unsplash.com/premium_photo-1673757117967-57740d8d8988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8"
  },
  {
    name:"Sohal",
    src:"https://plus.unsplash.com/premium_photo-1682002190704-14ee013c6e51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
   ,{
    name:"Morish",
    src:"https://images.unsplash.com/photo-1623175258280-97c63efd370a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwYm95fGVufDB8fDB8fHww"
  }
  
];

// we are using for Each Loop for rendaring the elemnt which is writen in Array
var persion="";//we are are creating this Varible beacuse this varibel will store the value of the
data.forEach(function(ele){
      persion+=`<div class="people">
          <div class="persion">
            <div class="img">
              <img src=${ele.src} alt="">
            </div>
            <h4>${ele.name}</h4>
          </div>`  
});
// Foreach method is Method that help use to Rendering the Element that In the Display


document.querySelector(".people").innerHTML=persion;

// Selecting the Input Using  QueerySeelector
let Input=document.querySelector("input");
Input.addEventListener("input",function(eve){

          //we are Using filter method because the Filter method is a method that help Us
          // match the Elemt and Filter it!
          var matching=data.filter(function(e){
            return e.name.startsWith(Input.value)
          }); //this Filter Method is help use OBJECT ELEMENT which is laying the Screen 
          var newuser="";
          matching.forEach(function(ele){
              newuser+=`<div class="people">
          <div class="persion">
            <div class="img">
              <img src=${ele.src} alt="">
            </div>
            <h4>${ele.name}</h4>
          </div>`
          });
          document.querySelector(".people").innerHTML=newuser;
})