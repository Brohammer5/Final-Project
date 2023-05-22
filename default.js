/*  /$$$$$$$                      /$$                                                                 /$$$$$$$ 
| $$__  $$                    | $$                                                                | $$____/ 
| $$  \ $$  /$$$$$$   /$$$$$$ | $$$$$$$   /$$$$$$  /$$$$$$/$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$ | $$      
| $$$$$$$  /$$__  $$ /$$__  $$| $$__  $$ |____  $$| $$_  $$_  $$| $$_  $$_  $$ /$$__  $$ /$$__  $$| $$$$$$$ 
| $$__  $$| $$  \__/| $$  \ $$| $$  \ $$  /$$$$$$$| $$ \ $$ \ $$| $$ \ $$ \ $$| $$$$$$$$| $$  \__/|_____  $$
| $$  \ $$| $$      | $$  | $$| $$  | $$ /$$__  $$| $$ | $$ | $$| $$ | $$ | $$| $$_____/| $$       /$$  \ $$
| $$$$$$$/| $$      |  $$$$$$/| $$  | $$|  $$$$$$$| $$ | $$ | $$| $$ | $$ | $$|  $$$$$$$| $$      |  $$$$$$/
|_______/ |__/       \______/ |__/  |__/ \_______/|__/ |__/ |__/|__/ |__/ |__/ \_______/|__/       \______/ 
                                                                                                            
                                                                                                            */
