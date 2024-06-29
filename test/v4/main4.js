var belote = new Belote(beloteColors, beloteNumbers);
let game = new Game(belote, 500, 3, []);

function playTrick(firstPlayerRank) {
  return new Promise(resolve => {
    setTimeout(() => {
      let result = game.playRandomCardByPlayerRank(firstPlayerRank);
      game.saveTrickByPlayerIdAndCardId(result.player, result.card);
      firstPlayerRank++;
      if (firstPlayerRank > 4) {
        firstPlayerRank = 1;
      }
      resolve(firstPlayerRank);
    }, 500); // Exemple de délai de 2 secondes
  });
}

function playTricks(player) {
  console.log("player newt ", player )
  return new Promise(resolve => {
    
    return playTrick(player, game).then((nextPlayer) => {
      
      return playTrick(nextPlayer, game).then((nextPlayer) => {
        
        return playTrick(nextPlayer, game).then((nextPlayer) => {
          
          return playTrick(nextPlayer, game).then((nextPlayer) => {
            
            var winner = game.calculateTrickAndGetWinner()
            
            setTimeout(() => {
              game.finishTrick();
              resolve(winner.rank);
            }, 500);
            
          });
        });
      });
    });
  });
}

async function playManche() {
  var nextPlayer = await playTricks(1);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  nextPlayer = await playTricks(nextPlayer);
  game.view.removeAllCard();
  console.log(4)
  return nextPlayer;
}

async function startAllManche() {
  await playManche();
  shuffleAndDistributeCards();
  await playManche();
  shuffleAndDistributeCards();
  await playManche();
  shuffleAndDistributeCards();
  await playManche();
  shuffleAndDistributeCards();
  await playManche();
  shuffleAndDistributeCards();
  await playManche();
  shuffleAndDistributeCards();
  
}

function playScenario() {
  game = initGame(game);
  game.selectAtoutByPlayerRank(1, 'sp', 90);
  game.selectAtoutByPlayerRank(2, '');
  game.selectAtoutByPlayerRank(3, 'sp', 120);
  game.selectAtoutByPlayerRank(4, '', null);
  game.selectAtoutByPlayerRank(1, '', null);
  game.selectAtoutByPlayerRank(2, '', null);
  console.log('getSelectedAtout =>', game.getSelectedAtout());
  startAllManche();
}

function shuffleAndDistributeCards() {
  game.shuffleCards();
  game.distributeCards();
  game.passToNextTurn();
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
        _logs2.push(
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
}