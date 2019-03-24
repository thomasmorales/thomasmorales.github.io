function init(){
  let image =document.getElementById("container").getElementsByTagName("img");
  image[1].src="icons/flower1.png";
  image[3].src="icons/flower1.png";


  document.getElementById("container2").innerHTML = "you are great";


  let images = document.createElement("img");
  images.src="icons/flower1.png";
  document.getElementById("new_element").appendChild(images);


  let spans =document.getElementById("rainbow").getElementsByTagName("span"); // fill with proper code
let colors = ["red", "orange","yellow","green","blue","purple","pink"];
for (var i = spans.length - 1; i >= 0; i--) {

	spans[i].style.color = colors[i];
}

 var changeSrc = function(event) {
   let filename = event.target.src.replace("https://thomasmorales.github.io/icons/flower1.png", "flower1");
  //let fileName= event.target.src.replace("file:///D:/Desktop/pl_projet1_html/icons/flower1.png",'flower1');
    document.getElementById("test").innerHTML = event.target.src;
  if (event.target.src) {
    if (fileName=="flower1"){
      event.target.src = "flower2.png";
    }
    else {
      event.target.src = "icons/flower1.png";
    }
  }
};
document.getElementById("event").addEventListener("mouseover", changeSrc);

}
