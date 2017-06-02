function Sprite(x_, y_, frame1_, frame2_, frame3_, frame4_, rateOfAnimation_)
{
  this.x = x_;
  this.y = y_;
  this.frame1 = frame1_;
  this.frame2 = frame2_;
  this.frame3 = frame3_;
  this.frame4 = frame4_;
  this.rateOfAnimation = rateOfAnimation_;
  this.currentFrameNumber = 1;
  this.currentFrame = this.frame1;
  this.counter = 0;

  this.update = function()
  {
    // avança o frame counter
    if (this.counter % 120 == 0)
    {
      this.counter = 1;
    }
    else this.counter++;    

    // verifica a animação
    if (this.counter % this.rateOfAnimation == 0)
    {
      this.avancaAnimacao();
    }
  }

  this.avancaAnimacao = function()
  {
    if ((this.currentFrameNumber + 1) > 4)
    {
      this.currentFrameNumber = 1;
    }
    else this.currentFrameNumber++;

    if (this.currentFrameNumber == 1) this.currentFrame = this.frame1;
    else if (this.currentFrameNumber == 2) this.currentFrame = this.frame2;
    else if (this.currentFrameNumber == 3) this.currentFrame = this.frame3;
    else this.currentFrame = this.frame4;
  }

  this.show = function()
  {   
    image(this.currentFrame, this.x, this.y);
  }
}