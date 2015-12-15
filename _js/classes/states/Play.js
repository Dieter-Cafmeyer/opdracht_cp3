import Ground from '../objects/Ground.js';
import Kamikaze from '../objects/Kamikaze.js';
import Player from '../objects/Player.js';
import Egg from '../objects/Egg.js';
import Dropper from '../objects/Dropper.js';
import Potion from '../objects/Potion.js';

let cursors;
let x = 0;
export default class Play extends Phaser.State {
  create() {
    //form
    var form = document.getElementById('formulier');
    form.classList.add('hidden');  

    var button = document.getElementById('submit');
    button.classList.add('hidden');

    var ul = document.getElementById('highscores');
    ul.classList.add('hidden');  

    //game
    cursors = this.game.input.keyboard.createCursorKeys();

    this.game.score = 0;
    this.controls = false;

    //background instellen van de start menu + de animatie hiervan
    this.background = this.game.add.sprite(0,0,'background');
    this.background.animations.add('move');
    this.background.animations.play('move', 12, true);

    //ground plaatsen en laten bewegen
    this.ground = new Ground(this.game, 0, 245, 560, 44);
    this.game.add.existing(this.ground);

    //player toevoegen
    this.player = new Player(this.game, 100,100);
    this.game.add.existing(this.player);

    this.eggGroup = this.game.add.group();

    this.kamikazeFreq = 9000;
    this.dropperHighFreq = 7000;
    this.dropperLowFreq = 4000;

    this.kamikazeGroup = this.game.add.group();
    this.kamikazeTimer = this.game.time.events.loop(this.kamikazeFreq, this.addKamikaze, this);

    this.dropperHighGroup = this.game.add.group();
    this.dropperHightimer = this.game.time.events.loop(this.dropperHighFreq, this.addDropperHigh, this);

    this.dropperLowGroup = this.game.add.group();
    this.dropperLowtimer = this.game.time.events.loop(this.dropperLowFreq, this.addDropperLow, this);

    this.potionGroup = this.game.add.group();
    this.potionTimer = this.game.time.events.loop(25000, this.addPotion, this);

    this.livesText = this.game.add.text(450, 0, "Lives: " + this.player.lives);
    this.scoreText = this.game.add.text(0, 0, "Score: " + this.game.score);
    
    this.count = 3;
    
    this.musicTimer = this.game.time.events.add(4000, this.musicTime, this);

    this.countdownTimer = this.game.time.events.loop(1000, this.countdown, this);
  }
  update() {
    this.game.physics.arcade.collide(this.kamikazeGroup, this.ground, this.kamikazeGroundHitHandler, null, this);
    this.game.physics.arcade.collide(this.player, this.ground);

    this.game.physics.arcade.collide(this.player, this.dropperLowGroup, this.playerDropperHitHandler, null, this);
    this.game.physics.arcade.collide(this.player, this.kamikazeGroup, this.kamikazeHitHandler, null, this);
    this.game.physics.arcade.collide(this.player, this.eggGroup, this.playerEggHitHandler, null,this);
    this.game.physics.arcade.collide(this.ground, this.eggGroup, this.eggGroundHandler, null, this);
    this.game.physics.arcade.collide(this.player, this.potionGroup, this.playerPotionHitHandler, null, this);
    
    this.scoreHandler();

    if (this.player.lives <= 0) {
      this.background.animations.stop();
      this.ground.autoScroll(0,0);
      this.controls = false;
      this.player.animations.stop();
      this.game.time.events.add(Phaser.Timer.SECOND, this.shutdown , this);
    };

    this.dropperHighGroup.forEach(dropper =>{

      let spelerX = Math.floor(this.player.body.x);
      let vogelX = Math.floor(dropper.body.x);
      if (vogelX < spelerX+2 && vogelX > spelerX-2) {
        this.dropEgg(dropper.body.x,dropper.body.y);
      };
      if (dropper.body.x < this.player.body.x) {
        dropper.dropped=true;
      };

    });
    
    if(this.controls){
      this.player.body.velocity.x=0;
      if (!cursors.down.isDown) {
          if (this.player.body.position.x > 0 && cursors.left.isDown)
            {
              this.player.body.velocity.x = -150;
            }
          else if ((this.player.body.position.x + this.player.width/2< this.game.world.width) && cursors.right.isDown)
            {
              this.player.body.velocity.x = 150;
            }
      };
      
      //  player laten springen als hij de grond raakt
      if (cursors.up.isDown && this.player.body.touching.down){
          this.player.jump();
      }

      // player laten bukken als hij de grond raakt
      if (cursors.down.isDown && this.player.body.touching.down && this.game.score > 0){
          this.player.duck();
      }
    }
    this.scoreHandler();

  }

