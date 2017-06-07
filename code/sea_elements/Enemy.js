function Enemy()
{
	// interface para facilitar
	//
	// int this.x
	// int this.y
	// Sprite this.sprite
	// bool this.isAlive
	// int this.speed
	//
	// int this.facingDirection
	// 0 - LEFT
	// 1 - RIGHT
	//
	// int this.enemyType
	// 0 - FISH
	// 1 - SUB
	//
	// int this.color
	// 0 - RED
	// 1 - GREEN
	// 2 - BLUE
	//
	// int this.shotCooldown
	// bool this.wantsToShoot


	// continua a inicialização
	var lane = getRandomInt(0, 8);
	this.y = 165 + (lane * 40);

	this.speed = getRandomInt(2, 3);

	this.enemyType = getRandomInt(0, 1);

	this.color = getRandomInt(0, 2);

	switch (this.enemyType)
	{
		case 0: // FISH
			switch (this.color)
			{
				case 0: // RED FISH
					this.sprite = new Sprite(
						img_enemyFishRedA,
						img_enemyFishRedA,
						img_enemyFishRedA,
						img_enemyFishRedB,
						15
					);
					break;
				case 1: // GREEN FISH
					this.sprite = new Sprite(
						img_enemyFishGreenA,
						img_enemyFishGreenA,
						img_enemyFishGreenA,
						img_enemyFishGreenB,
						15
					);
					break;
				case 2: // BLUE FISH
					this.sprite = new Sprite(
						img_enemyFishBlueA,
						img_enemyFishBlueA,
						img_enemyFishBlueA,
						img_enemyFishBlueB,
						15
					);
					break;
			}
			break;
		case 1: // SUB
			switch (this.color)
			{
				case 0: // RED SUB
					this.sprite = new Sprite(
						img_enemySubRedA,
						img_enemySubRedB,
						img_enemySubRedC,
						img_enemySubRedD,
						15
					);
					break;
				case 1: // GREEN SUB
					this.sprite = new Sprite(
						img_enemySubGreenA,
						img_enemySubGreenB,
						img_enemySubGreenC,
						img_enemySubGreenD,
						15
					);
					break;
				case 2: // BLUE SUB
					this.sprite = new Sprite(
						img_enemySubBlueA,
						img_enemySubBlueB,
						img_enemySubBlueC,
						img_enemySubBlueD,
						15
					);
					break;
			}
			break;
	}

	var lOrR = getRandomInt(1, 2);
	if (lOrR == 1)
	{
		this.x = -10;
		this.facingDirection = 1;
	}
	else
	{
		this.x = width + 10;
		this.facingDirection = 0;
		this.sprite.isFlipped = true;
	}

	this.shotCooldown = 0;

	this.wantsToShoot = false;

	this.isAlive = true;
	// fim da inicialização

	// UPDATE FUNCTION
	this.update = function()
	{	
		// VERIFICA OUT OF BOUNDS
		this.updateOOB();

		// MOVE-SE
		this.updateMove();

		// ATUALIZA SEU SPRITE
		this.sprite.update();

		// TENTA ATIRAR
		this.tryToShoot();
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

	this.tryToShoot = function()
	{
		if ((this.enemyType == 1) && (this.isAlive) && (this.color != 2))
		{
			// REDUZ O COOLDOWN DO TIRO, CASO HAJA
			if (this.shotCooldown > 0) this.shotCooldown--;

			// 1 CHANCE EM 200 A CADA FRAME, DE TENTAR ATIRAR
			if ((getRandomInt(1, 200) == 1) && (this.shotCooldown == 0))
			{
				this.wantsToShoot = true;
				this.shotCooldown = 120;
			}
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