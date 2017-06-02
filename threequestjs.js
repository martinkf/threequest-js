var currentScreen;

var menuMusic;
var menuSoundFX;

var telaMenu;
var telaInstructions;
var telaCredits;

// preload p5
function preload()
{
  menuMusic = loadSound('assets/msc/main.mp3');
  menuSoundFX = loadSound('assets/snd/gotStuff.mp3');

  telaMenu = new TelaMenu();
  telaInstructions = new TelaInstructions();
  telaCredits = new TelaCredits();

  telaMenu.selectionFishImg = loadImage('assets/img/selectionFish.png');
  telaMenu.bgImage = loadImage('assets/img/menuBg.png');

  telaInstructions.bgImage = loadImage('assets/img/instructionsBg.png');

  telaCredits.bgImage = loadImage('assets/img/creditsBg.png');
}

// setup p5
function setup()
{
  // general setup  
  createCanvas(800, 600);
  frameRate(60);

  currentScreen = "telaCredits";
  //telaMenu = new TelaMenu();
  
}

// draw p5
function draw()
{ 
  if (currentScreen == "telaMenu")
  {
  	if (!menuMusic.isPlaying()) menuMusic.play();
  	telaMenu.update();
  	telaMenu.show();	
  }
  else if (currentScreen == "telaInstructions")
  {
  	if (!menuMusic.isPlaying()) menuMusic.play();  	
  	telaInstructions.show();
  }
  else if (currentScreen == "telaCredits")
  {
  	if (!menuMusic.isPlaying()) menuMusic.play();
  	telaCredits.show();
  }
  else if (currentScreen == "telaJogo")
  {
  	// to do
  	// 
  	//
  	//
  }
}

// i/o
function keyPressed() 
{
  if (currentScreen == "telaMenu")
  {
  	if (keyCode === UP_ARROW) 
  	{  	  
   	  telaMenu.pressedUp();
 	} 
    if (keyCode === DOWN_ARROW) 
    {
      telaMenu.pressedDown();
    }
    if (keyCode === ENTER)
    {
    	switch (telaMenu.currentChoice)
    	{
    		case 0: // new game
    			console.log(0);
    			break;
    		case 1: // instructions
    			menuSoundFX.play();
    			currentScreen = "telaInstructions";
    			break;
    		case 2: // credits
    			menuSoundFX.play();
    			currentScreen = "telaCredits";    			
    			break;
    	}
    }
  }
  else if (currentScreen == "telaCredits" || currentScreen === "telaInstructions")
  {
  	if (keyCode === ENTER)
  	{
  		menuSoundFX.play();
  		telaMenu.currentChoice = 0;
  		currentScreen = "telaMenu";  		
  	}
  }  
}