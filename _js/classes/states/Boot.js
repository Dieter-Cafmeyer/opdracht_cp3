export default class Boot extends Phaser.State {
  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }
  create() {
    this.game.state.start('Preload');
  }
}
