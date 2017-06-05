function BottomBar()
{
	// interface para facilitar
	//
	// Sprite this.bottomBarBase
	// Sprite this.gridSlotA
	// Sprite this.gridSlotB
	// Sprite this.gridSlotC

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

	this.update = function()
	{		
		this.bottomBarBase.update();

		this.gridSlotA.update();

		this.gridSlotB.update();

		this.gridSlotC.update();
	}

	this.show = function()
	{			
		this.bottomBarBase.desenhaAnchorCorner(0, 517);

		this.gridSlotA.desenhaAnchorCorner(13, 530);

		this.gridSlotB.desenhaAnchorCorner(84, 530);

		this.gridSlotC.desenhaAnchorCorner(155, 530);
	}
}