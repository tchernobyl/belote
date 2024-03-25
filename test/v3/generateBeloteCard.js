// Définition des cartes de Belote
let cartesDeBelote = [
  {
    tag: '7',
    valeur: '7',
    couleur: '♥',
    _couleur: 'c',
    value: '7c',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '8',
    valeur: '8',
    couleur: '♥',
    _couleur: 'c',
    value: '8c',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '9',
    valeur: '9',
    couleur: '♥',
    _couleur: 'c',
    value: '9c',
    score: '0',
    scoreAtout: '14',
  },
  {
    tag: '10',
    valeur: '10',
    couleur: '♥',
    _couleur: 'c',
    value: '10c',
    score: '10',
    scoreAtout: '10',
  },
  {
    tag: 'v',
    valeur: 'Valet',
    couleur: '♥',
    _couleur: 'c',
    value: 'vc',
    score: '2',
    scoreAtout: '20',
  },
  {
    tag: 'd',
    valeur: 'Dame',
    couleur: '♥',
    _couleur: 'c',
    value: 'dc',
    score: '3',
    scoreAtout: '3',
  },
  {
    tag: 'r',
    valeur: 'Roi',
    couleur: '♥',
    _couleur: 'c',
    value: 'rc',
    score: '4',
    scoreAtout: '4',
  },
  {
    tag: 'a',
    valeur: 'As',
    couleur: '♥',
    _couleur: 'c',
    value: 'ac',
    score: '11',
    scoreAtout: '11',
  },
  
  {
    tag: '7',
    valeur: '7',
    couleur: '♠',
    _couleur: 'p',
    value: '7p',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '8',
    valeur: '8',
    couleur: '♠',
    _couleur: 'p',
    value: '8p',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '9',
    valeur: '9',
    couleur: '♠',
    _couleur: 'p',
    value: '9p',
    score: '0',
    scoreAtout: '14',
  },
  {
    tag: '10',
    valeur: '10',
    couleur: '♠',
    _couleur: 'p',
    value: '10p',
    score: '10',
    scoreAtout: '10',
  },
  {
    tag: 'v',
    valeur: 'Valet',
    couleur: '♠',
    _couleur: 'p',
    value: 'vp',
    score: '2',
    scoreAtout: '20',
  },
  {
    tag: 'v',
    valeur: 'Dame',
    couleur: '♠',
    _couleur: 'p',
    value: 'dp',
    score: '3',
    scoreAtout: '3',
  },
  {
    tag: 'r',
    valeur: 'Roi',
    couleur: '♠',
    _couleur: 'p',
    value: 'rp',
    score: '4',
    scoreAtout: '4',
  },
  {
    tag: 'a',
    valeur: 'As',
    couleur: '♠',
    _couleur: 'p',
    value: 'ap',
    score: '11',
    scoreAtout: '11',
  },
  
  {
    tag: '7',
    valeur: '7',
    couleur: '♣',
    _couleur: 't',
    value: '7t',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '8',
    valeur: '8',
    couleur: '♣',
    _couleur: 't',
    value: '8t',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '9',
    valeur: '9',
    couleur: '♣',
    _couleur: 't',
    value: '9t',
    score: '0',
    scoreAtout: '14',
  },
  {
    tag: '10',
    valeur: '10',
    couleur: '♣',
    _couleur: 't',
    value: '10t',
    score: '10',
    scoreAtout: '10',
  },
  {
    tag: 'v',
    valeur: 'Valet',
    couleur: '♣',
    _couleur: 't',
    value: 'vt',
    score: '2',
    scoreAtout: '20',
  },
  {
    tag: 'v',
    valeur: 'Dame',
    couleur: '♣',
    _couleur: 't',
    value: 'dt',
    score: '3',
    scoreAtout: '3',
  },
  {
    tag: 'r',
    valeur: 'Roi',
    couleur: '♣',
    _couleur: 't',
    value: 'rt',
    score: '4',
    scoreAtout: '4',
  },
  {
    tag: 'a',
    valeur: 'As',
    couleur: '♣',
    _couleur: 't',
    value: 'at',
    score: '11',
    scoreAtout: '11',
  },
  
  {
    tag: '7',
    valeur: '7',
    couleur: '♦',
    _couleur: 'd',
    value: '7d',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '8',
    valeur: '8',
    couleur: '♦',
    _couleur: 'd',
    value: '8d',
    score: '0',
    scoreAtout: '0',
  },
  {
    tag: '9',
    valeur: '9',
    couleur: '♦',
    _couleur: 'd',
    value: '9d',
    score: '0',
    scoreAtout: '14',
  },
  {
    tag: '10',
    valeur: '10',
    couleur: '♦',
    _couleur: 'd',
    value: '10d',
    score: '10',
    scoreAtout: '10',
  },
  {
    tag: 'v',
    valeur: 'Valet',
    couleur: '♦',
    _couleur: 'd',
    value: 'vd',
    score: '2',
    scoreAtout: '20',
  },
  {
    tag: 'v',
    valeur: 'Dame',
    couleur: '♦',
    _couleur: 'd',
    value: 'dd',
    score: '3',
    scoreAtout: '3',
  },
  {
    tag: 'r',
    valeur: 'Roi',
    couleur: '♦',
    _couleur: 'd',
    value: 'rd',
    score: '4',
    scoreAtout: '4',
  },
  {
    tag: 'a',
    valeur: 'As',
    couleur: '♦',
    _couleur: 'd',
    value: 'ad',
    score: '11',
    scoreAtout: '11',
  },
  // Répétez pour les autres couleurs: Carreau, Trèfle, Pique
  // Assurez-vous d'avoir 32 cartes au total
];
let listCardByPlayer = {};

