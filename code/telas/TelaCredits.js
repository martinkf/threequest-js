function TelaCredits()
{
	this.bgImage = img_creditsBg;
	this.counter = 1;
	this.frozen = false;

	this.update = function()
	{
		// AVANÇA O SPLASH FRAME COUNTER
		if (!this.frozen)
		{			
    		this.counter++;
    	}
	}
	
	this.show = function()
	{
		// DESENHA O BG
		image(this.bgImage, 0, 0);
	}
}