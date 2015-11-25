export default class Menu extends Phaser.State {
  create() {
    
  }
  startClick() {
    this.game.state.start('Play');
  }
}
