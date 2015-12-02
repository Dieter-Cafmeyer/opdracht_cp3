import Ground from '../objects/Ground.js';
import Kamikaze from '../objects/Kamikaze.js';
import Player from '../objects/Player.js';
import Egg from '../objects/Egg.js';
import Dropper from '../objects/Dropper.js';

let cursors;

export default class Play extends Phaser.State {
  create() {
    cursors = this.game.input.keyboard.createCursorKeys();
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
    this.egg = new Egg(this.game, 300,100);
    this.game.add.existing(this.egg);

    //dropper test boven
    this.dropper = new Dropper(this.game, this.game.width+200,10);
    this.game.add.existing(this.dropper);

    //dropper test jumpobstakel
    this.dropper = new Dropper(this.game, this.game.width+400,185);
    this.game.add.existing(this.dropper);

  }
  update() {
    this.game.physics.arcade.collide(this.kamikaze, this.ground, this.kamikaze.kamikazeDestroy, null, this);
    this.game.physics.arcade.collide(this.player, this.ground);
    this.game.physics.arcade.collide(this.ground, this.egg, this.egg.break, null, this);

    this.player.body.velocity.x=0;
    if (!cursors.down.isDown) {
        if (this.player.body.position.x > 0 && cursors.left.isDown)
          {
            this.player.body.velocity.x = -150;
          }
        else if (this.player.body.position.x < 150 && cursors.right.isDown)
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

  
  // groundHitHandler() {
  //   this.groundHitSound.play();
  //   this.deathHandler();
  // }
  shutdown() {
    // this.bird.destroy();
    
  }
}
