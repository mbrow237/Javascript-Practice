var width = 600;
var shape = {width:300};

var showWidth = function(){
document.write(this.width);
};

var gloWidth = showWidth(); //the showWidth function is a global function when by itself
shape.getWidth = showWidth; //adds a property to the shape object called getWidth
shape.getWidth();//When this fuction is called, the "this" in the showWidth function is now looking at the local width(300).

