// import Bird from '../objects/Bird';

export default class Play extends Phaser.State {
  create() {
    console.log('Play');
    //background instellen van de start menu + de animatie hiervan
    this.background = this.game.add.sprite(0,0,'background');
    this.background.animations.add('move');
    this.background.animations.play('move', 12, true);

    //ground plaatsen en laten bewegen
    this.ground = this.game.add.tileSprite(0, 230, 560, 44, 'ground');
    this.ground.autoScroll(-200, 0);

  }
  update() {
    
  }
  
  // groundHitHandler() {
  //   this.groundHitSound.play();
  //   this.deathHandler();
  // }
  shutdown() {
    // this.bird.destroy();
    
  }
}
