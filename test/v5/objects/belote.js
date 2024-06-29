class Belote {

  constructor(beloteColors,beloteNumbers, players) {
    this.beloteColors = beloteColors;
    this.beloteNumbers = beloteNumbers;
    this.players = players;
  
    this.beloteCards =[]
    this.listCards = []
    this.players = []
    this.getAllCardList()
    this.shuffleCards ()
  }


  
  shuffleCards () {
    let cartes = this.beloteCards;
    for (let i = cartes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartes[i], cartes[j]] = [cartes[j], cartes[i]];
    }
    this.listCards = cartes;
    this.getAllCardList()
    return cartes;
  }
  getAllCardList() {
    let listCard = [];
    this.beloteColors.forEach(color => {
      this.beloteNumbers.forEach(number => {
        let object = {
          id : genererIdentifiantUnique('belote'),
          tag: number.cardTag + '_' + color.colorTag,
          name: number.cardName + ' of ' + color.colorName,
          played:false,
          isAtout: function (color){
            return (this.colorName === color|| this.color ===color);
          }
        };
        let concatenatedObject = {...number, ...color, ...object};
        listCard.push(concatenatedObject);
      });
    });
    
    this.beloteCards=listCard;
    return listCard;
  }


}
