/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Boot = __webpack_require__(1);

	var _Boot2 = _interopRequireDefault(_Boot);

	var _Preload = __webpack_require__(2);

	var _Preload2 = _interopRequireDefault(_Preload);

	var _Menu = __webpack_require__(3);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Play = __webpack_require__(4);

	var _Play2 = _interopRequireDefault(_Play);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var game = undefined;

	var init = function init() {
	  game = new Phaser.Game(560, 272, Phaser.AUTO);
	  game.state.add('Boot', _Boot2.default, false);
	  game.state.add('Preload', _Preload2.default, false);
	  game.state.add('Menu', _Menu2.default, false);
	  game.state.add('Play', _Play2.default, false);
	  game.state.start('Boot');
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Boot = (function (_Phaser$State) {
	  _inherits(Boot, _Phaser$State);

	  function Boot() {
	    _classCallCheck(this, Boot);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Boot).apply(this, arguments));
	  }

	  _createClass(Boot, [{
	    key: 'preload',
	    value: function preload() {
	      this.load.image('preloader', 'assets/preloader.gif');
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      this.game.state.start('Preload');
	    }
	  }]);

	  return Boot;
	})(Phaser.State);

	exports.default = Boot;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preload = (function (_Phaser$State) {
	  _inherits(Preload, _Phaser$State);

	  function Preload() {
	    _classCallCheck(this, Preload);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).apply(this, arguments));
	  }

	  _createClass(Preload, [{
	    key: 'preload',
	    value: function preload() {

	      this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
	      this.asset.anchor.setTo(0.5, 0.5);

	      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

	      //Inladen van de spritesheets
	      this.load.spritesheet('background', 'assets/background.png', 560, 272, 8);
	      this.load.spritesheet('kamikaze', 'assets/kamikaze.png', 55, 33, 2);
	      this.load.spritesheet('player', 'assets/player.png', 55, 66);
	      this.load.spritesheet('egg', 'assets/egg.png', 30, 30);
	      this.load.spritesheet('dropper', 'assets/bird2.png', 36, 50);

	      //Inladen van de images
	      this.load.image('startButton', 'assets/start-button.png');
	      this.load.image('ground', 'assets/grond.png');
	      this.load.image('title', 'assets/title.png');
	      this.load.image('kamikaze_dead', 'assets/kamikaze_dead.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onLoadComplete',
	    value: function onLoadComplete() {
	      this.game.state.start('Menu');
	    }
	  }]);

	  return Preload;
	})(Phaser.State);

	exports.default = Preload;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = (function (_Phaser$State) {
	  _inherits(Menu, _Phaser$State);

	  function Menu() {
	    _classCallCheck(this, Menu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
	  }

	  _createClass(Menu, [{
	    key: 'create',
	    value: function create() {
	      //background instellen van de start menu + de animatie hiervan
	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.background.animations.add('move');
	      this.background.animations.play('move', 12, true);

	      this.title = this.game.add.sprite(this.game.width / 2, 80, 'title');
	      this.title.anchor.setTo(0.5, 0.5);

	      this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 50, 'startButton', this.startClick, this);
	      this.startButton.anchor.setTo(0.5, 0.5);
	    }
	  }, {
	    key: 'startClick',
	    value: function startClick() {
	      this.game.state.start('Play');
	    }
	  }]);

	  return Menu;
	})(Phaser.State);

	exports.default = Menu;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Ground = __webpack_require__(5);

	var _Ground2 = _interopRequireDefault(_Ground);

	var _Kamikaze = __webpack_require__(6);

	var _Kamikaze2 = _interopRequireDefault(_Kamikaze);

	var _Player = __webpack_require__(7);

	var _Player2 = _interopRequireDefault(_Player);

	var _Egg = __webpack_require__(8);

	var _Egg2 = _interopRequireDefault(_Egg);

	var _Dropper = __webpack_require__(9);

	var _Dropper2 = _interopRequireDefault(_Dropper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var cursors = undefined;

	var Play = (function (_Phaser$State) {
	  _inherits(Play, _Phaser$State);

	  function Play() {
	    _classCallCheck(this, Play);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
	  }

	  _createClass(Play, [{
	    key: 'create',
	    value: function create() {
	      console.log('Play');

	      cursors = this.game.input.keyboard.createCursorKeys();
	      //background instellen van de start menu + de animatie hiervan
	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.background.animations.add('move');
	      this.background.animations.play('move', 12, true);

	      //ground plaatsen en laten bewegen
	      this.ground = new _Ground2.default(this.game, 0, 245, 560, 44);
	      this.game.add.existing(this.ground);

	      //testje om kamikaze op het scherm te laten komen
	      this.kamikaze = new _Kamikaze2.default(this.game, 560, 50);
	      this.game.add.existing(this.kamikaze);

	      //player toevoegen
	      this.player = new _Player2.default(this.game, 100, 100);
	      this.game.add.existing(this.player);

	      //ei test
	      this.egg = new _Egg2.default(this.game, 300, 100);
	      this.game.add.existing(this.egg);

	      //dropper test boven
	      this.dropper = new _Dropper2.default(this.game, this.game.width + 200, 10);
	      this.game.add.existing(this.dropper);

	      //dropper test jumpobstakel
	      this.dropper = new _Dropper2.default(this.game, this.game.width + 400, 185);
	      this.game.add.existing(this.dropper);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.game.physics.arcade.collide(this.kamikaze, this.ground, this.kamikaze.kamikazeDestroy, null, this);
	      this.game.physics.arcade.collide(this.player, this.ground);
	      this.game.physics.arcade.collide(this.ground, this.egg, this.egg.break, null, this);

	      this.player.body.velocity.x = 0;
	      if (!cursors.down.isDown) {
	        if (this.player.body.position.x > 0 && cursors.left.isDown) {
	          this.player.body.velocity.x = -150;
	        } else if (this.player.body.position.x < 150 && cursors.right.isDown) {
	          this.player.body.velocity.x = 150;
	        }
	      };

	      //  player laten springen als hij de grond raakt
	      if (cursors.up.isDown && this.player.body.touching.down) {
	        this.player.jump();
	      }
	      // player laten bukken als hij de grond raakt
	      if (cursors.down.isDown && this.player.body.touching.down) {
	        this.player.duck();
	      }
	      console.log(this.player.ducking);
	    }

	    // groundHitHandler() {
	    //   this.groundHitSound.play();
	    //   this.deathHandler();
	    // }

	  }, {
	    key: 'shutdown',
	    value: function shutdown() {
	      // this.bird.destroy();

	    }
	  }]);

	  return Play;
	})(Phaser.State);

	exports.default = Play;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ground = (function (_Phaser$TileSprite) {
	  _inherits(Ground, _Phaser$TileSprite);

	  function Ground(game, x, y, width, height) {
	    _classCallCheck(this, Ground);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ground).call(this, game, x, y, width, height, 'ground'));

	    _this.autoScroll(-200, 0);

	    _this.game.physics.arcade.enableBody(_this);

	    _this.body.allowGravity = false;
	    _this.body.immovable = true;
	    return _this;
	  }

	  return Ground;
	})(Phaser.TileSprite);

	exports.default = Ground;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Kamikaze = (function (_Phaser$Sprite) {
	  _inherits(Kamikaze, _Phaser$Sprite);

	  function Kamikaze(game, x, y, frame) {
	    _classCallCheck(this, Kamikaze);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Kamikaze).call(this, game, x, y, 'kamikaze', frame));

	    _this.anchor.setTo(0.5, 0.5);
	    _this.animations.add('flap');
	    _this.animations.play('flap', 5, true);

	    _this.game.physics.arcade.enableBody(_this);
	    return _this;
	  }

	  _createClass(Kamikaze, [{
	    key: 'update',
	    value: function update() {
	      this.body.velocity.x = -200;
	      this.body.velocity.y = 150;
	      this.angle = -20;
	    }
	  }, {
	    key: 'kamikazeDestroy',
	    value: function kamikazeDestroy() {
	      var x = this.kamikaze.x - 40;
	      var y = this.kamikaze.y - 20;
	      this.kamikaze.destroy();

	      this.kamikaze_dead = this.game.add.sprite(x, y, 'kamikaze_dead');
	      this.game.physics.arcade.enableBody(this.kamikaze_dead);
	      this.kamikaze_dead.body.velocity.x = -200;
	    }
	  }]);

	  return Kamikaze;
	})(Phaser.Sprite);

	exports.default = Kamikaze;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = (function (_Phaser$Sprite) {
	  _inherits(Player, _Phaser$Sprite);

	  function Player(game, x, y, frame) {
	    _classCallCheck(this, Player);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'player', frame));

	    _this.anchor.setTo(0.5, 0.5);
	    _this.animations.add('run', [1, 2, 3, 4]);
	    _this.animations.play('run', 6, true);

	    _this.game.physics.arcade.enableBody(_this);
	    _this.body.gravity.y = 400;

	    _this.ducking = false;
	    return _this;
	  }

	  _createClass(Player, [{
	    key: 'update',
	    value: function update() {
	      if (!this.body.touching.down) {
	        this.frame = 4;
	      } else {
	        this.animations.play('run', 6, true);
	      }
	      this.ducking = false;
	    }
	  }, {
	    key: 'jump',
	    value: function jump() {
	      // this.flapSound.play();
	      this.body.velocity.y = -200;
	    }
	  }, {
	    key: 'duck',
	    value: function duck() {
	      //bukken: controls uitschakelen, traag wegglijden
	      this.frame = 5;
	      this.ducking = true;
	      if (this.body.position.x > 0) {
	        this.body.position.x -= 1;
	      };
	    }
	  }]);

	  return Player;
	})(Phaser.Sprite);

	exports.default = Player;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Egg = (function (_Phaser$Sprite) {
	  _inherits(Egg, _Phaser$Sprite);

	  function Egg(game, x, y, frame) {
	    _classCallCheck(this, Egg);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Egg).call(this, game, x, y, 'egg', frame));

	    _this.anchor.setTo(0.5, 0.5);

	    _this.animations.add('break', [1, 2, 3, 4]);

	    _this.game.physics.arcade.enableBody(_this);
	    _this.body.gravity.y = 100;
	    _this.vermeerder = 1;

	    return _this;
	  }

	  _createClass(Egg, [{
	    key: 'update',
	    value: function update() {
	      this.vermeerder += 0.3;
	      //this.vermeerder*=1.5;
	      this.angle += this.vermeerder;
	      //console.log(this.y);
	    }
	  }, {
	    key: 'break',
	    value: function _break() {
	      this.egg.vermeerder = 0;
	      var x = this.egg.x;
	      var y = this.egg.y;

	      this.egg.animations.play('break', 10, false, true);

	      // this.egg.destroy();

	      // this.egg_dead = this.game.add.sprite(x,y,'egg');
	      // this.egg_dead.animations.add('break', [1,2,3,4]);
	      // this.egg_dead.animations.play('break', 35, false);

	      // this.game.physics.arcade.enableBody(this.egg_dead);
	      // this.egg_dead.body.velocity.x=-200;

	      console.log('boem');
	    }
	  }]);

	  return Egg;
	})(Phaser.Sprite);

	exports.default = Egg;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dropper = (function (_Phaser$Sprite) {
	   _inherits(Dropper, _Phaser$Sprite);

	   function Dropper(game, x, y, frame) {
	      _classCallCheck(this, Dropper);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropper).call(this, game, x, y, 'dropper', frame));

	      _this.animations.add('flap');
	      _this.animations.play('flap', 10, true);

	      _this.game.physics.arcade.enableBody(_this);
	      return _this;
	   }

	   _createClass(Dropper, [{
	      key: 'update',
	      value: function update() {
	         this.body.velocity.x = -200;
	      }
	   }]);

	   return Dropper;
	})(Phaser.Sprite);

	exports.default = Dropper;

/***/ }
/******/ ]);