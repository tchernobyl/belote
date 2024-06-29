
var previousGame = [];
var belote = new Belote(beloteColors, beloteNumbers);

let game = new Game(belote, 2000, 3, []);
var turn = 1;
var _total = 0
var _logs =[]
function runMainGame (){

  initGame(game)
  
  var _round = 1;
  
  for (var t = 0; t < 100; t++) {
    if (!game.gameFinished) {
      simulateGame();
    } else {
      let winners = game.getWinnerTeam()
      console.log('the winner team in the round ',game.rounds.listRound.length+1,' :', winners.players[0].name,' and ', winners.players[1].name)
      game.finishRound();
      
      if (game.rounds.listRound.length < game.totalRound) {
        
        initGame(game)
        
        simulateGame();
      } else {
        testGame()
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
  
    for (var i = 0; i < 32; i++) {
      if (!game.gameFinished) {
        // game.playRandomCardByPlayerRank(turn);
        let result = game.playRandomCardByPlayerRank(turn);
        game.saveTrickByPlayerIdAndCardId(result.player, result.card);
  
        if(game.finishTrick()){
          game.view.removeAllCard();
        }
  
      }
      turn++;
      if (turn > 4) {
        turn = 1;
      }
    }
    turn++
    if (turn > 4) {
      turn = 1;
    }

    game.shuffleCards();
    game.distributeCards();
    game.passToNextTurn();
    _round++;
  }
  
  
}

function testGame(){
  
  for (var t =0;t<game.rounds.listRound.length;t++) {
    
    var round = game.rounds.listRound[t];
    for (var i=0; i<round.listTricksInRound.length;i++ ){
      let trick = round.listTricksInRound[i]
      
      for(var j =0;j< trick.listOfPlayedCard.length;j++){
        var cards = trick.listOfPlayedCard[j];
        for (var b =0 ; b< cards.listCards.length;b++){
          var card = cards.listCards[b];
          _total++
          var resume = {
            cardTag : card.card.cardTag+' '+card.card.color,
            isAtout: card.card.isAtout(card.card.colorName),
            player: card.player.name,
            playerRank: card.player.rank,
            playerTeam : card.player.team
          }
          _logs.push(resume)
          console.log( "card name : "+card.card.name+" player name ", card.player.name)
        }
      }
    }
    
  }
  console.log("_logs",_logs)
}