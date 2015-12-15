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

	var _Dead = __webpack_require__(11);

	var _Dead2 = _interopRequireDefault(_Dead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var game = undefined;

	var init = function init() {
	  game = new Phaser.Game(560, 272, Phaser.AUTO);
	  game.state.add('Boot', _Boot2.default, false);
	  game.state.add('Preload', _Preload2.default, false);
	  game.state.add('Menu', _Menu2.default, false);
	  game.state.add('Play', _Play2.default, false);
	  game.state.add('Dead', _Dead2.default, false);
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
	      this.load.spritesheet('kamikaze', 'assets/kamikaze.png', 60, 33);
	      this.load.spritesheet('player', 'assets/player.png', 55, 66);
	      this.load.spritesheet('egg', 'assets/egg.png', 30, 30);
	      this.load.spritesheet('dropper', 'assets/bird2.png', 36, 50);
	      this.load.spritesheet('potion', 'assets/potion.png', 128 / 4, 36);
	      this.load.spritesheet('countdown', 'assets/countdown.png', 48, 72);

	      //this.load.json('json', 'assets/test.json');

	      //Inladen van de images
	      this.load.image('startButton', 'assets/start-button.png');
	      this.load.image('ground', 'assets/grond.png');
	      this.load.image('title', 'assets/title.png');
	      this.load.image('gameover', 'assets/gameover.png');
	      this.load.image('restartButton', 'assets/replay.png');
	      this.load.image('go', 'assets/go.png');
	      this.load.image('flu', 'assets/flu.jpg');
	    }
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
	      this.background = this.game.add.image(0, 0, 'flu');
	      this.background.animations.add('move');
	      this.background.animations.play('move', 12, true);

	      this.title = this.game.add.sprite(this.game.width / 2, 80, 'title');
	      this.title.anchor.setTo(0.5, 0.5);

	      this.playimg = this.game.add.sprite(20, 10, 'player');
	      this.playimgHaz = this.game.add.sprite(20, 80, 'player');
	      this.playimgHaz.frame = 5;
	      this.birdimg = this.game.add.sprite(this.game.width * (3 / 4) + 50, 20, 'kamikaze');
	      this.birdimg2 = this.game.add.sprite(this.game.width * (3 / 4) + 60, 40, 'dropper');
	      this.eggimg = this.game.add.sprite(this.game.width * (3 / 4) + 65, 105, 'egg');

	      this.style = { font: "15px Arial", fill: "#ffffff" };

	      this.graphics = this.game.add.graphics(0, 0);
	      this.graphics.beginFill(0xFF0000, 0.5);
	      this.graphics.drawRect(120, 130, 330, 120);
	      //text
	      this.game.add.text(25, 150, 'You!', { fill: "#ffffff" });
	      this.game.add.text(140, 135, 'Use arrow keys to avoid the birds and jump.', this.style);
	      this.game.add.text(130, 225, 'Down arrow: protection in exchange for points', this.style);

	      this.game.add.text(460, 150, 'Avoid!', { fill: "#ffffff" });

	      this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 50, 'startButton', this.startClick, this);
	      this.startButton.anchor.setTo(0.5, 0.5);
	    }
	  }, {
	    key: 'startClick',
	    value: function startClick() {
	      this.game.state.start('Dead');
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

	var _Potion = __webpack_require__(10);

	var _Potion2 = _interopRequireDefault(_Potion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var cursors = undefined;
	var x = 0;

	var Play = (function (_Phaser$State) {
	  _inherits(Play, _Phaser$State);

	  function Play() {
	    _classCallCheck(this, Play);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
	  }

	  _createClass(Play, [{
	    key: 'create',
	    value: function create() {
	      //form
	      var form = document.getElementById('formulier');
	      form.classList.add('hidden');

	      var button = document.getElementById('submit');
	      button.classList.add('hidden');

	      //game
	      cursors = this.game.input.keyboard.createCursorKeys();

	      this.game.score = 0;
	      this.controls = false;

	      //background instellen van de start menu + de animatie hiervan
	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.background.animations.add('move');
	      this.background.animations.play('move', 12, true);

	      //ground plaatsen en laten bewegen
	      this.ground = new _Ground2.default(this.game, 0, 245, 560, 44);
	      this.game.add.existing(this.ground);

	      //player toevoegen
	      this.player = new _Player2.default(this.game, 100, 100);
	      this.game.add.existing(this.player);

	      this.eggGroup = this.game.add.group();

	      this.kamikazeFreq = 9000;
	      this.dropperHighFreq = 7000;
	      this.dropperLowFreq = 4000;

	      this.kamikazeGroup = this.game.add.group();
	      this.kamikazeTimer = this.game.time.events.loop(this.kamikazeFreq, this.addKamikaze, this);

	      this.dropperHighGroup = this.game.add.group();
	      this.dropperHightimer = this.game.time.events.loop(this.dropperHighFreq, this.addDropperHigh, this);

	      this.dropperLowGroup = this.game.add.group();
	      this.dropperLowtimer = this.game.time.events.loop(this.dropperLowFreq, this.addDropperLow, this);

	      this.potionGroup = this.game.add.group();
	      this.potionTimer = this.game.time.events.loop(25000, this.addPotion, this);

	      this.livesText = this.game.add.text(450, 0, "Lives: " + this.player.lives);
	      this.scoreText = this.game.add.text(0, 0, "Score: " + this.game.score);

	      this.count = 3;

	      this.countdownTimer = this.game.time.events.loop(1000, this.countdown, this);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;

	      this.game.physics.arcade.collide(this.kamikazeGroup, this.ground, this.kamikazeGroundHitHandler, null, this);
	      this.game.physics.arcade.collide(this.player, this.ground);

	      this.game.physics.arcade.collide(this.player, this.dropperLowGroup, this.playerDropperHitHandler, null, this);
	      this.game.physics.arcade.collide(this.player, this.kamikazeGroup, this.kamikazeHitHandler, null, this);
	      this.game.physics.arcade.collide(this.player, this.eggGroup, this.playerEggHitHandler, null, this);
	      this.game.physics.arcade.collide(this.ground, this.eggGroup, this.eggGroundHandler, null, this);
	      this.game.physics.arcade.collide(this.player, this.potionGroup, this.playerPotionHitHandler, null, this);

	      this.scoreHandler();

	      if (this.player.lives <= 0) {
	        this.background.animations.stop();
	        this.ground.autoScroll(0, 0);
	        this.controls = false;
	        this.player.animations.stop();
	        this.game.time.events.add(Phaser.Timer.SECOND, this.shutdown, this);
	      };

	      this.dropperHighGroup.forEach(function (dropper) {

	        var spelerX = Math.floor(_this2.player.body.x);
	        var vogelX = Math.floor(dropper.body.x);
	        if (vogelX < spelerX + 2 && vogelX > spelerX - 2) {
	          _this2.dropEgg(dropper.body.x, dropper.body.y);
	        };
	        if (dropper.body.x < _this2.player.body.x) {
	          dropper.dropped = true;
	        };
	      });

	      if (this.controls) {
	        this.player.body.velocity.x = 0;
	        if (!cursors.down.isDown) {
	          if (this.player.body.position.x > 0 && cursors.left.isDown) {
	            this.player.body.velocity.x = -150;
	          } else if (this.player.body.position.x + this.player.width / 2 < this.game.world.width && cursors.right.isDown) {
	            this.player.body.velocity.x = 150;
	          }
	        };

	        //  player laten springen als hij de grond raakt
	        if (cursors.up.isDown && this.player.body.touching.down) {
	          this.player.jump();
	        }

	        // player laten bukken als hij de grond raakt
	        if (cursors.down.isDown && this.player.body.touching.down && this.game.score > 0) {
	          this.player.duck();
	        }
	      }
	      this.scoreHandler();
	    }
	  }, {
	    key: 'scoreHandler',
	    value: function scoreHandler() {
	      //bukken -score updaten
	      this.game.score = Math.floor(this.game.score);
	      this.scoreText.setText("Score: " + this.game.score);
	      switch (this.game.score) {
	        case 0:
	          break;
	        case 5:
	          this.kamikazeFreq = 7000;
	          this.dropperHighFreq = 5000; //5000
	          this.dropperLowFreq = 3000; //3000;
	          // this.game.time.events.remove(this.kamikazeTimer);
	          // this.kamikazeTimer = this.game.time.events.loop(this.kamikazeFreq, this.addKamikaze, this);
	          this.kamikazeTimer.delay = this.kamikazeFreq;
	          this.dropperHightimer.delay = this.dropperHighFreq;
	          this.dropperLowtimer.delay = this.dropperHighFreq;

	          break;
	        case 10:
	          this.kamikazeFreq = 5000;
	          this.dropperHighFreq = 4000; //5000
	          this.dropperLowFreq = 2000; //3000;

	          this.kamikazeTimer.delay = this.kamikazeFreq;
	          this.dropperHightimer.delay = this.dropperHighFreq;
	          this.dropperLowtimer.delay = this.dropperHighFreq;

	          break;

	        case 15:
	          this.kamikazeFreq = 3000;
	          this.dropperHighFreq = 3000; //5000
	          this.dropperLowFreq = 2000; //3000;

	          this.kamikazeTimer.delay = this.kamikazeFreq;
	          this.dropperHightimer.delay = this.dropperHighFreq;
	          this.dropperLowtimer.delay = this.dropperHighFreq;

	          break;
	      }
	    }
	  }, {
	    key: 'playerDropperHitHandler',
	    value: function playerDropperHitHandler(player, enemy) {
	      enemy.kill();
	      //this.dropperLow.kill();
	      if (this.player.ducking == false) {
	        this.player.hit();
	        this.livesText.setText("Lives: " + this.player.lives);
	      }
	    }
	  }, {
	    key: 'kamikazeHitHandler',
	    value: function kamikazeHitHandler(player, kamikaze) {
	      kamikaze.destroy();
	      //this.dropperLow.kill();
	      if (this.player.ducking == false) {
	        this.player.hit();
	        this.livesText.setText("Lives: " + this.player.lives);
	      }
	    }
	  }, {
	    key: 'kamikazeGroundHitHandler',
	    value: function kamikazeGroundHitHandler(ground, kamikaze) {
	      kamikaze.kamikazeDestroy();
	    }
	  }, {
	    key: 'playerEggHitHandler',
	    value: function playerEggHitHandler(player, egg) {
	      //damaged only if egg is still in flight
	      //broken eggs on the ground do not harm the player
	      if (egg.body.y < this.player.body.y) {
	        egg.break();
	        if (this.player.ducking == false) {
	          this.player.hit();
	          this.livesText.setText("Lives: " + this.player.lives);
	        }
	      }
	    }
	  }, {
	    key: 'playerPotionHitHandler',
	    value: function playerPotionHitHandler(player, potion) {
	      this.player.powerUp();
	      this.player.extraLife();
	      this.livesText.setText("Lives: " + this.player.lives);
	      potion.kill();
	    }
	  }, {
	    key: 'eggGroundHandler',
	    value: function eggGroundHandler(ground, egg) {
	      egg.break();
	    }
	  }, {
	    key: 'addDropperLow',
	    value: function addDropperLow() {
	      var dropperLow = undefined;
	      dropperLow = new _Dropper2.default(this.game, this.game.width + 400, 200);

	      this.dropperLowGroup.add(dropperLow);
	    }
	  }, {
	    key: 'addKamikaze',
	    value: function addKamikaze() {
	      var kamikaze = undefined;
	      kamikaze = new _Kamikaze2.default(this.game, 560, 50);

	      this.kamikazeGroup.add(kamikaze);
	    }
	  }, {
	    key: 'addDropperHigh',
	    value: function addDropperHigh() {
	      var dropperHigh = undefined;
	      dropperHigh = new _Dropper2.default(this.game, this.game.width + 200, 10);

	      this.dropperHighGroup.add(dropperHigh);
	    }
	  }, {
	    key: 'addPotion',
	    value: function addPotion() {
	      var potion = undefined;
	      potion = new _Potion2.default(this.game, this.game.width + 128 / 4, 222);

	      this.potionGroup.add(potion);
	    }
	  }, {
	    key: 'dropEgg',
	    value: function dropEgg(x, y) {
	      var egg = undefined;
	      egg = new _Egg2.default(this.game, x, y);

	      this.eggGroup.add(egg);
	    }
	  }, {
	    key: 'shutdown',
	    value: function shutdown() {
	      this.player.destroy();
	      this.game.state.start('Dead');
	    }
	  }, {
	    key: 'countdown',
	    value: function countdown() {
	      if (this.countdownImage) {
	        this.countdownImage.kill();
	      }
	      this.count--;

	      this.countdownImage = this.game.add.sprite(this.game.width / 2, 150, 'countdown');
	      this.countdownImage.anchor.setTo(0.5, 0.5);
	      this.countdownImage.frame = this.count;

	      if (this.count == -1) {
	        this.countdownImage.destroy();
	        this.controls = true;
	        this.goImage = this.game.add.sprite(this.game.width / 2, 150, 'go');
	        this.goImage.anchor.setTo(0.5, 0.5);
	      } else if (this.count <= -2) {
	        this.goImage.destroy();
	        this.countdownImage.destroy();
	      }
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

	    _this.anchor.setTo(0.5, 0.85);
	    _this.animations.add('flap', [0, 1]);
	    _this.animations.play('flap', 5, true);
	    _this.angle = _this.game.rnd.integerInRange(-15, -45);

	    _this.kamiX = _this.game.rnd.integerInRange(0, -200);
	    _this.isOnGround = false;

	    _this.game.physics.arcade.enableBody(_this);
	    _this.body.setSize(45, 20);
	    return _this;
	  }

	  _createClass(Kamikaze, [{
	    key: 'update',
	    value: function update() {
	      this.body.velocity.x = this.kamiX;
	      this.body.velocity.y = 100;

	      if (this.isOnGround == true) {
	        this.body.velocity.x = -200;
	      };

	      if (this.body.x < this.game.world.bounds.left - this.width) {
	        this.game.score += 1;
	        this.destroy();;
	      }
	    }
	  }, {
	    key: 'kamikazeDestroy',
	    value: function kamikazeDestroy() {
	      this.angle = 0;
	      this.frame = 2;
	      this.isOnGround = true;
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

	    _this.powered = false;

	    _this.lives = 3;

	    _this.anchor.setTo(0.5, 0.5);
	    _this.animations.add('run', [1, 2, 3, 4]);

	    _this.game.physics.arcade.enableBody(_this);
	    _this.body.gravity.y = 400;

	    //Hitregion: exclude arms
	    _this.body.setSize(40, 60);

	    _this.ducking = false;

	    _this.getal = 5;
	    return _this;
	  }

	  _createClass(Player, [{
	    key: 'update',
	    value: function update() {
	      if (this.powered == true) {
	        this.powerHandler();
	        if (this.lives < 0) {
	          this.lives = 1;
	        };
	      }

	      if (!this.body.touching.down) {
	        this.frame = 4;
	      } else {
	        this.animations.play('run', 9, true);
	      }
	      if (this.frame != 5) {
	        this.ducking = false;
	      }
	    }

	    //powerhandling

	  }, {
	    key: 'powerHandler',
	    value: function powerHandler() {
	      var color = '0x' + (Math.random() * 0xFFFFFF << 0).toString(16);
	      this.tint = color;
	    }
	  }, {
	    key: 'powerUp',
	    value: function powerUp() {
	      this.powered = true;
	      this.game.time.events.add(Phaser.Timer.SECOND * 5, this.powerDown, this);
	    }
	  }, {
	    key: 'hitHandler',
	    value: function hitHandler() {
	      this.powered = true;
	      this.tint = '0xdb4c4c';
	      this.game.time.events.add(Phaser.Timer.SECOND / 2, this.hitDown, this);
	    }
	  }, {
	    key: 'hitDown',
	    value: function hitDown() {
	      this.tint = 0xFFFFFF;
	      this.powered = false;
	    }
	  }, {
	    key: 'powerDown',
	    value: function powerDown() {
	      if (this.powered == true) {
	        this.powered = false;
	        this.tint = 0xFFFFFF;
	      };
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
	      this.scoreDown();
	    }
	  }, {
	    key: 'scoreDown',
	    value: function scoreDown() {
	      this.getal -= 0.2;
	      if (this.getal < 0) {
	        this.game.score -= 1;
	        this.getal = 5;
	      }
	      if (this.game.score < 0) {
	        this.game.score = 0;
	      }
	    }
	  }, {
	    key: 'hit',
	    value: function hit() {
	      if (this.powered == false) {
	        this.hitHandler();
	        this.lives -= 1;
	      } else {
	        return;
	      }
	    }
	  }, {
	    key: 'extraLife',
	    value: function extraLife() {
	      this.lives += 1;
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
	      this.angle += this.vermeerder;
	    }
	  }, {
	    key: 'break',
	    value: function _break() {
	      this.vermeerder = 0;
	      var x = this.x;
	      var y = this.y;

	      this.animations.play('break', 10, false, true);
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

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropper).call(this, game, x, y, 'dropper', frame)); //score nog meegeven?

	      _this.animations.add('flap');
	      _this.animations.play('flap', 10, true);
	      _this.game.physics.arcade.enableBody(_this);
	      _this.body.setSize(30, 10, 0, 25);
	      _this.dropped = false;
	      return _this;
	   }

	   _createClass(Dropper, [{
	      key: 'update',
	      value: function update() {
	         this.checkWorldBounds = true;
	         this.body.velocity.x = -200;

	         if (this.body.x < this.game.world.width) {
	            this.events.onOutOfBounds.add(this.handleScore, this);
	         };
	         if (this.body.x < this.game.world.bounds.left - this.width) {
	            this.game.score += 1;
	            this.destroy();
	         };
	      }
	   }, {
	      key: 'kill',
	      value: function kill() {
	         this.destroy();
	      }
	   }, {
	      key: 'handleScore',
	      value: function handleScore(score) {
	         this.game.score++;
	      }
	   }]);

	   return Dropper;
	})(Phaser.Sprite);

	exports.default = Dropper;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Potion = (function (_Phaser$Sprite) {
	  _inherits(Potion, _Phaser$Sprite);

	  function Potion(game, x, y, frame) {
	    _classCallCheck(this, Potion);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Potion).call(this, game, x, y, 'potion', frame));

	    _this.anchor.setTo(0.5, 0.31);
	    _this.animations.add('shine');
	    _this.game.physics.arcade.enableBody(_this);
	    _this.body.setSize(20, 20, -2.5, 10);
	    return _this;
	  }

	  _createClass(Potion, [{
	    key: 'update',
	    value: function update() {
	      this.animations.play('shine', 10);
	      this.body.velocity.x = -100;
	      this.checkWorldBounds = true;

	      if (this.body.x < this.game.world.bounds.left - this.width) {
	        this.destroy();
	      };
	      // this.render();
	    }
	  }, {
	    key: 'kill',
	    value: function kill() {
	      this.destroy();
	    }
	    // render(){
	    //   this.game.debug.bodyInfo(this, 32, 32);
	    //   this.game.debug.body(this);
	    // }

	  }]);

	  return Potion;
	})(Phaser.Sprite);

	exports.default = Potion;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dead = (function (_Phaser$State) {
	  _inherits(Dead, _Phaser$State);

	  function Dead() {
	    _classCallCheck(this, Dead);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dead).apply(this, arguments));
	  }

	  _createClass(Dead, [{
	    key: 'create',
	    value: function create() {
	      this.loadItems();
	      this.game.stage.backgroundColor = '#db4c4c';

	      this.title = this.game.add.sprite(this.game.width / 2, 30, 'gameover');
	      this.title.anchor.setTo(0.5, 0.5);

	      this.scoreText = this.game.add.text(20, 70, "Uw score: " + this.game.score);

	      this.highscoreTitel = this.game.add.text(340, 70, "Highscores");

	      this.startButton = this.game.add.button(100, 220, 'restartButton', this.startClick, this);
	      this.startButton.anchor.setTo(0.5, 0.5);

	      //Form
	      var form = document.getElementById('formulier');
	      form.classList.remove('hidden');

	      var button = document.getElementById('submit');
	      button.classList.remove('hidden');

	      //var phaserJSON = this.game.cache.getJSON('json');

	      form.addEventListener('submit', this.highScoreHandler);
	    }
	  }, {
	    key: 'startClick',
	    value: function startClick() {
	      this.game.state.start('Play');
	    }
	  }, {
	    key: 'highScoreHandler',
	    value: function highScoreHandler(e) {
	      e.preventDefault();
	      var button = document.getElementById('submit');
	      button.classList.add('hidden');
	    }
	  }, {
	    key: 'loadItems',
	    value: function loadItems() {
	      var req = new XMLHttpRequest();
	      req.responseType = 'json';
	      req.onload = function () {
	        var sorted = req.response.sort(function (a, b) {
	          return parseFloat(b.score) - parseFloat(a.score);
	        });

	        var scoreEl = document.getElementById('highscores');
	        var resultHTML = '<ol>';

	        for (var i = 0; i <= 4; i++) {
	          resultHTML += '<li>' + sorted[i].name + ': <b>' + sorted[i].score + '</b></li>';
	        }

	        resultHTML += '</ol>';
	        scoreEl.innerHTML = resultHTML;
	      };

	      var url = '../../../assets/test.json';
	      req.open('get', url, true);
	      req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
	      req.send();
	    }
	  }]);

	  return Dead;
	})(Phaser.State);

	exports.default = Dead;

/***/ }
/******/ ]);