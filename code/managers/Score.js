function Score()
{
	// interface para facilitar
	//
	// Sprite this.bottomBarBase
	// Sprite this.gridSlotA
	// Sprite this.gridSlotB
	// Sprite this.gridSlotC
	// int this.qttyFish
	// int this.qttySub
	// int this.qttyDiver
	// int this.qttyDiverDead
	// int this.maxOxygen
	// int this.oxygenLeft
	// Sprite[] this.oxygenArray

	// continua a inicialização
	this.bottomBarBase = 
	new Sprite(
		img_gameBottomBarOxygen, 
		img_gameBottomBarOxygen,
		img_gameBottomBarOxygen,
		img_gameBottomBarOxygen,
		60
	);

	this.gridSlotA = 
	new Sprite(
		img_gameBottomBarGridNull, 
		img_gameBottomBarGridNull,
		img_gameBottomBarGridNull,
		img_gameBottomBarGridNull,
		60
	);

	this.gridSlotB = 
	new Sprite(
		img_gameBottomBarGridNull, 
		img_gameBottomBarGridNull,
		img_gameBottomBarGridNull,
		img_gameBottomBarGridNull,
		60
	);	
	
	this.gridSlotC = 
	new Sprite(
		img_gameBottomBarGridNull, 
		img_gameBottomBarGridNull,
		img_gameBottomBarGridNull,
		img_gameBottomBarGridNull,
		60
	);

	this.qttyFish = 0;

	this.qttySub = 0;

	this.qttyDiver = 0;

	this.qttyDiverDead = 0;

	this.maxOxygen = 3000;

	this.oxygenLeft = this.maxOxygen;

	this.oxygenArray = [];
	for (var i = 0; i < 500; i++)
	{
		this.oxygenArray[i] = new Sprite(
				img_oxygenInf,
				img_oxygenInf,
				img_oxygenInf,
				img_oxygenInf,
				60
			);
	}
	// fim da inicialização


	// UPDATE FUNCTION
	this.update = function()
	{		
		//
	}

	// SHOW FUNCTION
	this.show = function()
	{			
		this.bottomBarBase.desenhaAnchorCorner(0, 517);

		this.gridSlotA.desenhaAnchorCorner(13, 530);

		this.gridSlotB.desenhaAnchorCorner(84, 530);

		this.gridSlotC.desenhaAnchorCorner(155, 530);

		// DESENHA O OXYGEN BAR
		for (var i = 0; i < (this.oxygenLeft / 6); i++)
		{
			this.oxygenArray[i].desenhaAnchorCorner(287 + i, 526);
		}

		// TEXT SETUP
		textSize(20);
		textAlign(LEFT);
		textFont(fnt_pressStart2P);
		fill(255);

		// DESENHA O QTTYFISH		
		text(this.qttyFish, 342, 584);

		// DESENHA O QTTYSUB
		text(this.qttySub, 554, 584);

		// DESENHA O QTTYDIVER
		text(this.qttyDiver, 714, 584);
	}
}