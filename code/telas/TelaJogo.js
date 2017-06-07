function TelaJogo()
{
	// interface para facilitar
	//
	// int this.frameCounter
	// Sprite this.background
	// Sprite this.waterSurface
	// BottomBar this.bottomBar
	// Player this.player
	// ElementArray this.playerShotArray
	// ElementArray this.diverArray
	// ElementArray this.bubbleArray
	// ElementArray this.enemyArray
	// ElementArray this.enemyShotArray


	// continua a inicialização
	this.frameCounter = 0;

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

	this.playerShotArray = new ElementArray();

	this.diverArray = new ElementArray();

	this.bubbleArray = new ElementArray();

	this.enemyArray = new ElementArray();

	this.enemyShotArray = new ElementArray();
	// fim da inicialização


	// UPDATE FUNCTION
	this.update = function()
	{
		this.updateFrameCounter();
		this.updateVerificacoes();
		this.updateAtualizaMembros();
	}

	this.updateFrameCounter = function()
	{
		if (this.frameCounter % 720 == 0)
		{
			this.frameCounter = 1;
		}
		else
		{
			this.frameCounter++;
		}
	}

	this.updateVerificacoes = function()
	{
		// VERIFICA SE ALGUM INIMIGO ATIROU
		for (var i = this.enemyArray.internalArray.length - 1; i >= 0; i--) 
		{
			if (this.enemyArray.internalArray[i].wantsToShoot)
			{
				this.enemyShoot(
					this.enemyArray.internalArray[i].color + 1,
					this.enemyArray.internalArray[i].x,
					this.enemyArray.internalArray[i].y,
					this.enemyArray.internalArray[i].facingDirection
				);
				this.enemyArray.internalArray[i].wantsToShoot = false;
			}
		}

		// LIGA OU DESLIGA OS SPAWNERS
		if (this.player.isOnSurface)
		{
			this.diverArray.spawnerIsTurnedOn = false;
			this.bubbleArray.spawnerIsTurnedOn = false;
			this.enemyArray.spawnerIsTurnedOn = false;
		}
		else
		{
			this.diverArray.spawnerIsTurnedOn = true;
			this.bubbleArray.spawnerIsTurnedOn = true;
			this.enemyArray.spawnerIsTurnedOn = true;
		}

		// SPAWNER: DIVER
		if (this.frameCounter % 1 == 0) // 180 - uma vez a cada 3 segundos
		{
			if (getRandomInt(1, 1) == 1) // 1, 4 - uma chance em quatro
			{
				this.diverArray.spawnNewDiver();
			}
		}

		// SPAWNER: AIR BUBBLE
		if (this.frameCounter % 1 == 0) // 240 - uma vez a cada 4 segundos
		{
			if (getRandomInt(1, 1) == 1) // 1, 6 - uma chance em seis
			{
				this.bubbleArray.spawnNewBubble();
			}
		}

		// SPAWNER: ENEMY
		if (this.frameCounter % 1 == 0) // 60 - uma vez a cada 1 segundo
		{
			if (getRandomInt(1, 1) == 1) // 1, 2 - uma chance em dois
			{
				this.enemyArray.spawnNewEnemy();
			}
		}
	}	

	this.updateAtualizaMembros = function()
	{
		this.background.update();

		this.waterSurface.update();

		this.bottomBar.update();

		this.player.update();

		this.playerShotArray.update();

		this.diverArray.update();

		this.bubbleArray.update();

		this.enemyArray.update();

		this.enemyShotArray.update();
	}

	// SHOW FUNCTION
	this.show = function()
	{		
		this.background.desenhaAnchorCorner(0, 0);		
		
		this.enemyArray.show();

		this.player.show();

		this.playerShotArray.show();

		this.enemyShotArray.show();

		this.diverArray.show();

		this.bubbleArray.show();		

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
		this.playerShotArray.pushElement(new Shot(this.player.shotType, xToDraw, this.player.y, this.player.facingDirection));
	}

	this.enemyShoot = function(enemyColor_, enemyX_, enemyY_, enemyFacingDirection_)
	{
		var xToDraw; // int
		switch (enemyColor_)
		{			
			case 1: // red
				xToDraw = 32;
				break;
			case 2: // green
				xToDraw = 36;
				break;
		}
		switch (enemyFacingDirection_)
		{
			case 0: // LEFT
				xToDraw = enemyX_ - xToDraw;
				break;
			case 1: // RIGHT
				xToDraw = enemyX_ + xToDraw;
				break;
		}
		this.enemyShotArray.pushElement(new Shot(enemyColor_, xToDraw, enemyY_, enemyFacingDirection_));
	}
}