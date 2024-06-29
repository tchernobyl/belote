class Player {
  
  constructor(id, _id, name, isRobot, rank, team) {
    this.id = id;
    this.name = name;
    this._id = _id;
    this.isRobot = isRobot;
    this.rank = rank;
    this.cards = [];
    this.team = team;
    
  }
  
  distributeCardsToPlayer(cards) {
    this.cards = cards;
  }
  
  getCards() {
    return this.cards;
  }
  
  getCardById(id) {
    return this.cards.find(item => item.id === id);
  }
  
  getNotPlayedCardById(id) {
    return this.getNotPlayedCards().find(item => item.id === id);
  }
  
  getCardByTag(tag) {
    return this.cards.find(item => item.tag === tag);
  }
  
  getNotPlayedCardByTag(tag) {
    return this.getNotPlayedCards().find(item => item.tag === tag);
  }
  
  getAtoutCards(atout) {
    return this.cards.filter(
      item => (item.color === atout || item.colorTag === atout ||
        item.colorName === atout));
  }
  
  getRank() {
    return this.rank;
  }
  
  setRank(rank) {
    this.rank = rank;
  }
  
  isRobot() {
    return this.isRobot;
  }
  
  isFirstPlayer() {
    return this.rank === 1;
  }
  
  getNotPlayedCard() {
    return this.cards.find(card => card.played === false);
  }
  
  getNotPlayedCards() {
    return this.cards.filter(card => card.played === false);
  }
  
  getPlayedCards() {
    return this.cards.filter(card => card.played === true);
  }
  
  getNotPlayedAtout() {
    return this.getAtoutCards().filter(card => card.played === false);
  }
  
  getPlayedAtout() {
    return this.getAtoutCards().filter(card => card.played === true);
  }
  
  playCardById(id) {
    let card = this.getNotPlayedCardById(id);
    card.played = true;
    return card;
  }
  
  playCardByTag(tag) {
    let card = this.getNotPlayedCardByTag(tag);
    card.played = true;
    return card;
  }

  
  
  getRandomCard() {
    let card = this.getNotPlayedCard();
    return card;
  }
  
  playRandomCard() {
    let card = this.getNotPlayedCard();
    card.played = true;
    return card;
  }
  
}