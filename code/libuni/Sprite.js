function Sprite(frame1_, frame2_, frame3_, frame4_, rateOfAnimation_)
{ 
  this.frame1 = frame1_;
  this.frame2 = frame2_;
  this.frame3 = frame3_;
  this.frame4 = frame4_;
  this.rateOfAnimation = rateOfAnimation_;
  this.currentFrameNumber = 1;
  this.currentFrame = this.frame1;
  this.counter = 0;
  this.isFlipped = false;

  this.changeSprite = function(frame1_, frame2_, frame3_, frame4_)
  {
    this.frame1 = frame1_;
    this.frame2 = frame2_;
    this.frame3 = frame3_;
    this.frame4 = frame4_;
  }

  this.update = function()
  {
    // AVANÇA O FRAME COUNTER
    if (this.counter % 120 == 0)
    {
      this.counter = 1;
    }
    else this.counter++;    

    // VERIFICA A ANIMAÇÃO
    if (this.counter % this.rateOfAnimation == 0)
    {
      this.avancaAnimacao();
    }
  }

  this.avancaAnimacao = function()
  {
    // AVANÇA O NUMERO DO FRAME
    if ((this.currentFrameNumber + 1) > 4)
    {
      this.currentFrameNumber = 1;
    }
    else this.currentFrameNumber++;

    // DE ACORDO COM O NUMERO DO FRAME, MODIFICA O CURRENT FRAME
    if (this.currentFrameNumber == 1) this.currentFrame = this.frame1;
    else if (this.currentFrameNumber == 2) this.currentFrame = this.frame2;
    else if (this.currentFrameNumber == 3) this.currentFrame = this.frame3;
    else this.currentFrame = this.frame4;
  }

  this.desenhaAnchorCorner = function(x_, y_)
  {
    imageMode(CORNER);
    image(this.currentFrame, x_, y_);
  }

  this.desenhaAnchorCenter = function(x_, y_)
  {
    imageMode(CENTER);
    if (this.isFlipped)
    {
      push();
      scale(-1.0, 1.0);    
      image(this.currentFrame, -x_ , y_);
      pop();
    }
    else
    {      
      image(this.currentFrame, x_, y_);
    }    
  }
}