let currentGame = {
  playerMe: 3,
  turn: 1,
  round: 0,
  asset: '',
  announcement: 0,
  dealer: 3,
  currentPlayer: 2,
  roundScore: 2000,
  listAllAnnounce: [],
  listAnnounce: [],
  lastAnnounce: {},
  announce: {
    player: '',
    score: 0,
    atout: '',
  },
};

let Game = {
  indexLog: 1,
  _id: 0,
  score: 0,
  listAtout: function() {
    return ['♥', '♦', '♠', '♣'];
  },
  atout: '♠',
  logs: [],
  round: [],
  hands: [],
  hand: [],
  tricks: [],
  trick: [],
  scoreByTricks: 0,
  addLog: function(log) {
    this.logs.push(log);
    this.indexLog++;
  },
  calculateHandScore: function() {
    let score = 0;
    for (var t = 0; t < this.tricks.length; t++) {
      score += parseInt(this.tricks[t].score);
    }
    return score;
  },
  getHandScore: function() {
    let score = 0;
    for (var t = 0; t < this.hand.length; t++) {
      score += this.hand[this.hand.length - 1].score;
    }
    
    return score;
  },
  addTricksToHand: function() {
    let score = this.calculateHandScore();
    this.hand.push({
      score: score,
      list: this.tricks,
    });
    this.tricks = [];
    this.trick = [];
    this.scoreByTricks = 0;
    
  },
  calculateTricksScore: function() {
    let score = 0;
    for (var t = 0; t < this.trick.length; t++) {
      if (this.trick[t].card.couleur === this.atout) {
        score += parseInt(this.trick[t].card.scoreAtout);
      } else {
        score += parseInt(this.trick[t].card.score);
      }
      
    }
    return score;
  },
  saveTrick: function() {
    let score = this.calculateTricksScore();
    this.tricks.push(
      {
        score: score,
        list: this.trick,
      },
    );
    
  },
  emptyTrick: function() {
    this.trick = [];
  },
  
  isLastCardToPlay: function() {
    return this.trick.length === 4;
  },
  saveSmallTrick: function() {
    if (this.trick.length === 4) {
      this.saveTrick();
      
    }
  },
  playCard: function(card, player) {
    
    this.addLog({
      index: this.indexLog,
      id: this._id,
      player: player,
      card: card,
      trick: this.trick.length,
      tricks: this.tricks.length,
      hand: this.hand.length,
    });
    this.trick.push({
      player: player,
      card: card,
    });
    
    this._id++;
  },
};
var index = 1;
var playedCardHtml = function(player, card) {
  index++;
  var top = 180;
  var left = 250;
  var zIndex = getPlayerRank(player, currentGame.dealer) + 1;
  var plyr;
  switch (player) {
    case 1:
      top = 20;
      left = 250;
      break;
    case 2:
      top = 120;
      left = 160;
      break;
    case 3:
      top = 180;
      left = 250;
      break;
    case 4:
      top = 120;
      left = 340;
      break;
  }
  
  var playedCardElement = '<div id="played-card-id-' + player + '" index="' +
    index + '" class="carte-played" style="top: ' + top + 'px;left: ' + left +
    'px;z-index: ' + index + ';background-image: url(&quot;./imgs/' + card.tag +
    '_'
    + card._couleur + '.png&quot;);" ></div>';
  var element = document.getElementById('sous-section2-2');
  element.innerHTML += playedCardElement;
  element.classList.add('cartes');
  
};

