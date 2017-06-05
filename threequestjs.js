// library of assets - global variables
var msc_main;
var img_null;
var img_menuBg;
var img_instructionsBg;
var img_creditsBg;
var img_gameBackgroundA;
var img_gameWaterSurface;
var img_gameBottomBarOxygen;
var img_gameBottomBarRed;
var img_gameBottomBarGreen;
var img_gameBottomBarBlue;
var img_gameBottomBarGridNull;
var img_gameBottomBarGridRed;
var img_gameBottomBarGridGreen;
var img_gameBottomBarGridBlue;
var img_playerA;
var img_playerB;
var img_playerC;
var img_playerD;
var img_enemyFishRedA;
var img_enemyFishRedB;
var img_enemyFishGreenA;
var img_enemyFishGreenB;
var img_enemyFishBlueA;
var img_enemyFishBlueB;

// local variables
var currentScreen;
//-
var telaMenu;
var telaInstructions;
var telaCredits;
var telaJogo;
//-
var menuMusic;

// preload p5
function preload()
{
  msc_main = loadSound('assets/msc/main.mp3');
  img_null = loadImage('assets/img/null.png');
  img_menuBg = loadImage('assets/img/menuBg.png');
  img_instructionsBg = loadImage('assets/img/instructionsBg.png');
  img_creditsBg = loadImage('assets/img/creditsBg.png');
  img_gameBackgroundA = loadImage('assets/img/gameBackgroundA.png');
  img_gameWaterSurface = loadImage('assets/img/gameWaterSurface.png');
  img_gameBottomBarOxygen = loadImage('assets/img/gameBottomBarOxygen.png');
  img_gameBottomBarRed = loadImage('assets/img/gameBottomBarRed.png');
  img_gameBottomBarGreen = loadImage('assets/img/gameBottomBarGreen.png');
  img_gameBottomBarBlue = loadImage('assets/img/gameBottomBarBlue.png');
  img_gameBottomBarGridNull = loadImage('assets/img/gameBottomBarGridNull.png');
  img_gameBottomBarGridRed = loadImage('assets/img/gameBottomBarGridRed.png');
  img_gameBottomBarGridGreen = loadImage('assets/img/gameBottomBarGridGreen.png');
  img_gameBottomBarGridBlue = loadImage('assets/img/gameBottomBarGridBlue.png');
  img_playerA = loadImage('assets/img/playerA.png');
  img_playerB = loadImage('assets/img/playerB.png');
  img_playerC = loadImage('assets/img/playerC.png');
  img_playerD = loadImage('assets/img/playerD.png');
  img_enemyFishRedA = loadImage('assets/img/enemyFishRedA.png');
  img_enemyFishRedB = loadImage('assets/img/enemyFishRedB.png');
  img_enemyFishGreenA = loadImage('assets/img/enemyFishGreenA.png');
  img_enemyFishGreenB = loadImage('assets/img/enemyFishGreenB.png');
  img_enemyFishBlueA = loadImage('assets/img/enemyFishBlueA.png');
  img_enemyFishBlueB = loadImage('assets/img/enemyFishBlueB.png');
}

// setup p5
function setup()
{
  // general setup  
  createCanvas(800, 600);
  frameRate(60);

  // local variables setup
  currentScreen = "telaCredits";

  telaMenu = new TelaMenu();
  telaInstructions = new TelaInstructions();
  telaCredits = new TelaCredits();
  telaJogo = new TelaJogo();

  menuMusic = msc_main;  
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
  	telaInstructions.show();
  }
  else if (currentScreen == "telaCredits")
  {
  	if (!menuMusic.isPlaying()) menuMusic.play();

    if (!(telaCredits.counter % 180 == 0) || telaCredits.frozen)
    {
      telaCredits.update();
  	  telaCredits.show();
    }
    else
    {
      currentScreen = "telaMenu";
      telaCredits.counter = 0;
      telaCredits.frozen = true;      
    }
  }
  else if (currentScreen == "telaJogo")
  {
  	telaJogo.update();
    telaJogo.show();
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
    			menuMusic.stop();
          currentScreen = "telaJogo";
    			break;
    		case 1: // instructions    			
    			currentScreen = "telaInstructions";
    			break;
    		case 2: // credits    			
    			currentScreen = "telaCredits";    			
    			break;
    	}
    }
  }
  else if (currentScreen === "telaInstructions")
  {
  	if (keyCode === ENTER)
  	{
  		currentScreen = "telaMenu";  		
  	}
  }
  else if (currentScreen == "telaCredits")
  {
    if (keyCode === ENTER)
    {
      telaCredits.counter = 0;
      telaCredits.frozen = true;
      currentScreen = "telaMenu";      
    }
  }
  else if (currentScreen == "telaJogo")
  {
    if (keyCode === 32)
    {
      telaJogo.player.shoot();
    }
  }
}