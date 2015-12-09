export default class Egg extends Phaser.Sprite {
 
 constructor(game, x, y, frame) {
    super(game, x, y, 'egg', frame);

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('break', [1,2,3,4]);
    this.game.physics.arcade.enableBody(this);
    this.body.gravity.y = 100;
    this.vermeerder=1;
  }
  update() {
    this.vermeerder+=0.3;
  	this.angle += this.vermeerder;
  }

  break() {
    this.vermeerder=0;
    var x = this.x;
    var y = this.y;

    this.animations.play('break', 10, false,true);
  }
}