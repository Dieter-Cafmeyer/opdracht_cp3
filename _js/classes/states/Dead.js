export default class Dead extends Phaser.State {
  create() {
  	this.game.stage.backgroundColor = '#c58b8b';

    this.title = this.game.add.sprite(this.game.width/2,30,'gameover');
    this.title.anchor.setTo(0.5,0.5);

    this.scoreText = this.game.add.text(20, 70, "Uw score: 200");

    this.highscoreTitel = this.game.add.text(340, 70, "Highscores");

    this.startButton = this.game.add.button(100, 220, 'restartButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
  }

  startClick() {
    this.game.state.start('Play');
  }
}