function Player()
{
	// interface para facilitar
	//
	// int this.x
	// int this.y
	// Sprite this.sprite	
	// bool this.isFrozen
	// bool this.isOnSurface
	//
	// int this.facingDirection
	// 0 - LEFT
	// 1 - RIGHT
	//
	// int this.shotType
	// 0 - regular
	// 1 - red
	// 2 - green
	// 3 - blue
	//

	// continua a inicialização
	this.x = width/2;

	this.y = 116;

	this.sprite = 
	new Sprite(
		img_playerA,
		img_playerB,
		img_playerC,
		img_playerD,
		6
	);

	this.isOnSurface = true;

	this.shotType = 0;

	this.facingDirection = 1;

	this.isFrozen = false;

	// UPDATE FUNCTION
	this.update = function()
	{	
		// VERIFICAÇÕES REFERENTES À SURFACE
		if (this.y === 116) this.isOnSurface = true;
		else this.isOnSurface = false;

		// VERIFICAÇÕES REFERENTES À MOVIMENTAÇÃO
		if (!this.isFrozen)
		{
			if (keyIsDown(UP_ARROW)) this.pressingUp();
			if (keyIsDown(RIGHT_ARROW)) this.pressingRight();
			if (keyIsDown(DOWN_ARROW)) this.pressingDown();
			if (keyIsDown(LEFT_ARROW)) this.pressingLeft();
		}		

		// ATUALIZA A ANIMAÇÃO DO SPRITE
		this.sprite.update();
	}

	// SHOW FUNCTION
	this.show = function()
	{
		this.sprite.desenhaAnchorCenter(this.x, this.y);
	}


	// CUSTOM FUNCTIONS
	this.pressingUp = function()
	{
		if ((this.y - 5) < 116) this.y = 116;
		else 					this.y -= 5;
	}

	this.pressingDown = function()
	{
		if ((this.y + 5) > 500) this.y = 500;
		else 					this.y += 5;
	}

	this.pressingLeft = function()
	{
		if (!this.isOnSurface)
		{
			if ((this.x - 5) < 52) this.x = 52;
			else 				   this.x -= 5;

			this.facingDirection = 0;

			this.sprite.isFlipped = true;
		}		
	}

	this.pressingRight = function()
	{
		if (!this.isOnSurface)
		{
			if ((this.x + 5) > (width - 52)) this.x = (width - 52);
			else 							 this.x += 5;

			this.facingDirection = 1;

			this.sprite.isFlipped = false;
		}
	}
}