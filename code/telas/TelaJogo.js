function TelaJogo()
{
	// interface para facilitar
	//
	// int this.frameCounter
	// Sprite this.background
	// Sprite this.waterSurface
	// Score this.score
	// Player this.player
	// ElementArray this.playerShotArray
	// ElementArray this.diverArray
	// ElementArray this.bubbleArray
	// ElementArray this.enemyArray
	// ElementArray this.enemyShotArray
	// ElementArray this.explosionArray


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

	this.score = new Score();

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

	this.explosionArray = new ElementArray();
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

		// VERIFICA SE DEVE COMER OXIGÊNIO
		if (!this.player.isOnSurface)
		{
			this.score.oxygenLeft--;
		}

		// SPAWNER: DIVER
		if (this.frameCounter % 180 == 0) // 180 - uma vez a cada 3 segundos
		{
			if (getRandomInt(1, 4) == 1) // 1, 4 - uma chance em quatro
			{
				this.diverArray.spawnNewDiver();
			}
		}

		// SPAWNER: AIR BUBBLE
		if (this.frameCounter % 240 == 0) // 240 - uma vez a cada 4 segundos
		{
			if (getRandomInt(1, 6) == 1) // 1, 6 - uma chance em seis
			{
				this.bubbleArray.spawnNewBubble();
			}
		}

		// SPAWNER: ENEMY
		if (this.frameCounter % 60 == 0) // 60 - uma vez a cada 1 segundo
		{
			if (getRandomInt(1, 2) == 1) // 1, 2 - uma chance em dois
			{
				this.enemyArray.spawnNewEnemy();				
			}
		}

		// COLISÃO: PLAYER X AIR BUBBLE
		for (var i = this.bubbleArray.internalArray.length - 1; i >= 0; i--) 
		{
			if (testarColisaoRectRect(this.player, this.bubbleArray.internalArray[i]))
			{
				// DESTRÓI A AIR BUBBLE
				this.bubbleArray.removeElementAtIndex(i);
			}			
		}

		// COLISÃO: PLAYER X DIVER
		for (var i = this.diverArray.internalArray.length - 1; i >= 0; i--) 
		{
			if (testarColisaoRectRect(this.player, this.diverArray.internalArray[i]))
			{
				// ADICIONA AO SCORE
				this.score.qttyDiver++;

				// DESTRÓI O DIVER
				this.diverArray.removeElementAtIndex(i);
			}
		}

		// COLISÃO: PLAYER X ENEMY
		for (var i = this.enemyArray.internalArray.length - 1; i >= 0; i--) 
		{
			if (testarColisaoRectRect(this.player, this.enemyArray.internalArray[i]))
			{
				// CRIA UMA EXPLOSÃO PARA O ENEMY
				this.explosionArray.pushElement(new Explosion(
					this.enemyArray.internalArray[i].x, 
					this.enemyArray.internalArray[i].y
				));

				// DESTRÓI O ENEMY
				this.enemyArray.removeElementAtIndex(i);
			}
		}

		// COLISÃO: PLAYER X ENEMY SHOT
		for (var i = this.enemyShotArray.internalArray.length - 1; i >= 0; i--) 
		{
			if (testarColisaoRectRect(this.player, this.enemyShotArray.internalArray[i]))
			{
				// CRIA UMA EXPLOSÃO PARA O ENEMY SHOT
				this.explosionArray.pushElement(new Explosion(
					this.enemyShotArray.internalArray[i].x, 
					this.enemyShotArray.internalArray[i].y
				));

				// DESTRÓI O ENEMY SHOT
				this.enemyShotArray.removeElementAtIndex(i);
			}
		}

		// COLISÃO: PLAYER SHOT X DIVER
		for (var i = this.playerShotArray.internalArray.length - 1; i >= 0; i--) 
		{
			var keepTesting = true;
			for (var j = this.diverArray.internalArray.length - 1; j >= 0; j--) 
			{
				if (keepTesting)
				{
					if (testarColisaoRectRect(this.playerShotArray.internalArray[i], this.diverArray.internalArray[j]))
					{
						// ADICIONA AO SCORE
						this.score.qttyDiverDead++;
						
						// CRIA UMA EXPLOSÃO PARA O DIVER
						this.explosionArray.pushElement(new Explosion(
							this.diverArray.internalArray[j].x, 
							this.diverArray.internalArray[j].y
						));

						// DESTRÓI O DIVER
						this.diverArray.removeElementAtIndex(j);

						// DESTRÓI O PLAYER SHOT, CASO ELE NÃO SEJA RED
						if (this.playerShotArray.internalArray[i].shotType != 1)
						{
							// DESTRÓI O PLAYER SHOT, CASO ELE NÃO SEJA RED
							this.playerShotArray.removeElementAtIndex(i);

							// SAI DO LOOP J
							keepTesting = false;
						}						
					}
				}				
			}
		}	

		// COLISÃO: PLAYER SHOT X ENEMY
		for (var i = this.playerShotArray.internalArray.length - 1; i >= 0; i--) 
		{
			var keepTesting = true;
			for (var j = this.enemyArray.internalArray.length - 1; j >= 0; j--) 
			{
				if (keepTesting)
				{
					if (testarColisaoRectRect(this.playerShotArray.internalArray[i], this.enemyArray.internalArray[j]))
					{
						// ADICIONA AO SCORE
						if (this.enemyArray.internalArray[j].enemyType == 0)
						{
							this.score.qttyFish++;
						}
						else
						{
							this.score.qttySub++;
						}

						// CRIA UMA EXPLOSÃO PARA O ENEMY
						this.explosionArray.pushElement(new Explosion(
							this.enemyArray.internalArray[j].x, 
							this.enemyArray.internalArray[j].y
						));

						// DESTRÓI O ENEMY
						this.enemyArray.removeElementAtIndex(j);

						// DESTRÓI O PLAYER SHOT, CASO ELE NÃO SEJA RED
						if (this.playerShotArray.internalArray[i].shotType != 1)
						{
							// DESTRÓI O PLAYER SHOT, CASO ELE NÃO SEJA RED
							this.playerShotArray.removeElementAtIndex(i);

							// SAI DO LOOP J
							keepTesting = false;
						}						
					}
				}				
			}
		}

		// COLISÃO: ENEMY SHOT X DIVER
		for (var i = this.enemyShotArray.internalArray.length - 1; i >= 0; i--) 
		{
			var keepTesting = true;
			for (var j = this.diverArray.internalArray.length - 1; j >= 0; j--) 
			{
				if (keepTesting)
				{
					if (testarColisaoRectRect(this.enemyShotArray.internalArray[i], this.diverArray.internalArray[j]))
					{
						// CRIA UMA EXPLOSÃO PARA O DIVER
						this.explosionArray.pushElement(new Explosion(
							this.diverArray.internalArray[j].x, 
							this.diverArray.internalArray[j].y
						));

						// DESTRÓI O DIVER
						this.diverArray.removeElementAtIndex(j);

						// DESTRÓI O ENEMY SHOT, CASO ELE NÃO SEJA RED
						if (this.enemyShotArray.internalArray[i].shotType != 1)
						{
							// DESTRÓI O ENEMY SHOT, CASO ELE NÃO SEJA RED
							this.enemyShotArray.removeElementAtIndex(i);

							// SAI DO LOOP J
							keepTesting = false;
						}						
					}
				}				
			}
		}

		// COLISÃO: ENEMY SHOT X ENEMY
		for (var i = this.enemyShotArray.internalArray.length - 1; i >= 0; i--) 
		{
			var keepTesting = true;
			for (var j = this.enemyArray.internalArray.length - 1; j >= 0; j--) 
			{
				if (keepTesting)
				{
					if (testarColisaoRectRect(this.enemyShotArray.internalArray[i], this.enemyArray.internalArray[j]))
					{
						// CRIA UMA EXPLOSÃO PARA O ENEMY
						this.explosionArray.pushElement(new Explosion(
							this.enemyArray.internalArray[j].x, 
							this.enemyArray.internalArray[j].y
						));

						// DESTRÓI O ENEMY
						this.enemyArray.removeElementAtIndex(j);

						// DESTRÓI O ENEMY SHOT, CASO ELE NÃO SEJA RED
						if (this.enemyShotArray.internalArray[i].shotType != 1)
						{
							// DESTRÓI O ENEMY SHOT, CASO ELE NÃO SEJA RED
							this.enemyShotArray.removeElementAtIndex(i);

							// SAI DO LOOP J
							keepTesting = false;
						}						
					}
				}				
			}
		}

		// COLISÃO: ENEMY X DIVER
		for (var i = this.enemyArray.internalArray.length - 1; i >= 0; i--) 
		{			
			for (var j = this.diverArray.internalArray.length - 1; j >= 0; j--) 
			{
				if (testarColisaoRectRect(this.enemyArray.internalArray[i], this.diverArray.internalArray[j]))
				{
					// CRIA UMA EXPLOSÃO PARA O DIVER
					this.explosionArray.pushElement(new Explosion(
						this.diverArray.internalArray[j].x, 
						this.diverArray.internalArray[j].y
					));

					// DESTRÓI O DIVER
					this.diverArray.removeElementAtIndex(j);
				}
			}
		}
		
		// COLISÃO: ENEMY X ENEMY
		for (var i = this.enemyArray.internalArray.length - 1; i >= 0; i--) 
		{
			var keepTesting = true;
			for (var j = this.enemyArray.internalArray.length - 1; j >= 0; j--) 
			{
				if (j > i)
				{
					if (keepTesting)
					{
						if (testarColisaoRectRect(this.enemyArray.internalArray[i], this.enemyArray.internalArray[j]))
						{
							// CRIA UMA EXPLOSÃO PARA O ENEMY J
							this.explosionArray.pushElement(new Explosion(
								this.enemyArray.internalArray[j].x, 
								this.enemyArray.internalArray[j].y
							));

							// CRIA UMA EXPLOSÃO PARA O ENEMY I
							this.explosionArray.pushElement(new Explosion(
								this.enemyArray.internalArray[i].x, 
								this.enemyArray.internalArray[i].y
							));

							// DESTRÓI O ENEMY J
							this.enemyArray.removeElementAtIndex(j);

							// DESTRÓI O ENEMY I
							this.enemyArray.removeElementAtIndex(i);

							// SAI DO LOOP J
							keepTesting = false;	
						}
					}
				}
			}
		}		
	}	

	this.updateAtualizaMembros = function(
		)
	{
		this.background.update();		

		this.score.update();

		this.player.update();

		this.playerShotArray.update();

		this.diverArray.update();

		this.bubbleArray.update();

		this.enemyArray.update();

		this.enemyShotArray.update();

		this.explosionArray.update();
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

		this.explosionArray.show();	

		this.score.show();

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
				xToDraw = 38;
				break;
			case 2: // green
				xToDraw = 38;
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