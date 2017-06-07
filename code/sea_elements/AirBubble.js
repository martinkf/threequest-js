function AirBubble()
{
	// interface para facilitar
	//
	// int this.x
	// int this.y
	// Sprite this.sprite
	// bool this.isAlive


	// continua a inicialização
	this.sprite = new Sprite(
		img_airBubbleA,
		img_airBubbleA,
		img_airBubbleB,
		img_airBubbleB,
		15
	);

	this.y = height - 70;

	var column = getRandomInt(0, 19);
	this.x = 20 + (column * 40);

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
			if (this.y < 126) this.isAlive = false;
		}
	}

	this.updateMove = function()
	{
		if (this.isAlive) this.y -= 2;
	}

	// SHOW FUNCTION
	this.show = function()
	{
		if (this.isAlive) this.sprite.desenhaAnchorCenter(this.x, this.y);
	}


	// CUSTOM FUNCTIONS
	//
}