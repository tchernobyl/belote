
var belote = new Belote(beloteColors, beloteNumbers);
let game = new Game(belote, 500, 3, []);

function initGame(_game) {
  _game.gameFinished = false;
  _game.initCardAndPlayers();
  _game.distributeCards();
  _game.selectAtoutByPlayerRank(1, 'sp', 120);
  _game.selectAtoutByPlayerRank(3, 'sp', 130);
}


function runMainGame() {
  
  initGame(game);
  var _round = 1;
  let cartsLength = 0;
  var turn = 1;
  
  function simulateGame() {
    
    if (cartsLength < 33) {
      console.log("cartsLength",cartsLength)
      setTimeout(function() {
        cartsLength++;
         let result = game.playRandomCardByPlayerRank(turn);
        game.saveTrickByPlayerIdAndCardId(result.player, result.card);
        
        turn++;
        setTimeout(function() {
         
         
          if(game.finishTrick()){
            game.view.removeAllCard();
          }
        
          game.shuffleCards();
          game.distributeCards();
          game.passToNextTurn();
          _round++;
          
          if (turn > 4) {
            turn = 1;
    
    
          }
          simulateGame();
        },50)
        
     
    
      }, 50);
      

    }else {
      if (!game.gameFinished) {
        turn = 1;
        cartsLength = 0;
        simulateGame();
      } else {
        let winners = game.getWinnerTeam()
        if(winners){
          console.log('the winner team in the round ',game.rounds.listRound.length+1,
            ' :', winners.players[0].name,' and ', winners.players[1].name)
        }
        console.log(game.getWinnerTeam())
        game.finishRound();
        turn = 1;
        cartsLength = 0;
    
      }
    }
   
    
   
  }
  

  simulateGame();
  
  // play round 1;
  
}