var Robot = {
  showPlayedCard: function(player, card) {
    playedCardHtml(player, card);
  },
  hideCardFromUI: function(card, player) {
    
    var that = this;
    var carte = document.getElementById(card.id);
    carte.style.transition = 'transform 1s'; // Ajout d'une transition pour une animation fluide
    carte.style.transform = 'translate(-50%, -50%) scale(0)'; // Déplace et réduit l'échelle de l'élément au centre
    setTimeout(function() {
      carte.style.display = 'none'; // Masque l'élément après une seconde
      
    }, 300);
    
    // document.getElementById(card.id).style.display = 'none'
  },
  robotChooseCardToPlay: function(player, cardsByPlayer) {
    let listOfCard = cardsByPlayer[player];
    
    const objectArray = Object.values(listOfCard);
    
    const filteredObjects = objectArray.filter(obj => !obj.played);

// Function to choose a random object from an array
    function chooseRandom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

// Choose a random object from the filtered list
    const randomObject = chooseRandom(filteredObjects);
    if (randomObject) {
      randomObject.played = true;
      this.hideCardFromUI(randomObject, player);
    }
    return randomObject;
    
  },
};

var removeAllPlayedCards = function() {
  document.getElementById('sous-section2-2').innerHTML = '';
};
var getPlayerRank = function(player, dealer) {
  var rank = 0;
  while (player !== dealer) {
    if (player === 4) {
      player = 1;
    } else {
      player++;
    }
    rank++;
  }
  return rank;
};

var prepareNewTable = function() {
  const element = document.getElementById('table');

// Supprimer tout le contenu HTML de l'élément
  element.innerHTML = '';

// Ajouter du nouveau HTML à l'élément
  element.innerHTML = '    <div style="height: 100%; width: 100%">\n' +
    '        <div class="section" id="section1">\n' +
    '            <div class="sous-section" id="sous-section1-1"></div>\n' +
    '            <div class="sous-section large" id="sous-section1-2"></div>\n' +
    '            <div class="sous-section" id="sous-section1-3"></div>\n' +
    '        </div>\n' +
    '        <div class="section grande" id="section2">\n' +
    '            <div class="sous-section" id="sous-section2-1"></div>\n' +
    '            <div class="sous-section large" id="sous-section2-2"></div>\n' +
    '            <div class="sous-section" id="sous-section2-3"></div>\n' +
    '        </div>\n' +
    '        <div class="section" id="section3">\n' +
    '            <div class="sous-section" id="sous-section3-1"></div>\n' +
    '            <div class="sous-section large" id="sous-section3-2"></div>\n' +
    '            <div class="sous-section" id="sous-section3-3"></div>\n' +
    '        </div>\n' +
    '    </div>';
};

