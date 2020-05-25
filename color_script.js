var colors= generateRandomColors(6);
var squares = document.querySelectorAll(".square");

var pickedColor=colors[pickColor(colors.length)];
var colorDisplay=document.getElementById("ColorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

resetButton.addEventListener("click",function(){
    //change textcontent again to New Colors
    resetButton.textContent="New Colors";
    //generate all colours
    colors= generateRandomColors(6);
    //pick a new random colors from array
    pickedColor=colors[pickColor(colors.length)];
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i =0;i < squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    //change background back to black
    h1.style.background= "#232323";
});

colorDisplay.textContent = pickedColor;


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
            h1.style.background= clickedColor;
            resetButton.textContent="Play Again?";
        }else{
           this.style.backgroundColor= "#232323";
           messageDisplay.textContent="try again";
        }

    });
}


function changeColors(color){
    //loop through all squares
    for(var i = 0;i < squares.length;i++){
        squares[i].style.background=color;
    }
    //change each color to match given color

}

function pickColor(num){
   return Math.floor(Math.random() * num);

}

function generateRandomColors(num){
    //make an array
    var arr=[];
    //generate random colors in array
    for(var i=0;i < num;i++){
        //get random color and push into array
        arr.push(RandomColors());
    }
    //return array
    return arr;
}

function RandomColors(){
    //pick a red from 0 - 255
    var r=pickColor(256);
    //pick a green from 0 - 255
    var g=pickColor(256);
    //pick a blue from 0 - 255
    var b=pickColor(256);
    return "rgb(" + r +", " + g +", " + b + ")" ;
}
