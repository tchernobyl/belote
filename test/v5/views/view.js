class View {
  
  constructor() {
    
  }
  
  addCardToHtml(player, card) {

    if(player && player._id && document.getElementById('card-played-id-'+ player._id  )){
      var element = document.getElementById('card-played-id-'+ player._id  );
      element.innerText = '';
      element.style.zIndex = player.rank;
      element.style.backgroundImage="url(./imgs/"+card.tag+".png)";
    }
    
  }
  
  showAllCardsByPlayer (player, cards){
    
  }
  distributeCards (player, cards){
    console.log(player, cards )
    for (var card = 1; card<cards.length+1;card++){
      var _card = document.getElementById("card-player-"+player._id+"-card-"+card)
      if(_card ){
        _card.style.display = '';
        _card.style.backgroundImage="url(./imgs/"+cards[card-1].tag+".png)";
      }
    }
  }
  
  
  removeCard(playerRank, card) {
    if(playerRank && document.getElementById('card-player-' + playerRank)){
      document.getElementById('card-player-' + playerRank).innerHTML =''
    }
  }
  removeAllCard (){
    for (var i=1 ; i<5 ;i++){
      if(document.getElementById('card-played-id-' + i)){
        document.getElementById('card-played-id-' + i).style.backgroundImage="";
      }
      
    }
  }
}