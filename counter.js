var counter = 0;
function changeText(){
    var element = document.getElementById("count");
    element.innerHTML = counter;
}
function add(){
 counter +=1
}
function subtract(){
    counter -=1
   }
   function reset(){
    counter = 0
   }