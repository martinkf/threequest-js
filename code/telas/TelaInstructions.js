function TelaInstructions()
{
	this.bgImage = img_instructionsBg;
	
	this.show = function()
	{
		// desenha o bg
		image(this.bgImage, 0, 0);
	}
}