export default class Dropper extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {  //score nog meegeven?
    super(game, x, y, 'dropper', frame);

    this.animations.add('flap');
    this.animations.play('flap', 10, true);
    this.game.physics.arcade.enableBody(this);
    this.body.setSize(30,10,0,25);
    this.dropped=false;
  }
  update() {
  	this.checkWorldBounds = true;
  	this.body.velocity.x = -200;

  	if (this.body.x < this.game.world.width) {
  		this.events.onOutOfBounds.add(this.handleScore,this);
  	};
  	if (this.body.x < this.game.world.bounds.left - this.width) {
  		this.destroy();
  	};
  }
  
  kill(){
  	this.destroy();
  }
  handleScore(score){
  	this.game.score++;
  }
}
   