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

	      //Inladen van de images
	      this.load.image('startButton', 'assets/start-button.png');
	      this.load.image('ground', 'assets/ground.png');
	      this.load.image('title', 'assets/title.png');
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

	var _Ground = __webpack_require__(6);

	var _Ground2 = _interopRequireDefault(_Ground);

	var _Kamikaze = __webpack_require__(5);

	var _Kamikaze2 = _interopRequireDefault(_Kamikaze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	      //background instellen van de start menu + de animatie hiervan
	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.background.animations.add('move');
	      this.background.animations.play('move', 12, true);

	      //ground plaatsen en laten bewegen
	      this.ground = new _Ground2.default(this.game, 0, 230, 560, 44);
	      this.game.add.existing(this.ground);

	      //testje om kamikaze op het scherm te laten komen
	      this.kamikaze = new _Kamikaze2.default(this.game, 560, 50);
	      this.game.add.existing(this.kamikaze);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.game.physics.arcade.collide(this.kamikaze, this.ground, this.kamikazeDestroy, null, this);
	    }
	  }, {
	    key: 'kamikazeDestroy',
	    value: function kamikazeDestroy() {
	      this.kamikaze.destroy();
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
	   }]);

	   return Kamikaze;
	})(Phaser.Sprite);

	exports.default = Kamikaze;

/***/ },
/* 6 */
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

/***/ }
/******/ ]);