export default class Kamikaze extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {
    super(game, x, y, 'kamikaze', frame);

    this.anchor.setTo(0.5, 0.85);
    this.animations.add('flap', [0,1]);
    this.animations.play('flap', 5, true);
    this.angle = this.game.rnd.integerInRange(-15,-45);

    this.kamiX = this.game.rnd.integerInRange(0,-200);
    this.isOnGround=false;

    this.game.physics.arcade.enableBody(this);
    this.body.setSize(45,20);
  }
  update() {

  	this.body.velocity.x = this.kamiX;
  	this.body.velocity.y = 100;

    if (this.isOnGround==true) {
      this.body.velocity.x = -200;
    };

    if (this.body.x < this.game.world.bounds.left - this.width) {
      this.destroy();
    } 
  }

  kamikazeDestroy() {
    this.angle = 0;
    this.frame = 2;
    this.isOnGround=true;
  }
}
   