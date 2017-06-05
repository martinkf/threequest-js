function TelaMenu()
{
	this.bgImage = img_menuBg;
	this.currentChoice = 0;
	this.selectionFishY = 260;
	this.selectionFish = 
	new Sprite(
		img_enemyFishRedA, 
		img_enemyFishRedA, 
		img_enemyFishRedA, 
		img_enemyFishRedB, 
		15
	);

	this.update = function()
	{
		switch (this.currentChoice)
		{
			case 0: // NEW GAME				
				this.selectionFish.changeSprite(
					img_enemyFishRedA,
					img_enemyFishRedA,
					img_enemyFishRedA,
					img_enemyFishRedB
				);
				this.selectionFishY = 260;
				break;
			case 1: // INSTRUCTIONS				
				this.selectionFish.changeSprite(
					img_enemyFishGreenA,
					img_enemyFishGreenA,
					img_enemyFishGreenA,
					img_enemyFishGreenB
				);
				this.selectionFishY = 328;
				break;
			case 2: // CREDITS
				this.selectionFish.changeSprite(
					img_enemyFishBlueA,
					img_enemyFishBlueA,
					img_enemyFishBlueA,
					img_enemyFishBlueB
				);
				this.selectionFishY = 396;
				break;
		}

		this.selectionFish.update();
	}

	this.show = function()
	{
		// DESENHA O BG
		image(this.bgImage, 0, 0);

		// DESENHA O SELECTION FISH SPRITE
		this.selectionFish.desenhaAnchorCorner(200, this.selectionFishY);
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