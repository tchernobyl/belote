class Game {
  
  constructor(belote, scoreToAchieve, totalRound, players) {
    this.scoreToAchieve = scoreToAchieve;
    this.totalRound = totalRound;
    this.belote = belote;
    this.gameFinished = false;
    this.view = new View();
    this.players = [];
    this.logs = {
      list: [],
    };
    if (players) {
      this.players = players;
    }
    this.initRoundsList();
    this.init();
  }
  
  init() {
    this.selectedAtoutList = [];
    this.selectedAtout = {};
    this.trick = new Trick(0);
    this.initTricksList();
    this.initRoundList();
    
  }
  
  addLogs(card, player) {
    
    this.logs.list.push({
      cardTag: card.cardTag + ' ' + card.color,
      isAtout: card.isAtout(card.colorName),
      player: player.name,
      playerRank: player.rank,
      playerTeam: player.team,
      
    });
    
    // this.logs.list.push({
    //   card : card,
    //   player : player,
    //   cardTag : card.cardTag
    // })
  }
  
  partialResetTricksList() {
    this.tricks.scoreByPlayer = {};
  }
  
  initTricksList(lastTotal) {
    let totalByPlayer = {};
    if (lastTotal) {
      totalByPlayer = lastTotal;
    }
    this.tricks = {
      listOfPlayedCard: [],
      score: 0,
      scoreTotalByPlayer: totalByPlayer,
      scoreTotalByTeam: {},
      scoreByPlayer: {},
      calculateScore: function() {
        
        for (let t = 0; t < this.listOfPlayedCard.length; t++) {
          let isLastCard = (t === 7);
          if (this.scoreByPlayer[this.listOfPlayedCard[t].ownerPlayer.id]) {
            this.scoreByPlayer[this.listOfPlayedCard[t].ownerPlayer.id].score +=
              this.listOfPlayedCard[t].score;
            this.score += this.listOfPlayedCard[t].score;
            if (isLastCard) {
              this.scoreByPlayer[this.listOfPlayedCard[t].ownerPlayer.id].score += 10;
              this.score += 10;
            }
            
          } else {
            let score = 0;
            if (isLastCard) {
              score = 10;
            }
            
            this.scoreByPlayer[this.listOfPlayedCard[t].ownerPlayer.id] = {
              score: this.listOfPlayedCard[t].score + score,
              player: this.listOfPlayedCard[t].ownerPlayer,
            };
            this.score += this.listOfPlayedCard[t].score;
            this.score += score;
          }
          
        }
        
        for (let player in this.scoreByPlayer) {
          if (this.scoreTotalByPlayer[player]) {
            this.scoreTotalByPlayer[player].score += this.scoreByPlayer[player].score;
          } else {
            this.scoreTotalByPlayer[player] = {
              score: this.scoreByPlayer[player].score,
              player: this.scoreByPlayer[player].player,
            };
          }
          
        }
        return this.scoreByPlayer;
      },
    };
  }
  
  initRoundsList() {
    this.rounds = {
      listRound: [],
      score: 0,
    };
  }
  
  calculateTotalScoreByTeam() {
    let scoreByTeam = {
      team1: {
        players: [],
        score: 0,
      },
      team2: {
        players: [],
        score: 0,
      },
    };
    if (this.round.listTricksInRound && this.round.listTricksInRound.length) {
      if (this.round.listTricksInRound[this.round.listTricksInRound.length -
      1].scoreTotalByPlayer) {
        
        for (let player in this.round.listTricksInRound[this.round.listTricksInRound.length -
        1].scoreTotalByPlayer) {
          let team = this.round.listTricksInRound[this.round.listTricksInRound.length -
          1].scoreTotalByPlayer[player].player.team;
          let score = this.round.listTricksInRound[this.round.listTricksInRound.length -
          1].scoreTotalByPlayer[player].score;
          if (team && team > 0) {
            scoreByTeam['team' + team].players.push(
              this.round.listTricksInRound[this.round.listTricksInRound.length -
              1].scoreTotalByPlayer[player].player);
            scoreByTeam['team' + team].score += score;
            scoreByTeam['team' + team].team = team;
          }
        }
        this.tricks.scoreTotalByTeam = scoreByTeam;
      }
    }
    var _score = 0;
    for (var team in this.tricks.scoreTotalByTeam) {
      if (this.tricks.scoreTotalByTeam[team].score > _score) {
        _score = this.tricks.scoreTotalByTeam[team].score;
      }
    }
    if (_score >= this.scoreToAchieve) {
      this.gameFinished = true;
    }
    
  }
  
  getScoreByTeam() {
    return this.tricks.scoreTotalByTeam;
  }
  
  getWinnerTeam() {
    let scoreByTeam = this.getScoreByTeam();
    let team;
    let score = 0;
    for (var _team in scoreByTeam) {
      if (scoreByTeam[_team].score > score) {
        team = scoreByTeam[_team];
        score = scoreByTeam[_team].score;
      }
    }
    return team;
  }
  
  finishRound() {
    this.rounds.listRound.push(this.round);
    this.init();
    return this.rounds.listRound;
  }
  
  initRoundList() {
    this.round = {
      listTricksInRound: [],
      score: 0,
      scoreByPlayer: {},
      scoreTotalByPlayer: {},
      scoreTotalByTeam: {},
      calculateScore: function() {
        
      },
    };
  }
  
  getRandomTurnOfPlayer() {
    const randomNumber = Math.random() * 4;
    const randomInteger = Math.floor(randomNumber);
    return randomInteger + 1;
  }
  
  getNextPlayerRank(player) {
    if (player < 4) {
      player++;
    } else {
      player = 1;
    }
    return player;
  }
  
  getPreviousPlayerRank(player) {
    if (player > 1) {
      player--;
    } else {
      player = 4;
    }
    return player;
  }
  
  addPlayer(player) {
    this.players.push(player);
  }
  
  initCardAndPlayers(playerMe) {
    this.players = [];
    let playerTurn = this.getRandomTurnOfPlayer();
    const names = ['ameur', 'amrouch', 'laamir', 'amirato'];
    let team = 1;
    for (let t = 0; t < 4; t++) {
      let player = new Player(genererIdentifiantUnique('player'), t + 1,
        names[t], true,
        playerTurn, team);
      this.addPlayer(player);
      playerTurn = this.getNextPlayerRank(playerTurn);
      team = team === 1 ? 2 : 1;
    }
    return this.players;
  }
  
  findPlayerByRank(rank) {
    return this.players.find(item => item.rank === rank);
  }
  
  findPlayerById(idPlayer) {
    return this.players.find(item => item.id === idPlayer);
  }
  
  getAllPlayers() {
    return this.players;
  }
  
  getFirstPlayer() {
    return this.findPlayerByRank(1);
  }
  
  passToNextTurn() {
    this.players.forEach(player => {
      player.setRank(this.getPreviousPlayerRank(player.getRank()));
    });
    return this.players;
  }
  
  selectAtoutByPlayerRank(playerRank, atout, announcement) {
    if (playerRank && atout && announcement) {
      let player = this.findPlayerByRank(playerRank);
      return this.selectAtout(player, atout, announcement);
    }
    return {};
  }
  
  selectAtoutByPlayerId(playerId, atout, announcement) {
    let player = this.findPlayerById(playerId);
    return this.selectAtout(player, atout, announcement);
  }
  
  selectAtout(player, atout, announcement) {
    let color = this.getAtoutObject(atout);
    this.selectedAtout = {
      id: genererIdentifiantUnique('atout'),
      atout: color,
      player: player,
      announcement: announcement,
    };
    this.selectedAtoutList.push(this.selectedAtout);
    return this.selectedAtout;
  }
  
  getSelectedAtout() {
    return this.selectedAtout;
  }
  
  getAtoutObject(atout) {
    return this.belote.beloteColors.find(
      color => color.colorName === atout ||
        color.colorTag === atout ||
        color.color === atout,
    );
  }
  
  playCardByPlayerIdAndCardId(playerId, cardId) {
    let player = this.findPlayerById(playerId);
    let card = player.getNotPlayedCardById(cardId);
    player.playCardById(card.id);
    this.saveTrickByPlayerIdAndCardId(player, card);
    return card;
  }
  
  playCardByPlayerRankAndCardId(playerRank, cardId) {
    let player = this.findPlayerByRank(playerRank);
    let card = player.getNotPlayedCardById(cardId);
    player.playCardById(card.id);
    this.saveTrickByPlayerIdAndCardId(player, card);
    return card;
  }
  
  playCardByPlayerIdAndCardTag(playerId, cardTag) {
    let player = this.findPlayerById(playerId);
    let card = player.getNotPlayedCardByTag(cardTag);
    player.playCardByTag(card.tag);
    this.saveTrickByPlayerIdAndCardId(player, card);
    return card;
  }
  
  playCardByPlayerRankAndCardTag(playerRank, cardTag) {
    let player = this.findPlayerByRank(playerRank);
    let card = player.getNotPlayedCardByTag(cardTag);
    player.playCardByTag(card.tag);
    this.saveTrickByPlayerIdAndCardId(player, card);
    return card;
  }
  
  playRandomCardByPlayerRank(playerRank) {
    let player = this.findPlayerByRank(playerRank);
    let card = player.getRandomCard();
    player.playCardByTag(card.tag);
    // this.saveTrickByPlayerIdAndCardId(player, card);
    
    return {
      card: card,
      player: player,
    };
  }
  
  playRandomCardByPlayerId(playerId) {
    let player = this.findPlayerById(playerId);
    let card = player.getRandomCard();
    player.playCardByTag(card.tag);
    // this.saveTrickByPlayerIdAndCardId(player, card);
    return card;
  }
  
  saveTrickByPlayerIdAndCardId(player, card) {
    if (player && card) {
      this.trick.addCard(player, card);
      this.addLogs(card, player);
      this.trick.selectAtout(this.selectedAtout);
      this.trick.level = this.tricks.listOfPlayedCard.length;
      if (this.trick.getPlayedCards().length === 1) {
        this.trick.setCurrentColor(card);
        this.trick.setCurrentPlayer(player);
      }
      this.view.addCardToHtml(player, card);
      
      this.calculateTotalScoreByTeam();
    } else {
      console.error("saveTrickByPlayerIdAndCardId");
    }
    
    return this.trick;
  }
  
  saveAndCalculateTricks(tricks) {
    this.round.listTricksInRound.push(tricks);
  }
  
  calculateTrickAndGetWinner(){
    if (this.trick.isAllCardPlayed()) {
      this.trick.setWinnerPlayerInTrick();
      return this.trick.ownerPlayer;
    }
    return {}
  }
  finishTrick() {
    if (this.trick.isAllCardPlayed()) {
      this.tricks.listOfPlayedCard.push(this.trick);
      
      this.trick = new Trick(this.tricks.listOfPlayedCard.length);
      
      if (this.tricks.listOfPlayedCard.length === 8) {
        this.tricks.calculateScore();
        this.saveAndCalculateTricks(this.tricks);
        
        this.initTricksList(this.tricks.scoreTotalByPlayer);
      }
      return true;
    }
    return false;
  }
  
  getNotPlayedCardsByPlayerByRank(playerRank) {
    return this.findPlayerByRank(playerRank).getNotPlayedCards();
  }
  
  getNotPlayedCardsByPlayerId(playerId) {
    return this.findPlayerById(playerId).getNotPlayedCards();
  }
  
  shuffleCards() {
    this.belote.shuffleCards();
  }
  
  distributeCards() {
    let secondPlayer = this.findPlayerByRank(2);
    let secondPlayerCards = this.belote.listCards.slice(0, 8);
    secondPlayer.distributeCardsToPlayer(secondPlayerCards);
    this.view.distributeCards(secondPlayer,secondPlayerCards);
    
    let thirdPlayer = this.findPlayerByRank(3);
    let thirdPlayerCards = this.belote.listCards.slice(8, 16);
    thirdPlayer.distributeCardsToPlayer(thirdPlayerCards);
    this.view.distributeCards(thirdPlayer,thirdPlayerCards);
    
    let forthPlayer = this.findPlayerByRank(4);
    let forthPlayerCards = this.belote.listCards.slice(16, 24);
    forthPlayer.distributeCardsToPlayer(forthPlayerCards);
    this.view.distributeCards(forthPlayer,forthPlayerCards);
    
    let firstPlayer = this.findPlayerByRank(1);
    let firstPlayerCards = this.belote.listCards.slice(24, 32);
    firstPlayer.distributeCardsToPlayer(firstPlayerCards);
    this.view.distributeCards(firstPlayer,firstPlayerCards);
    
    return this.players;
  }
}