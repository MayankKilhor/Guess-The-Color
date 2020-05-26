
var numberofSquares=6;
var colors= generateRandomColors(numberofSquares);
var squares = document.querySelectorAll(".square");
var pickedColor=colors[pickColor(colors.length)];
var colorDisplay=document.getElementById("ColorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberofSquares=3;
    colors= generateRandomColors(numberofSquares);
    pickedColor=colors[pickColor(colors.length)];
    colorDisplay.textContent = pickedColor;
    h1.style.background= "steelblue";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberofSquares=6;
    colors= generateRandomColors(numberofSquares);
    pickedColor=colors[pickColor(colors.length)];
    colorDisplay.textContent = pickedColor;
    h1.style.background= "steelblue";
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        squares[i].style.display="block";
    }
});

resetButton.addEventListener("click",function(){
    //change textcontent again to New Colors
    resetButton.textContent="New Colors";
    //generate all colours
    colors= generateRandomColors(numberofSquares);
    //pick a new random colors from array
    pickedColor=colors[pickColor(colors.length)];
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i =0;i < squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    //change background back to black
    h1.style.background= "steelblue";
});




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
