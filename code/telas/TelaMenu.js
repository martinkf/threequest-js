function TelaMenu()
{
	this.currentChoice = 0;
	this.selectionFishY = 0;

	this.update = function()
	{
		switch (this.currentChoice)
		{
			case 0: // NEW GAME
				this.selectionFishY = 260;
				break;
			case 1: // INSTRUCTIONS
				this.selectionFishY = 328;
				break;
			case 2: // CREDITS
				this.selectionFishY = 396;
				break;
		}
	}

	this.show = function()
	{
		// desenha o bg
		image(this.bgImage, 0, 0);

		// desenha o fish
		image(this.selectionFishImg, 200, this.selectionFishY);
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