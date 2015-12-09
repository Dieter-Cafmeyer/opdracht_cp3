export default class Player extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'player', frame);

    this.powered = false;

    this.lives = 3;

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('run', [ 1, 2, 3,4]);

    this.game.physics.arcade.enableBody(this);
    this.body.gravity.y = 400;

    //Hitregion: exclude arms
    this.body.setSize(40,60);

    this.ducking = false;
  }
  update() {
    if(this.powered == true) {
      this.powerHandler();
      if (this.lives < 0) {
        this.lives=1;
      };
    }
    
    if (!this.body.touching.down) {
      this.frame=4;
    } else{
      this.animations.play('run', 9, true);
    }
    this.ducking=false;
  }

  //powerhandling
  powerHandler(){
    var color = '0x'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.tint = color;
  }

  powerUp(){
    this.powered = true;
    this.game.time.events.add(Phaser.Timer.SECOND * 5, this.powerDown , this);
  }

  powerDown() {
    if (this.powered == true) {
      this.powered = false;
      this.tint = 0xFFFFFF;
    };
    
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
  hit(){
    if (this.powered==false) {
      this.lives-=1;
    };
    this.powerUp();
  }
  extraLife(){
    this.lives+=1;
  }
}


