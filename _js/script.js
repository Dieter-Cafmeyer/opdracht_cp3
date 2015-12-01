import Boot from './classes/states/Boot';
import Preload from './classes/states/Preload';
import Menu from './classes/states/Menu';
import Play from './classes/states/Play';

let game;

const init = () => {
  game = new Phaser.Game(560, 272, Phaser.AUTO);
  game.state.add('Boot', Boot, false);
  game.state.add('Preload', Preload, false);
  game.state.add('Menu', Menu, false);
  game.state.add('Play', Play, false);
  game.state.start('Boot');
};

init();
