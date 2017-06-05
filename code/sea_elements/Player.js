function Player(sprite1_, sprite2_, sprite3_, sprite4_)
{
	// interface para facilitar
	//
	// int this.x
	// int this.y
	// Sprite this.sprite
	// bool this.isAlive
	// bool this.isOnSurface
	// bool this.wantsToShoot
	// int this.facingDirection
	// 0 - LEFT
	// 1 - RIGHT
	// bool this.isFrozen

	// continua a inicialização
	this.x = width/2;

	this.y = 116;

	this.sprite = 
	new Sprite(
		sprite1_, 
		sprite2_,
		sprite3_,
		sprite4_,
		6
	);

	this.isAlive = true;

	this.isOnSurface = true;

	this.wantsToShoot = false;

	this.facingDirection = 1;

	this.isFrozen = false;

	// UPDATE FUNCTION
	this.update = function()
	{	
		// VERIFICAÇÕES REFERENTES À SURFACE
		if (this.y == 116)  isOnSurface = true;
		else 				isOnSurface = false;

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
		if (this.isAlive) this.sprite.desenhaAnchorCenter(this.x, this.y);
	}


	// CUSTOM FUNCTIONS
	this.pressingUp = function()
	{
		if ((this.y - 4) < 116) this.y = 116;
		else 					this.y -= 4;
	}

	this.pressingDown = function()
	{
		if ((this.y + 4) > 500) this.y = 500;
		else 					this.y += 4;
	}

	this.pressingLeft = function()
	{
		if (!isOnSurface)
		{
			if ((this.x - 4) < 52) this.x = 52;
			else 				   this.x -= 4;

			this.sprite.isFlipped = true;
		}		
	}

	this.pressingRight = function()
	{
		if (!isOnSurface)
		{
			if ((this.x + 4) > (width - 52)) this.x = (width - 52);
			else 							 this.x += 4;

			this.sprite.isFlipped = false;
		}
	}

	this.shoot = function()
	{
		if (!isOnSurface)
		{
			this.wantsToShoot = true;
			console.log("Tang tang tang!");
		}
	}
}