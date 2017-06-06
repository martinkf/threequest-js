function ElementArray()
{
	// interface para facilitar
	//
	// [] this.internalArray

	// continua a inicialização
	this.internalArray = [];
	// fim da inicialização


	// UPDATE FUNCTION
	this.update = function()
	{	
		// CONFERE OS ELEMENTOS MORTOS E OS REMOVE
		for (var i = this.internalArray.length - 1; i >= 0; i--) 
		{
			if (!this.internalArray[i].isAlive) this.removeElementAtIndex(i);
		}

		// ATUALIZA TODOS SEUS MEMBROS
		for (var i = this.internalArray.length - 1; i >= 0; i--) 
		{
			this.internalArray[i].update();
		}
	}

	// SHOW FUNCTION
	this.show = function()
	{
		for (var i = this.internalArray.length - 1; i >= 0; i--) 
		{
			this.internalArray[i].show();
		}
	}


	// CUSTOM FUNCTIONS
	this.pushElement = function(input_)
	{
		this.internalArray.push(input_);
	}

	this.removeElementAtIndex = function(index_)
	{
		this.internalArray.splice(index_, 1);
	}

	this.spawnNewDiver = function()
	{
		this.internalArray.push(new Diver());
	}
}