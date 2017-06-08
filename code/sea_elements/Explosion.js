function Explosion(x_, y_)
{
	// interface para facilitar
	//
	// int this.x
	// int this.y
	// Sprite this.sprite
	// bool this.isAlive


	// continua a inicialização
	this.sprite = new Sprite(
		img_explosionA,
		img_explosionB,
		img_explosionC,
		img_explosionD,
		4
	);

	this.x = x_;

	this.y = y_;

	this.isAlive = true;
	// fim da inicialização

	// UPDATE FUNCTION
	this.update = function()
	{	
		// VERIFICA ANIMATION LIFE
		this.updateAnimationLife();		
	}

	this.updateAnimationLife = function()
	{
		if (this.isAlive)
		{
			var prevFrame = this.sprite.currentFrameNumber;

			this.sprite.update();

			var curFrame = this.sprite.currentFrameNumber;

			if (prevFrame == 4 && curFrame == 1) this.isAlive = false;
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