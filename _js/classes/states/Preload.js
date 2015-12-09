export default class Preload extends Phaser.State {
  preload() {

  	this.asset = this.add.sprite(this.game.width/2,this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    //Inladen van de spritesheets
    this.load.spritesheet('background', 'assets/background.png', 560, 272, 8);
	  this.load.spritesheet('kamikaze', 'assets/kamikaze.png', 60,33);
    this.load.spritesheet('player', 'assets/player.png', 55, 66);
    this.load.spritesheet('egg', 'assets/egg.png', 30,30);
    this.load.spritesheet('dropper', 'assets/bird2.png', 36,50);
    this.load.spritesheet('potion', 'assets/potion.png', 128/4,36)

	//Inladen van de images
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('ground', 'assets/grond.png');
    this.load.image('title', 'assets/title.png');

    this.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/Plasma.js');

  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Menu');
  }
}
