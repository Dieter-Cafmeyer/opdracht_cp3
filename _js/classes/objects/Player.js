export default class Player extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'player', frame);

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('run', [ 1, 2, 3,4]);

    this.game.physics.arcade.enableBody(this);
    this.body.gravity.y = 400;

    this.ducking = false;
  }
  update() {
    if (!this.body.touching.down) {
      this.frame=4;
    } else{
      this.animations.play('run', 9, true);
    }
    this.ducking=false;
  }
  jump() {
    // this.flapSound.play();
    this.body.velocity.y = -200;
  }
  duck(){
    //bukken: controls uitschakelen, traag wegglijden
    this.frame=5;
    this.ducking=true;
    if (this.body.position.x > 0) {
       this.body.position.x -= 1;
    };
  }
}