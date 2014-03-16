IMG_PATH = "images/";
COLOR_FOOTER = "_color.png"
GRAY_FOOTER = "_gray.png";
function mouseOverAction(c){
  var parent = c.parentElement;
  var newImageName = parent.id+COLOR_FOOTER;
  c.src = IMG_PATH+newImageName;
}

function mouseOutAction(c){
  var parent = c.parentElement;
  var newImageName = parent.id+GRAY_FOOTER;
  c.src = IMG_PATH+newImageName;
}

function onWindowLoad() {
  var links = document.getElementById("side_bar").querySelectorAll("a");
  for(var i=0;i<links.length;i++){
    var link = links[i];
    var imageName = link.id+GRAY_FOOTER;
    var img = document.createElement("img");
    img.setAttribute("src", IMG_PATH+imageName);
    img.setAttribute("alt", link.textContent);
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");
    img.setAttribute("onmouseover", "mouseOverAction(this)");
    img.setAttribute("onmouseout", "mouseOutAction(this)");
    link.textContent="";
    link.appendChild(img);
  }
}

function drawRect(){
  
}