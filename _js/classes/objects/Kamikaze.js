export default class Kamikaze extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {
    super(game, x, y, 'kamikaze', frame);

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('flap');
    this.animations.play('flap', 5, true);

    this.game.physics.arcade.enableBody(this);
  }
  update() {
  	this.body.velocity.x = -200;
  	this.body.velocity.y = 150;
  	this.angle = -20;
  }

  kamikazeDestroy() {
    var x = this.kamikaze.x-40;
    var y = this.kamikaze.y-20;
    this.kamikaze.destroy();

    this.kamikaze_dead = this.game.add.sprite(x,y,'kamikaze_dead');
    this.game.physics.arcade.enableBody(this.kamikaze_dead);
    this.kamikaze_dead.body.velocity.x=-200;
  }
}
   