export default class Preload extends Phaser.State {
  preload() {
    
  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Menu');
  }
}
