// !Create An unordered List.Allow User To add and Remove list Item Dynamically Using Button

let InputItem = document.querySelector("input");
let ul = document.querySelector(".UnOrderList");
let add = document.querySelector(".Bt1Add");
let Remove = document.querySelector(".Rem");

var li;

//Am Creaiting the li element Globally

add.addEventListener("click", function () {
  if (InputItem.value.trim() === "") {
    alert("Bro Write SomeKindOf");
  } else {
    //If we create Li in Else block then It will give You an Undefine/Error that
                         //There is Consept call Scoping That is help.for this it will give the Erroor when We write Somthing  
    //because the Error will the Var  varible will not accesible outside the
    //Function ... So we Are Creaitting the varibel Globally because it is Easy TO accesible
    li = document.createElement("li");
    li.textContent = InputItem.value;
    //*In li Element we are add the text Content which is Add by User
    ul.appendChild(li);
    //Append Child method is Help you to add Eliment in Existing Eliment
    InputItem.value = " ";
  }
});


//we are add task and if we Need To delete then 
Remove.addEventListener("click",function(){
              //we Need To Delete thee added task from the Screen !!
              ul.removeChild(li);

});