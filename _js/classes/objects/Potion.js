export default class Potion extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {
    super(game, x, y, 'potion', frame);

    this.anchor.setTo(0.5, 0.31);
    this.animations.add('shine');
    this.game.physics.arcade.enableBody(this);
    this.body.setSize(20,20,-2.5,10);
  }

  update() {
    this.animations.play('shine', 10);
    this.body.velocity.x = -100;
    this.checkWorldBounds = true;

    if (this.body.x < this.game.world.bounds.left - this.width) {
      this.destroy();
    };
  }

  kill(){
    this.destroy();
  }
}