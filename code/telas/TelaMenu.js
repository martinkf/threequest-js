function TelaMenu()
{
	this.bgImage = img_menuBg;
	this.currentChoice = 0;	
	this.selectionFish = 
	new Sprite(
		200, 
		260, 
		img_enemyFishBlueA, 
		img_enemyFishBlueA, 
		img_enemyFishBlueA, 
		img_enemyFishBlueB, 
		15
	);

	this.update = function()
	{
		switch (this.currentChoice)
		{
			case 0: // NEW GAME
				this.selectionFish.y = 260;
				break;
			case 1: // INSTRUCTIONS
				this.selectionFish.y = 328;
				break;
			case 2: // CREDITS
				this.selectionFish.y = 396;
				break;
		}

		this.selectionFish.update();
	}

	this.show = function()
	{
		// DESENHA O BG
		image(this.bgImage, 0, 0);

		// DESENHA O SELECTION FISH SPRITE
		this.selectionFish.show();
	}

	this.pressedUp = function()
	{
		if (this.currentChoice > 0)	this.currentChoice--;
		else this.currentChoice = 2;
	}

	this.pressedDown = function()
	{
		if (this.currentChoice < 2) this.currentChoice++;
		else this.currentChoice = 0;
	}
}