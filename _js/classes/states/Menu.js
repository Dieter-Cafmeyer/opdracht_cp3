export default class Menu extends Phaser.State {
  create() {
  	//background instellen van de start menu + de animatie hiervan
  	this.background = this.game.add.image(0,0,'background');
  	this.background.animations.add('move');
  	this.background.animations.play('move', 12, true);

    this.graphics = this.game.add.graphics(0, 0);
    this.graphics.beginFill(0xFF0000, 0.5);
    this.graphics.drawRect(0, 0, this.game.width, this.game.height);

    this.title = this.game.add.sprite(this.game.width/2,80,'title');
    this.title.anchor.setTo(0.5,0.5);

    this.playimg = this.game.add.sprite(20, 10, 'player');
    this.playimgHaz = this.game.add.sprite(20, 80, 'player');
    this.potionImg = this.game.add.sprite(40, 180, 'potion');
    this.playimgHaz.frame=5;
    this.birdimg = this.game.add.sprite(this.game.width*(3/4)+50,20, 'kamikaze');
    this.birdimg2 = this.game.add.sprite(this.game.width*(3/4)+60,40, 'dropper');
    this.eggimg = this.game.add.sprite(this.game.width*(3/4)+65, 105, 'egg');


    this.style = {font: "15px Arial", fill: "#ffffff"};
    this.redStyle = {font: "25px Arial", fill: "#ffffff"};

    //text
    this.game.add.text(25,150,'You!', {fill:"#ffffff"});
    this.game.add.text(23,220,'Power', this.redStyle);
    this.game.add.text(140,135,'Use arrow keys to avoid the birds and jump.',this.style);
    this.game.add.text(130,225,'Down arrow: protection in exchange for points', this.style);

    this.game.add.text(460,150,'Avoid!', {fill:"#ffffff"});

    this.startButton = this.game.add.button(this.game.width/2, this.game.height/2+50, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
  }
  startClick() {
    this.game.state.start('Play');
  }
}
