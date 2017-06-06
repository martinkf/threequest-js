function TelaJogo()
{
	// interface para facilitar
	//
	// Sprite this.background
	// Sprite this.waterSurface
	// BottomBar this.bottomBar
	// Player this.player
	// ElementArray this.shotArray
	// ElementArray this.diverArray


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

	this.shotArray = new ElementArray();

	this.diverArray = new ElementArray();

	this.temp = true;
	// fim da inicialização


	// UPDATE FUNCTION
	this.update = function()
	{		
		this.updateVerificacoes();
		this.updateAtualizaMembros();
	}

	this.updateVerificacoes = function()
	{
		if (this.temp) 
		{
			this.diverArray.spawnNewDiver();
			this.temp = false;
		}
	}	

	this.updateAtualizaMembros = function()
	{
		this.background.update();

		this.waterSurface.update();

		this.bottomBar.update();

		this.player.update();

		this.shotArray.update();

		this.diverArray.update();
	}

	// SHOW FUNCTION
	this.show = function()
	{		
		this.background.desenhaAnchorCorner(0, 0);		
		
		this.player.show();

		this.shotArray.show();

		this.diverArray.show();

		this.bottomBar.show();

		this.waterSurface.desenhaAnchorCorner(0, 117);
	}


	// CUSTOM FUNCTIONS
	this.playerShoot = function()
	{
		var xToDraw; // int
		switch (this.player.shotType)
		{
			case 0: // regular
				xToDraw = 42;
				break;
			case 1: // red
				xToDraw = 52;
				break;
			case 2: // green
				xToDraw = 54;
				break;
			case 3: // blue
				xToDraw = 46;
				break;
		}
		switch (this.player.facingDirection)
		{
			case 0: // LEFT
				xToDraw = this.player.x - xToDraw;
				break;
			case 1: // RIGHT
				xToDraw = this.player.x + xToDraw;
				break;
		}
		this.shotArray.pushElement(new Shot(this.player.shotType, xToDraw, this.player.y, this.player.facingDirection));
	}
}