var getSelectedAnnounceValue = function(id) {
  let value;
  switch (id) {
    case 'btn90':
      value = 90;
      break;
    case 'btn100':
      value = 100;
      break;
    case 'btn110':
      value = 110;
      break;
    case 'btn120':
      value = 120;
      break;
    case 'btn130':
      value = 130;
      break;
    case 'btn140':
      value = 140;
      break;
    case 'btn150':
      value = 150;
      break;
    case 'btn160':
      value = 160;
      break;
    case 'btn170':
      value = 170;
      break;
    case 'btn180':
      value = 180;
      break;
    case 'btnCapot':
      value = 500;
      break;
    case 'btn-heart':
      value = 'heart';
      break;
    case 'btn-square':
      value = 'square';
      break;
    case 'btn-spade':
      value = 'spade';
      break;
    case 'btn-clover':
      value = 'clover';
      break;
    case '♥':
      value = 'heart';
      break;
    case '♦':
      value = 'square';
      break;
    case '♠':
      value = 'spade';
      break;
    case '♣':
      value = 'clover';
      break;
    
  }
  
  return value;
};

var showAnnouncement = function() {
  document.getElementById('announcement-popup').style.display = '';
};
var hideAnnouncement = function() {
  document.getElementById('announcement-popup').style.display = 'none';
};

var announceTake = function(id, player) {
  currentGame.announce.score = getSelectedAnnounceValue(id);
};

var chooseAnnounce = function(id, player) {
  currentGame.announce.atout = getSelectedAnnounceValue(id);
};
var getLastAnnouncement = function() {
  return currentGame.lastAnnounce;
  if (currentGame.listAnnounce.length) {
    return currentGame.listAnnounce[currentGame.listAnnounce.length - 1];
  }
  return {};
};
var pushNewAnnouncement = function(announcement) {
  if (announcement.passed === false) {
    currentGame.lastAnnounce = announcement;
  }
  currentGame.listAnnounce.push(announcement);
  return announcement;
  
};


var startRound = function() {
  if (currentGame.currentPlayer === currentGame.playerMe) {
    showAnnouncement();
  } else {
    hideAnnouncement();
    var announce = selectAnnounceRobot();
    currentGame.announce.score = announce.score;
    currentGame.announce.atout = announce.atout;
    currentGame.announce.passed = announce.passed;
    currentGame.announce.player = currentGame.currentPlayer;
    validateChoice();
  }
};

var getRandomChoice = function() {
  const randomNumber = Math.random();
  return randomNumber < 0.6;
};

var getRandomAtout = function() {
  var listAtout = ['♥', '♦', '♠', '♣'];
  var randomIndex = Math.floor(Math.random() * listAtout.length);
  return listAtout[randomIndex];
};

var selectAnnounceRobot = function() {
  var lastAnnouncement = getLastAnnouncement();
  var takeAtout = getRandomChoice();
  var atout = getSelectedAnnounceValue(getRandomAtout());
  if (takeAtout) {
    if (lastAnnouncement && lastAnnouncement.score > 0 &&
      lastAnnouncement.score < 180) {
      return {
        passed: false,
        score: lastAnnouncement.score + 10,
        atout: atout,
        palyer: currentGame.currentPlayer,
      };
    } else {
      return {
        passed: false,
        score: 90,
        atout: atout,
        palyer: currentGame.currentPlayer,
      };
    }
  }
  return {
    passed: true,
    score: 0,
    atout: 'none',
    palyer: currentGame.currentPlayer,
  };
};
var selectAnnounce = function() {
  
  var lastAnnouncement = getLastAnnouncement();
  if (lastAnnouncement && !lastAnnouncement.score &&
    currentGame.announce.score > 0) {
    pushNewAnnouncement(
      {
        player: currentGame.currentPlayer,
        score: currentGame.announce.score,
        atout: currentGame.announce.atout,
        passed: currentGame.announce.passed,
      },
    );
  } else {
    if (lastAnnouncement && lastAnnouncement.score &&
      (lastAnnouncement.passed !== true) && currentGame.announce.score >
      lastAnnouncement.score) {
      
      pushNewAnnouncement(
        {
          player: currentGame.currentPlayer,
          score: currentGame.announce.score,
          atout: currentGame.announce.atout,
          passed: currentGame.announce.passed,
        },
      );
    } else {
      
      pushNewAnnouncement(
        {
          player: currentGame.currentPlayer,
          score: 0,
          atout: '',
          passed: true,
        },
      );
    }
  }
  nextAnnouncement()
};

