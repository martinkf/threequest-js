function Diver()
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


	// continua a inicialização
	this.sprite = new Sprite(
		img_diverA,
		img_diverA,
		img_diverA,
		img_diverB,
		15
	);

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

	var lane = getRandomInt(0, 8);
	this.y = 165 + (lane * 40);

	this.speed = getRandomInt(1, 2);

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