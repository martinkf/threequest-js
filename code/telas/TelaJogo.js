function TelaJogo()
{
	// interface para facilitar
	//
	// Sprite this.background
	// Sprite this.waterSurface
	// BottomBar this.bottomBar
	// Player this.player


	// continua a inicialização
	this.background = 
	new Sprite(
		img_gameBackgroundA, 
		img_gameBackgroundA, 
		img_gameBackgroundA, 
		img_gameBackgroundA, 
		30
	);

	this.waterSurface = 
	new Sprite(
		img_gameWaterSurface,
		img_gameWaterSurface,
		img_gameWaterSurface,
		img_gameWaterSurface,
		60
	);

	this.bottomBar = new BottomBar();

	this.player = 
	new Player(
		img_playerA, 
		img_playerB,
		img_playerC,
		img_playerD
	);


	// UPDATE FUNCTION
	this.update = function()
	{		
		this.background.update();

		this.waterSurface.update();

		this.bottomBar.update();

		this.player.update();
	}

	// SHOW FUNCTION
	this.show = function()
	{		
		this.background.desenhaAnchorCorner(0, 0);		
		
		this.player.show();

		this.bottomBar.show();

		this.waterSurface.desenhaAnchorCorner(0, 117);
	}
}