var passWithoutTaking = function () {
  pushNewAnnouncement(
    {
      player: currentGame.currentPlayer,
      score: 0,
      atout: '',
      passed: true,
    },
  );
}

var nextAnnouncement = function () {
  if (isLastAnnouncementTaken()) {
    hideAnnouncement();
    reInitDealer();
    startNewHand();
  } else {
    nextPersonTurn();
    startRound();
  }
}
var getPreviousPlayer = function() {
  
  var previous = 1;
  switch (currentGame.dealer) {
    case 1:
      previous = 4;
      break;
    case 2:
      previous = 1;
      break;
    case 3:
      previous = 2;
      break;
    case 4:
      previous = 3;
      break;
    
  }
  return previous;
  
};
var reInitDealer = function() {
  currentGame.currentPlayer = getPreviousPlayer();
  return currentGame.currentPlayer;
};

var isLastAnnouncementTaken = function() {
  var endLastAnnounce = true;
  if (currentGame.listAnnounce.length > 4) {
    for (var t = currentGame.listAnnounce.length; t >
    currentGame.listAnnounce.length - 3; t--) {
      if (currentGame.listAnnounce[t - 1].passed !== true) {
        endLastAnnounce = false;
      }
    }
  } else {
    endLastAnnounce = false;
  }
  return endLastAnnounce;
};

var validateChoice = function() {
  
  // if (currentGame.announce.score > 0 && currentGame.announce.atout) {
  currentGame.announce.player = currentGame.currentPlayer;
  selectAnnounce();
  // }
  
};

var startNewHand = function() {
  
  for (let i = 0; i < cartesDeBelote.length; i++) {
    cartesDeBelote[i].played = false;
  }
  nextPersonTurn();
  nextPersonTurn();
  
  melangerCartes(cartesDeBelote);
  listCardByPlayer = {};
  
  // Distribuer les cartes
  distribuerCartes('sous-section1-2', cartesDeBelote.slice(0 ,  8)  , 1, true);
  distribuerCartes('sous-section3-2', cartesDeBelote.slice(8 , 16), 3, true);
  distribuerCartes('sous-section2-1', cartesDeBelote.slice(16, 24), 2, false);
  distribuerCartes('sous-section2-3', cartesDeBelote.slice(24, 32), 4, false);
  startGame();
};

function playBoot(player) {
  const randomObject = Robot.robotChooseCardToPlay(player, listCardByPlayer);
  if (randomObject) {
    Game.playCard(randomObject, player);
    setTimeout(function() {
      Game.saveSmallTrick();
      if (Game.isLastCardToPlay()) {
        Game.emptyTrick();
      }
      
      playCardRobot(randomObject, player);
    }, 700);
    
  } else {
    console.error('player ', player, listCardByPlayer);
  }
  
}

function playNext(player, listCardByPlayer) {
  
  if (currentGame.currentPlayer === currentGame.playerMe) {
    
  } else {
    setTimeout(function() {
      playBoot(player);
    }, 300);
    
  }
}

function startGame() {
  playNext(getFirstPlayer());
}

function getFirstPlayer() {
  if (currentGame.dealer < 4) {
    return currentGame.dealer + 1;
  } else {
    return 1;
  }
}

function changeDealer(player) {
  if (player) {
    currentGame.dealer = player;
  } else {
    if (currentGame.dealer < 4) {
      currentGame.dealer++;
    } else {
      currentGame.dealer = 1;
    }
  }
  
  return currentGame.dealer;
}

function nextPersonTurn() {
  if (currentGame.currentPlayer < 4) {
    currentGame.currentPlayer++;
  } else {
    currentGame.currentPlayer = 1;
  }
  return currentGame;
}

function choseAsset(player, asset, ad) {
  
}

cartesDeBelote = ajouterIdUniques(cartesDeBelote);

