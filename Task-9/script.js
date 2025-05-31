var data = [
  {
    name: "harsh",
    src: "https://plus.unsplash.com/premium_photo-1687187499405-54e63830337f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Sona",
    src: "https://images.unsplash.com/photo-1650139504331-9bc867a86b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },{
    name:"Lonam",src:"https://plus.unsplash.com/premium_photo-1673757117967-57740d8d8988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8"
  },
  {
    name:"ym unil",
    src:"https://images.unsplash.com/photo-1608391957733-08caeb461b57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8"
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
document.querySelector(".people").innerHTML=persion;