  scoreHandler(){
    //bukken -score updaten
    this.game.score= Math.floor(this.game.score);
    this.scoreText.setText("Score: " + this.game.score);
    switch(this.game.score){
      case (0):
        break;
      case (5):
        this.kamikazeFreq = 7000;
        this.dropperHighFreq = 5000;  //5000
        this.dropperLowFreq = 3000; //3000;
        // this.game.time.events.remove(this.kamikazeTimer);
        // this.kamikazeTimer = this.game.time.events.loop(this.kamikazeFreq, this.addKamikaze, this);
        this.kamikazeTimer.delay = this.kamikazeFreq;
        this.dropperHightimer.delay = this.dropperHighFreq;
        this.dropperLowtimer.delay = this.dropperHighFreq;

        break;
      case (10):
        this.kamikazeFreq = 6500;
        this.dropperHighFreq = 4775;  //5000
        this.dropperLowFreq = 2333; //3000;

        this.kamikazeTimer.delay = this.kamikazeFreq;
        this.dropperHightimer.delay = this.dropperHighFreq;
        this.dropperLowtimer.delay = this.dropperHighFreq;

        break;

      case (15):
        this.kamikazeFreq = 6000;
        this.dropperHighFreq = 3200;  //5000
        this.dropperLowFreq = 1998; //3000;

        this.kamikazeTimer.delay = this.kamikazeFreq;
        this.dropperHightimer.delay = this.dropperHighFreq;
        this.dropperLowtimer.delay = this.dropperHighFreq;

        break;

      case (30):
        this.kamikazeFreq = 4000;
        this.dropperHighFreq = 2500;  //5000
        this.dropperLowFreq = 1000; //3000;

        this.kamikazeTimer.delay = this.kamikazeFreq;
        this.dropperHightimer.delay = this.dropperHighFreq;
        this.dropperLowtimer.delay = this.dropperHighFreq;

        break;

      case (80):
        this.kamikazeFreq = 1000;
        this.dropperHighFreq = 2500;  //5000
        this.dropperLowFreq = 1000; //3000;

        this.kamikazeTimer.delay = this.kamikazeFreq;
        this.dropperHightimer.delay = this.dropperHighFreq;
        this.dropperLowtimer.delay = this.dropperHighFreq;

        break;
    }
  }

  playerDropperHitHandler(player, enemy){
    enemy.kill();
    //this.dropperLow.kill();
    if (this.player.ducking==false) {
      this.player.hit();
      this.livesText.setText("Lives: " + this.player.lives);
    }
  }

  kamikazeHitHandler(player, kamikaze){
    kamikaze.destroy();
    //this.dropperLow.kill();
    if (this.player.ducking==false) {
      this.player.hit();
      this.livesText.setText("Lives: " + this.player.lives);
    }
  }

  kamikazeGroundHitHandler(ground, kamikaze){
    kamikaze.kamikazeDestroy();
  }

  playerEggHitHandler(player, egg){
    if (egg.body.y < this.player.body.y) {
      egg.break();
      if (this.player.ducking==false) {
        this.player.hit();
        this.livesText.setText("Lives: " + this.player.lives);
      }
    }
  }

  playerPotionHitHandler(player, potion){
    this.player.powerUp();
    this.player.extraLife();
    this.livesText.setText("Lives: " + this.player.lives);
    potion.kill();
  }

  eggGroundHandler(ground, egg){
    egg.break();
  }

  addDropperLow(){
    let dropperLow;
    dropperLow = new Dropper(this.game, this.game.width+400,200);

    this.dropperLowGroup.add(dropperLow);
  }

  addKamikaze(){
    this.rooster = this.game.add.audio('rooster');
    this.rooster.play();
    
    let kamikaze;
    kamikaze = new Kamikaze(this.game, 560, 50);

    this.kamikazeGroup.add(kamikaze);
  }

  addDropperHigh(){
    let dropperHigh;
    dropperHigh = new Dropper(this.game, this.game.width+200,10);

    this.dropperHighGroup.add(dropperHigh);
  }

  addPotion(){
    let potion;
    potion = new Potion(this.game, this.game.width + 128/4,222);
    
    this.potionGroup.add(potion);
  }

  dropEgg(x,y){
    let egg;
    egg = new Egg(this.game, x, y);

    this.eggGroup.add(egg);
  }
  
  shutdown() {
    this.player.destroy();
    this.game.state.start('Dead');
    this.scoreSound.stop();
  }

  musicTime() {
    this.scoreSound = this.game.add.audio('back_sound');
    this.scoreSound.loopFull(0.6);
    return
  }

  countdown() {
    if(this.countdownImage){
      this.countdownImage.kill();
    }
    this.count--;

    this.countdownImage = this.game.add.sprite(this.game.width/2,150,'countdown');
    this.countdownImage.anchor.setTo(0.5, 0.5);
    this.countdownImage.frame = this.count;

    this.timerSound = this.game.add.audio('countdownSound');
    this.timerSound.play();

    if(this.count == -1){
      this.countdownImage.destroy();
      this.timerSound.stop();
      this.controls = true;
      this.goImage = this.game.add.sprite(this.game.width/2,150,'go');
      this.goImage.anchor.setTo(0.5, 0.5);
    }else if(this.count <= -2) {
      this.goImage.destroy();
      this.countdownImage.destroy();
      this.timerSound.stop();
    }
  }
}
