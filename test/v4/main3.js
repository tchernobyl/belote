var belote = new Belote(beloteColors, beloteNumbers);
let game = new Game(belote, 500, 3, []);
var count = 1;






function scenario1() {
  game = initGame(game);
  game.selectAtoutByPlayerRank(1, 'sp', 90);
  game.selectAtoutByPlayerRank(2, '');
  game.selectAtoutByPlayerRank(3, 'sp', 120);
  game.selectAtoutByPlayerRank(4, '', null);
  game.selectAtoutByPlayerRank(1, '', null);
  game.selectAtoutByPlayerRank(2, '', null);
  console.log('getSelectedAtout =>', game.getSelectedAtout());
  
  for (var t = 1; t < 15; t++) {
    playManche(t);
  }
  
}

function playManche(manche) {
  playTrick(1, game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  playTrick(game.getRandomTurnOfPlayer(), game);
  
  game.shuffleCards();
  game.distributeCards();
  game.passToNextTurn();
}



function playTrick(firstPlayerRank, _game) {
  
  for (var i = 0; i < 4; i++) {
    let result = game.playRandomCardByPlayerRank(firstPlayerRank);
    _game.saveTrickByPlayerIdAndCardId(result.player, result.card);
    firstPlayerRank++;
    if (firstPlayerRank > 4) {
      firstPlayerRank = 1;
    }
  }
  _game.finishTrick();
  
}



function initGame(_game) {
  _game.gameFinished = false;
  _game.initCardAndPlayers();
  _game.distributeCards();
  return _game;
}


var _logs2 = [];

function testScenario1(_game) {
  var _round = 0;
  for (var t = 0; t < _game.round.listTricksInRound.length; t++) {
    var trick = _game.round.listTricksInRound[t];
    
    for (var o = 0; o < trick.listOfPlayedCard.length; o++) {
      var playedCard = trick.listOfPlayedCard[o];
      for (var i = 0; i < playedCard.listCards.length; i++) {
        var card = playedCard.listCards[i];
        
        console.log(
          'player ' + card.player._id + ' : ' + card.player.name + ' in team ' +
          card.player.team +
          ' play card ' + card.card.name + ' is atout : ' +
          card.card.isAtout(game.getSelectedAtout().atout.colorName));
        _round++;
        if (_round === 4 || _round === 8 || _round === 12 || _round === 16 ||
          _round === 20
          || _round === 24 || _round === 28) {
          console.log('*******');
        }
        if (_round === 32) {
          _round = 0;
          console.log('------------------');
          console.log('------------------\n\n\n');
        }
        
      }
    }
    
  }
  console.log(_round);
  
}