import Ground from '../objects/Ground.js';
import Kamikaze from '../objects/Kamikaze.js';

export default class Play extends Phaser.State {
  create() {
    console.log('Play');
    //background instellen van de start menu + de animatie hiervan
    this.background = this.game.add.sprite(0,0,'background');
    this.background.animations.add('move');
    this.background.animations.play('move', 12, true);

    //ground plaatsen en laten bewegen
    this.ground = new Ground(this.game, 0, 230, 560, 44);
    this.game.add.existing(this.ground);

    //testje om kamikaze op het scherm te laten komen
    this.kamikaze = new Kamikaze(this.game, 560, 50);
    this.game.add.existing(this.kamikaze);
  }
  update() {
    this.game.physics.arcade.collide(this.kamikaze, this.ground, this.kamikaze.kamikazeDestroy, null, this);
  }
  
  // groundHitHandler() {
  //   this.groundHitSound.play();
  //   this.deathHandler();
  // }
  shutdown() {
    // this.bird.destroy();
    
  }
}
