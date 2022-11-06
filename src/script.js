var fgimg =null;
var bgimg= null;
var w = null ;
var h = null;
var can = document.getElementById("can");
var can2 = document.getElementById("can2");

function fgImg(){
  
  var b= document.getElementById("fgimg");
  fgimg = new SimpleImage(b); 
  fgimg.drawTo(can);
  alert('foreground image is loaded');
   w = fgimg.getWidth();
   h = fgimg.getHeight();
  
}

function bgImg(){
  
  var b= document.getElementById("bgimg");
  bgimg= new SimpleImage(b);
  bgimg.drawTo(can2);
  alert("background image is loaded");
}
function  composite(){
  if(fgimg==null|| ! fgimg.complete()){
    alert('fgimage not loaded');
    return;
  }
  if(bgimg==null|| ! bgimg.complete()){
    alert('bgimage not loaded');
    return;
  }
  for(var pixel of fgimg.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if(pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
         var bgpixel= bgimg.getPixel(x,y);
     fgimg.setPixel(x,y,bgpixel);
    }
    else{
      fgimg.setPixel(x,y,pixel);
    }
  }
  var context = can.getContext("2d");
  var context2 = can2.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  context2.clearRect(0,0,can2.width,can2.height);
  fgimg.drawTo(can);
}

function clear(){
  var context = can.getContext("2d");
  var context2 = can2.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  context2.clearRect(0,0,can2.width,can2.height);
}