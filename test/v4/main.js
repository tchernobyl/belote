var previousGame = [];
var belote = new Belote(beloteColors, beloteNumbers);

let game = new Game(belote, 2000, 3, []);
initGame(game)

var _round = 1;

for (var t = 0; t < 100; t++) {
  if (!game.gameFinished) {
    simulateGame();
  } else {
    
   
    let getScoreByTeam = game.getScoreByTeam()
    // console.log('getScoreByTeam', getScoreByTeam);
    let winners = game.getWinnerTeam()
    // console.log('getWinnerTeam', winners)
    console.log('the winner team in the round ',game.rounds.listRound.length+1,' :', winners.players[0].name,' and ', winners.players[1].name)
    game.finishRound();
    
    if (game.rounds.listRound.length < game.totalRound) {
      
      initGame(game)
      
      simulateGame();
    } else {
      break;
    }
  }
  
}

function initGame(_game){
  _game.gameFinished = false;
  _game.initCardAndPlayers();
  _game.distributeCards();
  _game.selectAtoutByPlayerRank(1, 'sp', 120);
  _game.selectAtoutByPlayerRank(3, 'sp', 130);
}

function simulateGame() {
  var turn = 1;
  for (var i = 0; i < 32; i++) {
    if (!game.gameFinished) {
      game.playRandomCardByPlayerRank(turn);
    }
    turn++;
    if (turn > 4) {
      turn = 1;
    }
  }
  game.getNotPlayedCardsByPlayerByRank(1);
  game.getNotPlayedCardsByPlayerByRank(2);
  game.getNotPlayedCardsByPlayerByRank(3);
  game.getNotPlayedCardsByPlayerByRank(3);
  game.shuffleCards();
  game.distributeCards();
  game.passToNextTurn();
  _round++;
}

