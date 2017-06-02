function TelaJogo()
{
	// interface para facilitar
	//
	// Sprite this.background


	// continua a inicialização
	this.background = 
	new Sprite(
		0, 
		0, 
		img_gameBackgroundA, 
		img_gameBackgroundA, 
		img_gameBackgroundB, 
		img_gameBackgroundB, 
		30
	);

	this.update = function()
	{		
		this.background.update();
	}

	this.show = function()
	{		
		this.background.show();
	}
}