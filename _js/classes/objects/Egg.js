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
    //this.vermeerder*=1.5;
  	this.angle += this.vermeerder;
    //console.log(this.y);
  }

  break() {
    this.egg.vermeerder=0;
    var x = this.egg.x;
    var y = this.egg.y;

    this.egg.animations.play('break', 10, false,true);

    // this.egg.destroy();

    // this.egg_dead = this.game.add.sprite(x,y,'egg');
    // this.egg_dead.animations.add('break', [1,2,3,4]);
    // this.egg_dead.animations.play('break', 35, false);

    // this.game.physics.arcade.enableBody(this.egg_dead);
    // this.egg_dead.body.velocity.x=-200;
  }
}