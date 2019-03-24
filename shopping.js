
function additem(){
 let grocery=document.getElementById("grocery").checked;
 let important=document.getElementById("important").checked;

 let ul= document.getElementById("list1");
 let item= document.getElementById("items").value;
 var txt1=document.createTextNode(item);
 var li =document.createElement("li");

 if (important==true){
   li.style.color="#cc0000";
 }
 if (grocery==true){
  li.style.textDecoration="underline";
 }
  li.appendChild(txt1);
  document.getElementById("list1").appendChild(li);


}

function removeitem(){

var list = document.getElementById("list1");
var nb = document.getElementById("remove").value;
list.removeChild(list.childNodes[nb-1]);

}






//childnode
var input = document.getElementById("items");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
