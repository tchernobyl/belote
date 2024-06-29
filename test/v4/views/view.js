class View {
  
  constructor() {
    
  }
  
  addCardToHtml(playerRank, card) {
    if(playerRank && document.getElementById('card-player-'+playerRank )){
      document.getElementById('card-player-' + playerRank).innerHTML = '<h1>'+card.cardTag +' - ' +card.color+'</h1>';
    }
    
  }
  
  removeCard(playerRank, card) {
    if(playerRank && document.getElementById('card-player-' + playerRank)){
      document.getElementById('card-player-' + playerRank).innerHTML =''
    }
  }
  removeAllCard (){
    for (var i=1 ; i<5 ;i++){
      if(document.getElementById('card-player-' + i)){
        document.getElementById('card-player-' + i).innerHTML =''
      }

    }
  }
}