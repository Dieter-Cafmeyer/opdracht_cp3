import Ground from '../objects/Ground.js';
import Kamikaze from '../objects/Kamikaze.js';
import Player from '../objects/Player.js';
import Egg from '../objects/Egg.js';
import Dropper from '../objects/Dropper.js';

let cursors;
let x = 0;
export default class Play extends Phaser.State {
  create() {
    cursors = this.game.input.keyboard.createCursorKeys();

    this.game.score = 0;

    //background instellen van de start menu + de animatie hiervan
    this.background = this.game.add.sprite(0,0,'background');
    this.background.animations.add('move');
    this.background.animations.play('move', 12, true);

    //ground plaatsen en laten bewegen
    this.ground = new Ground(this.game, 0, 245, 560, 44);
    this.game.add.existing(this.ground);

    //testje om kamikaze op het scherm te laten komen
    this.kamikaze = new Kamikaze(this.game, 560, 50);
    this.game.add.existing(this.kamikaze);

    //player toevoegen
    this.player = new Player(this.game, 100,100);
    this.game.add.existing(this.player);

    //ei test
    // this.egg = new Egg(this.game, 300,100);
    // this.game.add.existing(this.egg);

    //dropper test boven
    // this.dropper = new Dropper(this.game, this.game.width+200,10);
    // this.game.add.existing(this.dropper);

    //dropper test jumpobstakel
    // this.dropperLow = new Dropper(this.game, this.game.width+400,200);
    // this.game.add.existing(this.dropperLow);

    this.eggGroup = this.game.add.group();

    this.dropperHighGroup = this.game.add.group();
    this.dropperHightimer = this.game.time.events.loop(5000, this.addDropperHigh, this);

    this.dropperLowGroup = this.game.add.group();
    this.dropperLowtimer = this.game.time.events.loop(1000, this.addDropperLow, this);


    this.livesText = this.game.add.text(450, 0, "Lives: " + this.player.lives);



  }
  update() {
    this.game.physics.arcade.collide(this.kamikaze, this.ground, this.kamikaze.kamikazeDestroy, null, this);
    this.game.physics.arcade.collide(this.player, this.ground);
    // this.game.physics.arcade.collide(this.ground, this.egg, this.egg.break, null, this);
    //this.game.physics.arcade.collide(this.player, this.dropperLow, this.playerDropperHitHandler, null, this);

    this.game.physics.arcade.collide(this.player, this.dropperLowGroup, this.playerDropperHitHandler, null, this);
    this.game.physics.arcade.collide(this.player, this.eggGroup, this.playerEggHitHandler, null,this);
    this.game.physics.arcade.collide(this.ground, this.eggGroup, this.eggGroundHandler, null, this);
    
    this.scoreHandler();

    if (this.player.lives < 0) {
      this.game.state.start('Play');
    };


    
      // let aantal = 0;

      this.dropperHighGroup.forEach(dropper =>{


        console.log(dropper.dropped);
        let spelerX = Math.floor(this.player.body.x);
        let vogelX = Math.floor(dropper.body.x);

        console.log("speler: " + spelerX + " vogel: " + vogelX);

        if (vogelX < spelerX+3 && vogelX > spelerX-3) {
          console.log('1 eitje aub');
          this.dropEgg(dropper.body.x,dropper.body.y);
        };

        if (dropper.body.x < this.player.body.x) {
          dropper.dropped=true;
        };

        // this.eiTeller=1;
        // // console.log(dropper.body.x);
        // // console.log(this.player.body.x);
        // // aantal+=1;
        // // console.log(aantal);

        // // console.log('vogel: ' + dropper.body.x + 'Player: ' + this.player.body.x);
        // // if (dropper.body.x > this.player.body.x + 10 && dropper.body.x < this.player.body.x - 10) {
        // //   console.log('BOVEN SPELER');
        // // };
        // if ((dropper.body.x < this.player.body.x) && this.dropped==false) {
        //   if (this.eiTeller==1) {
        //       this.dropped=true;
        //     console.log('maak ei');
        //     this.dropEgg(dropper.body.x,dropper.body.y);
        //   };
        //   this.eiTeller-=1;
        //   if (this.eiTeller < 0) {
        //     this.eiTeller=0;
        //   };
          
        //  this.dropped=true;

            
        //   //console.log('eitje vallen');
        //   //console.log(dropped);
          
        // };

        // console.log(this.dropped);

      });
    
    





    this.player.body.velocity.x=0;
    if (!cursors.down.isDown) {
        if (this.player.body.position.x > 0 && cursors.left.isDown)
          {
            this.player.body.velocity.x = -150;
          }
        else if (this.player.body.position.x < 300 && cursors.right.isDown)
          {
            this.player.body.velocity.x = 150;
          }
    };
    
    //  player laten springen als hij de grond raakt
    if (cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.jump();
    }
    // player laten bukken als hij de grond raakt
    if (cursors.down.isDown && this.player.body.touching.down)
    {
        this.player.duck();
    }

  }


  scoreHandler(){
    
  }

  playerDropperHitHandler(player, enemy){
    enemy.kill();
    //this.dropperLow.kill();
    this.player.hit();
    this.livesText.setText("Lives: " + this.player.lives);
  }

  playerEggHitHandler(player, egg){
    if (egg.body.y > this.player.height-20) {
      egg.break();
      this.player.hit();
      this.livesText.setText("Lives: " + this.player.lives);
    };
  }

  eggGroundHandler(ground, egg){
    egg.break();
  }

  addDropperLow(){
    let dropperLow;
    dropperLow = new Dropper(this.game, this.game.width+400,200);

    this.dropperLowGroup.add(dropperLow);
  }

  addDropperHigh(){
    let dropperHigh;
    dropperHigh = new Dropper(this.game, this.game.width+200,10);

    this.dropperHighGroup.add(dropperHigh);


  }

  dropEgg(x,y){
    let egg;
    egg = new Egg(this.game, x, y);
    this.eggGroup.add(egg);

    
  }
  
  // groundHitHandler() {
  //   this.groundHitSound.play();
  //   this.deathHandler();
  // }
  shutdown() {
    // this.bird.destroy();
    
  }
}
