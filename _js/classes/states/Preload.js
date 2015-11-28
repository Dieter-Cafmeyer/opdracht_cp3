export default class Preload extends Phaser.State {
  preload() {

  	this.asset = this.add.sprite(this.game.width/2,this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.spritesheet('background', 'assets/background.png', 560, 272, 8);
    this.load.image('startButton', 'assets/start-button.png');


  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Menu');
  }
}
