export default class Menu extends Phaser.State {
  create() {
  	//background instellen van de start menu + de animatie hiervan
  	this.background = this.game.add.sprite(0,0,'background');
  	this.background.animations.add('move');
  	this.background.animations.play('move', 12, true);

  	
  	//this.background = this.game.add.sprite(0, 0, 'background');

    this.startButton = this.game.add.button(this.game.width/2, this.game.height/2, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
  }
  startClick() {
    this.game.state.start('Play');
  }
}
