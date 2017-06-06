function Shot(shotType_, x_, y_, direction_)
{
	// interface para facilitar
	//
	// int this.x
	// int this.y
	// Sprite this.sprite
	// bool this.isAlive
	// int this.speed
	//
	// int this.shotType
	// 0 - regular
	// 1 - red
	// 2 - green
	// 3 - blue
	//
	// int this.facingDirection
	// 0 - LEFT
	// 1 - RIGHT


	// continua a inicialização
	this.x = x_;

	this.y = y_;

	this.shotType = shotType_;

	this.facingDirection = direction_;

	switch (this.shotType)
	{
		case 0: // REGULAR
			this.sprite = 
				new Sprite(
				img_shotRegular, 
				img_shotRegular,
				img_shotRegular,
				img_shotRegular,
				60
			);
			this.speed = 4;
			break;
		case 1: // RED
			this.sprite = 
				new Sprite(
				img_shotRed, 
				img_shotRed,
				img_shotRed,
				img_shotRed,
				60
			);
			this.speed = 6;
			break;
		case 2: // GREEN
			this.sprite = 
				new Sprite(
				img_shotGreen, 
				img_shotGreen,
				img_shotGreen,
				img_shotGreen,
				60
			);
			this.speed = 3;
			break;
		case 3: // BLUE
			this.sprite = 
				new Sprite(
				img_shotBlue, 
				img_shotBlue,
				img_shotBlue,
				img_shotBlue,
				60
			);
			this.speed = 0;
			break;
	}

	this.isAlive = true;
	// fim da inicialização

	// UPDATE FUNCTION
	this.update = function()
	{	
		// VERIFICA OUT OF BOUNDS
		this.updateOOB();

		// MOVE-SE
		this.updateMove();
	}

	this.updateOOB = function()
	{
		if (this.isAlive)
		{
			if (this.x < -20 || this.x > (width + 20)) this.isAlive = false;
		}
	}

	this.updateMove = function()
	{
		if (this.isAlive)
		{
			if (this.facingDirection == 0) this.x -= this.speed;
			else this.x += this.speed;
		}
	}

	// SHOW FUNCTION
	this.show = function()
	{
		if (this.isAlive) this.sprite.desenhaAnchorCenter(this.x, this.y);
	}


	// CUSTOM FUNCTIONS
	//
}