function genererIdentifiantUnique() {
  const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let identifiant = '';
  for (let i = 0; i < 3; i++) {
    identifiant += lettres.charAt(Math.floor(Math.random() * lettres.length));
  }
  const chiffres = Math.floor(1000 + Math.random() * 9000);
  identifiant += chiffres;
  return identifiant;
}

function ajouterIdUniques(tableau) {
  tableau.forEach(objet => {
    objet.id = genererIdentifiantUnique();
  });
  return tableau;
}

function melangerCartes(cartes) {
  for (let i = cartes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartes[i], cartes[j]] = [cartes[j], cartes[i]]; // échange
  }
}

function findObjectById(id, list) {
  return list.find(obj => obj.id === id);
}

var runPlayCardAndChangeTurn = function(card, player) {
  
};

var startNewTrick = function() {
  console.warn('new manche ');
  Game.addTricksToHand();
  prepareNewTable();
  changeDealer();
  startNewHand();
};
var playCardMe = function(cardId, player) {
  if (currentGame.currentPlayer === currentGame.playerMe) {
    var listCard = listCardByPlayer[currentGame.playerMe];
    let foundObjectInCardList = findObjectById(cardId, listCard);
    foundObjectInCardList.played = true;
    Robot.hideCardFromUI(foundObjectInCardList, player);
    Game.playCard(foundObjectInCardList, currentGame.playerMe);
    Robot.showPlayedCard(player, foundObjectInCardList);
    setTimeout(function() {
      
      Game.saveSmallTrick();
      if (Game.isLastCardToPlay()) {
        removeAllPlayedCards();
        Game.emptyTrick();
      }
      
      let foundObjectInGlobalList = findObjectById(cardId, cartesDeBelote);
      
      if (foundObjectInGlobalList && foundObjectInCardList) {
        
        if (Game.tricks.length === 8) {
          startNewTrick();
        } else {
          nextPersonTurn();
          playNext(currentGame.currentPlayer);
        }
        
      } else {
        console.error('Object with ID', 'not found.');
      }
    }, 700);
    
  } else {
    console.error('it\'s not your turn !!!');
  }
  
};
var playCardRobot = function(card, player) {
  if (Game.trick.length === 0) {
    setTimeout(function() {
      removeAllPlayedCards();
    }, 700);
  }
  if (Game.tricks.length === 8) {
    startNewTrick();
  } else {
    
    if (currentGame.currentPlayer && Game.tricks.length < 8) {
      let foundObjectInGlobalList = findObjectById(card.id, cartesDeBelote);
      let foundObjectInPlayerlList = findObjectById(card.id,
        listCardByPlayer[currentGame.currentPlayer]);
      
      if (foundObjectInGlobalList && foundObjectInPlayerlList) {
        
        Robot.showPlayedCard(player, card);
        nextPersonTurn();
        playNext(currentGame.currentPlayer);
        
      } else {
        console.warn('Object with ID', card, 'not found.');
      }
      
    } else {
      console.warn('it\'s not your turn !!');
    }
  }
  
};

function distribuerCartes(sousSectionId, cartes, player, vertical = false) {
  console.info('distrubute new card ');
  const sousSection = document.getElementById(sousSectionId);
  for (let i = 0; i < 8; i++) {
    if (!listCardByPlayer[player]) {
      listCardByPlayer[player] = [];
    }
    listCardByPlayer[player].push(cartes[i]);
    const carte = document.createElement('div');
    carte.textContent = '';
    
    if (currentGame.playerMe === player) {
      carte.style.backgroundImage = 'url(\'./imgs/' + cartes[i].tag + '_' +
        cartes[i]._couleur + '.png\')';
      // carte.textContent = `${cartes[i].valeur} de ${cartes[i].couleur}`;
    } else {
      carte.style.backgroundImage = 'url(\'./imgs/card.png\')';
    }
    
    carte.id = cartes[i].id;
    carte.setAttribute('onclick',
      'playCardMe(\'' + cartes[i].id + '\',\'' + player + '\');');
    if (vertical) {
      carte.classList.add('carte-vertical');
    } else {
      carte.classList.add('carte-horizontal');
      
    }
    sousSection.appendChild(carte);
  }
}