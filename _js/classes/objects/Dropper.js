export default class Dropper extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {
    super(game, x, y, 'dropper', frame);

    
    this.animations.add('flap');
    this.animations.play('flap', 10, true);

    this.game.physics.arcade.enableBody(this);
  }
  update() {
  	this.body.velocity.x = -200;
  }
}
   