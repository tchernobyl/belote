let index=1;
function genererIdentifiantUnique(starter) {
  const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let identifiant = '';
  for (let i = 0; i < 3; i++) {
    identifiant += lettres.charAt(Math.floor(Math.random() * lettres.length));
  }
  const chiffres = Math.floor(1000 + Math.random() * 9000);
  identifiant += chiffres;
  identifiant = index +'_'+identifiant;
  index++;
  if(starter){
    identifiant=starter+'_'+identifiant
  }
  return identifiant;
}