// Squares Variables                                                                                                           
var redSquare; // declares redSquare
var blueSquare; // declares blueSquare
var yellowSquare; // declares yellowSquare
var greenSquare; // declares greenSquare
// Score Variables
var score =0; // declares score
// Size Variables
var SIZE_W = 150; // declares the SIZE_W
var SIZE_H = 150; // declares the SIZE_H
// Lost Variable
var lost = false;
// Memory Variables
var memory = []; // Memory - This is the global memory of the game
var roundMemory = []; // roundMemory - This is the round memory of the game
// Misc Variables
var scoreText; // Score Text
var Bonzi = new WebImage("https://codehs.com/uploads/fac016cf154dbaed697083549e64028a"); // Funny Bonzi Image🙈🙈🙈
function start(){
    
  setup(); // Calls setup function
  
    mouseClickMethod(core); // When clicked the mouse calls the core function
    showColor(); // Shows the colors of the round
}
// Setups the variables and other items
function setup(){
    Bonzi.setPosition(300,300); // Sets Bonzi Position to X: 300, Y:300
    Bonzi.setSize(150,200); // Sets Bonzi Size to Width: 150, Height:200
    add(Bonzi); // Adds Bonzi
    setBackgroundColor("#333333"); // Sets Background Color to Gray(#333333)
    greenSquare = new Rectangle(SIZE_W,SIZE_H); // Declares greenSquare to a new Rectangle of Width:150, Height:150
    greenSquare.setPosition(40,10); // Sets greenSquare to X:40, Y:10
    greenSquare.setColor("#317831"); // Sets greenSquare to a dark green(#317831)
    add(greenSquare); // Adds greenSquare
    yellowSquare = new Rectangle(SIZE_W,SIZE_H); // Declares yellowSquare to a new Rectangle of Width:150, Height:150
    yellowSquare.setPosition(210,10); // Sets yellowSquare to X:210, Y:10
    yellowSquare.setColor("#a69f1a"); // Sets yellowSquare to a dark yellow(#a69f1a)
    add(yellowSquare); // Adds yellowSquare
    blueSquare = new Rectangle(SIZE_W,SIZE_H); // Declares blueSquare to a new Rectangle of Width:150, Height:150
    blueSquare.setPosition(40,180); // Sets blueSquare to X:40, Y:180
    blueSquare.setColor("#3c3cc8"); // Sets blueSquare to a dark blue(#3c3cc8)
    add(blueSquare); // Adds blueSquare
       redSquare = new Rectangle(SIZE_W,SIZE_H); // Declares redSquare to a new Rectangle of Width: 150, Height:150
    redSquare.setPosition(210,180); // Sets redSquare to X:210, Y:180
    redSquare.setColor("#c33737"); // Sets redSquare to a dark red(#c33737)
    add(redSquare); // Adds redSquare

    var audio = new Audio("https://codehs.com/uploads/6bd2dc82f3baa9c96945989b6afa1c6b"); // Start of Bonzi Helper audio
    audio.play(); // Plays Bonzi Helper Audio
showScore(); // Shows Score Text

 generateFirstColor(); // Generates first color

} 
// Generates the first color
function generateFirstColor(){
    var RandomColor = Randomizer.nextInt(0,3); // RandomColor = 0-3
    if(RandomColor == 0){ // If RandomColor is 0
        memory.push(blueSquare); // memory pushes blueSquare into its memory
    }
    if(RandomColor == 1){ // If RandomColor is 1
        memory.push(redSquare); // memory pushes redSquare into its memory
    }
    if(RandomColor == 2){ // If RandomColor is 2
        memory.push(yellowSquare); // memory pushes yellowSquare into its memory
    }
    if(RandomColor == 3){ // If RandomColor is 3
        memory.push(greenSquare); // memory pushes greenSquare into its memory
    }
}
// Shows the round colors
function showColor(){
    // For the length of memory it iterates
    for(var i=0;i<memory.length;i++){
        var t = memory[i]; // t is getting the array of i. Example: memory[0]
        if(t == blueSquare){ // If it is a blueSquare
        alert("Blue"); // Tells the user if it is blue
            roundMemory.push(t); // Pushes the blueSquare into roundMemory
        }
        if(t == redSquare){ // If it is a redSquare
            alert("Red"); // Tells the user if it is red
            roundMemory.push(t); // Pushes the redSquare into roundMemory
        }
        if(t == yellowSquare){ // If it is a yellowSquare
            alert("Yellow"); // Tells the user if it is yellow
            roundMemory.push(t); // Pushes the yellowSquare into roundMemory
        }
        if(t == greenSquare){ // If it is a greenSquare
            alert("Green"); // Tells the user if it is green
            roundMemory.push(t); // Pushes the greenSquare into roundMemory
        }
        
        
        
    }
}
// Shows the score Text
function showScore(){
    scoreText = new Text("Score: "+score); // Makes a new text with "Score:0"
    scoreText.setColor(Color.white); // Sets score text to Color.white(White)
    scoreText.setPosition(0,getHeight()); // Sets score text to X:0, Y:getHeight()
    add(scoreText); // Adds Score Text
}
// Lose Function
function lose(){
    var text = new Text("You lost!","40pt Wasted"); // New Text saying you lost in 40pt Wasted Font
   

    text.setColor(Color.white); // Sets its color to Color.white(White)
    text.setPosition(100,getHeight()/2); // Sets Position to X:180, Y:getHeight()/2
    add(text); // adds Text
   remove(Bonzi); // removes the Bonzi
    var  audio = new Audio("https://codehs.com/uploads/a6b623bfb0fa808e3ce58ce4bd943c1a"); // Adds a crying audio
	var mortcry = new WebImage("https://www.meme-arsenal.com/memes/541bc2cb9e66e18714c623dd68bee3ba.jpg"); // Creates a new webImage of mort crying
	    mortcry.setPosition(getWidth()/2, 300); // Sets mortcry to position of X: getWidth()/2, Y:300
	    mortcry.layer = 5; // Sets mortcry layer to the front(5)
	    mortcry.setSize(200,200); // Sets mortcry size to Width:200, Height:200
	    add(mortcry); // Adds mort cry
	    audio.play(); // Plays the audio
    lost = true; // Lost variable set to true
}
// Click Handler Core Function
function core(e){
    var x = e.getX(); // x = Mouse X
    var y = e.getY(); // y = Mouse Y
    var elem = getElementAt(x,y); // Gets element at x, and y
    if(elem != null){ // If element isn't null then continue
 
          var Color = roundMemory[0]; // Declares Color to roundMemory[0] or the first of roundMemory
       
        if(elem == Color && roundMemory.length > 0 && lost == false){ // If you hit the right color and the roundMemory has more, it continues
         
        
             roundMemory.remove(0); // Removes the first element of roundMemory
             
            
        }
        if(elem != Color && roundMemory.length > 0 && elem != scoreText && lost == false && elem != Bonzi){ // If you pick the wrong color and the round isn't over you lose
           lose(); // Calls the lose function
           
        }
        if(roundMemory.length  == 0 && lost == false && elem != Bonzi){ // Starts a new round
            
            score++; // Adds score
            scoreText.setText("Score:"+score); // Updates scoreText
            var RandomSquare = Randomizer.nextInt(0,3); // Picks a RandomSquare from 0-3
            RandomSquare = Randomizer.nextInt(0,3);
            if(RandomSquare == 0){ // If RandomSquare = 0
                memory.push(greenSquare); // Pushes greenSquare to memory
            }
            if(RandomSquare == 1){ // If RandomSquare == 1
                memory.push(yellowSquare); // Pushes yellowSquare to memory
            }
            if(RandomSquare == 2){ // If RandomSquare == 2
                
                memory.push(blueSquare); // Pushes blueSquare to memory
            }
            if(RandomSquare == 3){ // If RandomSquare == 3
                memory.push(redSquare); // Pushes redSquare to memory
            }
            showColor(); // Shows the new Round Colors
            
        }
        if(elem == Bonzi){ // Clicks on Bonzi Helper

            alert("Hello I am Bonzi Helper!"); // Alerts the user
            alert("Here is a list of questions I can answer:"); // Alerts the user
            alert("1. How do I play this game?\n 2. Who made this game\n 3. How did you make this game?"); // Alers the user about the questions
            var Question = readLine("Whats your question:"); // Input for the questions
            if(Question == "How do I play this game?"){ // Wants to know how do I play this game?
                alert("You play this game by clicking on the squares in the correct order. The order is shown to you at the start of every new round."); // Tells you how to play the game
                var question1 = new Audio('https://codehs.com/uploads/31511cb4a3cfd3c7ff09db6e5869cf56'); // Declares a audio verision
                question1.play();
            }
             if(Question == "Who made this game"){ // Wants to know who made this game
                alert("Jackson made this game!"); // Tells the user I made this game
                var question1 = new Audio('https://codehs.com/uploads/9dc6fa025c578b37da3b9a18d710b781'); // Declares a audio verision
                question1.play(); // Plays the question audio
            }
             if(Question == "How did you make this game?"){ // Wants to know how I made this game
                alert("I made this game with javascript!"); // Tells them I made this game with javascript
                var question1 = new Audio('https://codehs.com/uploads/1459c3304b272d74208b3a95afa374f6'); // Declares a audio verision
                question1.play();  // Plays the question audio
            }
            
        }
    }
    
}
