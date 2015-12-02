export default class Dropper extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {
    super(game, x, y, 'dropper', frame);

    this.animations.add('flap');
    this.animations.play('flap', 10, true);

    this.game.physics.arcade.enableBody(this);
    this.body.setSize(30,10,0,25);
    this.killed= false;
  }
  update() {
  	this.body.velocity.x = -200;
  }
  kill(){
  	this.destroy();
  }
}
   