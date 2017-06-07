// LIBRARY OF ASSETS - GLOBAL VARIABLES
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
var img_shotRegular;
var img_shotRed;
var img_shotGreen;
var img_shotBlue;
var img_diverA;
var img_diverB;
var img_airBubbleA;
var img_airBubbleB;
var img_enemyFishRedA;
var img_enemyFishRedB;
var img_enemyFishGreenA;
var img_enemyFishGreenB;
var img_enemyFishBlueA;
var img_enemyFishBlueB;
var img_enemySubRedA;
var img_enemySubRedB;
var img_enemySubRedC;
var img_enemySubRedD;
var img_enemySubGreenA;
var img_enemySubGreenB;
var img_enemySubGreenC;
var img_enemySubGreenD;
var img_enemySubBlueA;
var img_enemySubBlueB;
var img_enemySubBlueC;
var img_enemySubBlueD;

// LOCAL VARIABLES
var currentScreen;
//-
var telaMenu;
var telaInstructions;
var telaCredits;
var telaJogo;
//-
var menuMusic;

// P5 FUNCTION: PRELOAD
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
  img_shotRegular = loadImage('assets/img/shotRegular.png');
  img_shotRed = loadImage('assets/img/shotRed.png');
  img_shotGreen = loadImage('assets/img/shotGreen.png');
  img_shotBlue = loadImage('assets/img/shotBlue.png');
  img_diverA = loadImage('assets/img/diverA.png');
  img_diverB = loadImage('assets/img/diverB.png');
  img_airBubbleA = loadImage('assets/img/airBubbleA.png');
  img_airBubbleB = loadImage('assets/img/airBubbleB.png');
  img_enemyFishRedA = loadImage('assets/img/enemyFishRedA.png');
  img_enemyFishRedB = loadImage('assets/img/enemyFishRedB.png');
  img_enemyFishGreenA = loadImage('assets/img/enemyFishGreenA.png');
  img_enemyFishGreenB = loadImage('assets/img/enemyFishGreenB.png');
  img_enemyFishBlueA = loadImage('assets/img/enemyFishBlueA.png');
  img_enemyFishBlueB = loadImage('assets/img/enemyFishBlueB.png');
  img_enemySubRedA = loadImage('assets/img/enemySubRedA.png');
  img_enemySubRedB = loadImage('assets/img/enemySubRedB.png');
  img_enemySubRedC = loadImage('assets/img/enemySubRedC.png');
  img_enemySubRedD = loadImage('assets/img/enemySubRedD.png');
  img_enemySubGreenA = loadImage('assets/img/enemySubGreenA.png');
  img_enemySubGreenB = loadImage('assets/img/enemySubGreenB.png');
  img_enemySubGreenC = loadImage('assets/img/enemySubGreenC.png');
  img_enemySubGreenD = loadImage('assets/img/enemySubGreenD.png');
  img_enemySubBlueA = loadImage('assets/img/enemySubBlueA.png');
  img_enemySubBlueB = loadImage('assets/img/enemySubBlueB.png');
  img_enemySubBlueC = loadImage('assets/img/enemySubBlueC.png');
  img_enemySubBlueD = loadImage('assets/img/enemySubBlueD.png');
}

// P5 FUNCTION: SETUP
function setup()
{
  // GENERAL CONFIG SETUP
  createCanvas(800, 600);
  frameRate(60);

  // INICIALIZAÇÃO DAS LOCAL VARIABLES
  currentScreen = "telaJogo";

  telaMenu = new TelaMenu();
  telaInstructions = new TelaInstructions();
  telaCredits = new TelaCredits();
  telaJogo = new TelaJogo();

  menuMusic = msc_main;  
}

// P5 FUNCTION: DRAW
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


// HANDLING I/O
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
      if (!telaJogo.player.isOnSurface) telaJogo.playerShoot();
    }
  }
}

// CUSTOM FUNCTIONS
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}