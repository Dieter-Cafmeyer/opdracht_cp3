export default class Dead extends Phaser.State {
  create() {
    this.loadItems();
  	this.game.stage.backgroundColor = '#db4c4c';

    this.title = this.game.add.sprite(this.game.width/2,30,'gameover');
    this.title.anchor.setTo(0.5,0.5);

    this.scoreText = this.game.add.text(20, 70, "Uw score: " + this.game.score);

    this.highscoreTitel = this.game.add.text(340, 70, "Highscores");

    this.startButton = this.game.add.button(100, 220, 'restartButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);

    //Form
    var form = document.getElementById('formulier');
    form.classList.remove('hidden');  

    var button = document.getElementById('submit');
    button.classList.remove('hidden');

    //var phaserJSON = this.game.cache.getJSON('json');

    form.addEventListener('submit', this.highScoreHandler);
  }

  startClick() {
    this.game.state.start('Play');
  }

  highScoreHandler(e){
    e.preventDefault();
    var button = document.getElementById('submit');
    button.classList.add('hidden');

  }

  loadItems(){
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onload = () => {
      let sorted = req.response.sort(function(a, b){
        return parseFloat(b.score) - parseFloat(a.score);
      });

      let scoreEl = document.getElementById('highscores');
      let resultHTML = '<ol>';
      
      for(var i=0; i<=4; i++){
        resultHTML+= `<li>${sorted[i].name}: <b>${sorted[i].score}</b></li>`;
      }
      
      resultHTML += '</ol>';
      scoreEl.innerHTML = resultHTML;
    };

    let url = '../../../assets/test.json';
    req.open('get', url, true);
    req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
    req.send();
  }
}