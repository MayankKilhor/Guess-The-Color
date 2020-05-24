var colors= [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");

var pickedColor=colors[pickColor()];
var colorDisplay=document.getElementById("ColorDisplay");
var messageDisplay=document.getElementById("message");
colorDisplay.textContent = pickedColor;

function changeColors(color){
    //loop through all squares
    for(var i = 0;i < squares.length;i++){
        squares[i].style.background=color;
    }
    //change each color to match given color

}

function pickColor(){
   return Math.floor(Math.random() * colors.length);

}

for(var i=0;i < squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
        }else{
           this.style.backgroundColor= "#232323";
           messageDisplay.textContent="try again";
        }

    });
}

