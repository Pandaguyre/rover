canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
array_rover = ["1.jpg","2.jpg","3.jpg","4.jpg"]
roverwidth=100;
roverheight=95;
x = 100;
y = 250;
random_number=Math.floor(Math.random()*4);
backgroundImage=array_rover[random_number];
roverImage="rover.png";

function add() {
newBackgroundImages=new Image();
newBackgroundImages.onload=uploadbackground;
newBackgroundImages.src=backgroundImage;

newRoverImage=new Image();
newRoverImage.onload=uploadrover;
newRoverImage.src=roverImage;


}
function uploadbackground() {
    ctx.drawImage(newBackgroundImages,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(newRoverImage,x,y,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keyDown); 
function my_keyDown(e) {
keypress=e.keyCode;
console.log(keypress);
if(keypress=='37') {
    left();
    console.log("left");

}
if(keypress=='38') {
    up();
    console.log("up");

}
if(keypress=='39') {
    right();
    console.log("right");

}
if(keypress=='40') {
    down();
    console.log("down");

}


}
function up() {
if(y>=0) {
    y=y-10;
    console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
    uploadbackground();
    uploadrover();
}
}
function down() {
    if(y<=500) {
        y=y+10;
        console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
        uploadbackground();
        uploadrover();
        
        
    }
    }
    function left() {
        if(x>=0) {
            x=x-10;
            console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
            uploadbackground();
            uploadrover();
            
            
        }
        }
        function right() {
            if(x<=700) {
                x=x+10;
                console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
                uploadbackground();
                uploadrover();
                
                
            }
            }
