class Trick {
  constructor(level) {
    this.listCards = [];
    this.level = level;
    this.position = 1;
    this.score = 0;
    this.ownerPlayer = {};
    this.selectedAtout = {};
    this.highestCard = {};
  }
  
  selectAtout(atout) {
    this.selectedAtout = atout;
  }
  
  addCard(player, card) {
    if (this.listCards.length < 5) {
      this.listCards.push({
        player: player,
        card: card,
        rank: this.listCards.length,
        position: this.position,
      });
      this.position++;
    } else {
      console.error('The maximum number of cards per trick has been reached! ');
    }
  }
  
  calculateScore() {
    
  }
  
  getCardScore(card, atout) {
    
    if (card.colorName === atout.atout.colorName) {
      return card.cardScoreAtout;
    }
    return card.cardScore;
  }
  
  setWinnerPlayerInTrick() {
    if (this.isAllCardPlayed()) {
      let scoreTrick = 0;
      let highestScore = 0;
      let playerHighestCard = {};
      let highestCard = {};
      for (var i = 0; i < this.listCards.length; i++) {
        let scoreCard = this.getCardScore(this.listCards[i].card,
          this.selectedAtout);
        this.listCards[i].scoreCardCalculated = scoreCard;
        
        if (scoreCard > highestScore) {
          highestScore = scoreCard;
          playerHighestCard = this.listCards[i].player;
          highestCard = this.listCards[i].card;
        }
        scoreTrick += scoreCard;
      }
      this.score = scoreTrick;
      this.ownerPlayer = playerHighestCard;
      this.highestCard = highestCard;
    }
    
    return this.score;
  }
  
  getTheHighestCard() {
    
  }
  
  getPlayerWithHighestCard() {
    
  }
  
  getPlayedCards() {
    return this.listCards;
  }
  
  isAllCardPlayed() {
    return this.getPlayedCards().length === 4;
  }
  
}