//setTimeout(() => { 
//}, timeout);

/*A faire:

- Complétion de toutes les attaques pour riposte
- attaques aléatoires monstres
- Sélection personnage onclick
- Affichage menu de choix selon perso
- Coût mana pouvoir + lock réutlisation (mana interne à 1?)
- Liste de liste pour personnages et attaques aléatoires
- Idem pour les monstres

Problèmes:
- Yann se fait boloss même en étant mort (attaque de gabin systématiquement dirigée contre lui dans le code)
- Passage immédiat au tour de Marie lors d'un tour, besoin d'un timer/compteur

*/

//Récupération des éléments de personnage [Personnage, Div, HP, SP(mana)]
let DisplayYann = [document.getElementById("PersonnageYann"),document.getElementById("DivYann"),document.getElementById("HPYann"),document.getElementById("SPYann")]
let DisplayBaptiste = [document.getElementById("PersonnageBaptiste"),document.getElementById("DivBaptiste"),document.getElementById("HPBaptiste"),document.getElementById("SPBaptiste")]
let DisplayGuenole = [document.getElementById("PersonnageGuenole"),document.getElementById("DivGuenole"),document.getElementById("HPGuenole"),document.getElementById("SPGuenole")]
let DisplayMarie = [document.getElementById("PersonnageMarie"),document.getElementById("DivMarie"),document.getElementById("HPMarie"),document.getElementById("SPMarie")]

//Récupération des éléments de monstre [Monstre, Div, HP]
let DisplayGabin = [document.getElementById("MonstreGabin"),document.getElementById("DivGabin"),document.getElementById("HPGabin")]
let DisplayGrosGabin = [document.getElementById("MonstreGrosGabin"),document.getElementById("DivGrosGabin"),document.getElementById("HPGrosGabin")]
let DisplayPetitGabin = [document.getElementById("MonstrePetitGabin"),document.getElementById("DivPetitGabin"),document.getElementById("HPPetitGabin")]

//Zone d'affichage de texte
let afficheAction = document.getElementById("afficheAction");

//Définition des variables utiles personnage [HP, Mana, Alive, Name, Display, CooldownAttaque, CooldownDefense, CooldownSpecial]
let VarYann = [50,100,true,"Yann",DisplayYann,false,false,false];
let VarBaptiste = [75,100,true,"Baptiste",DisplayBaptiste,false,false,false];
let VarGuenole = [50,100,true,"Guenole",DisplayGuenole,false,false,false];
let VarMarie = [100,100,true,"Marie",DisplayMarie,false,false,false];
//Definition de la liste des joueurs pour les attaques aléatoires des monstres
let ListeJoueurs = [VarYann, VarBaptiste, VarGuenole, VarMarie];
let ListeJoueursVivants;

//Définition des variables utiles Monstre [HP, Mana, Alive, Name, Display]
let VarGabin = [50,0,true,"Gabin",DisplayGabin];
let VarGrosGabin = [100,0,true,"GrosGabin",DisplayGrosGabin];
let VarPetitGabin =[30,0,true,"PetitGabin",DisplayPetitGabin];
//Definition de liste de monstres pour le choix des attaques du joueur
let ListeMonstres = [VarGabin, VarGrosGabin, VarPetitGabin];
let ListeMonstresVivants;
//Définition des variables d'algo
let CompteurRound = 1;
let game = true;
//Affichage vie monstre selon hover
DivGabin.onmouseover = function(){
    HPGabin.style.visibility = 'visible';
}
DivGabin.onmouseout= function(){
    HPGabin.style.visibility = 'hidden';
}
DivGrosGabin.onmouseover = function(){
    HPGrosGabin.style.visibility = 'visible';
}
DivGrosGabin.onmouseout= function(){
    HPGrosGabin.style.visibility = 'hidden';
}
DivPetitGabin.onmouseover = function(){
    HPPetitGabin.style.visibility = 'visible';
}
DivPetitGabin.onmouseout= function(){
    HPPetitGabin.style.visibility = 'hidden';
}

//Personnages [HP, Mana, Alive, Name, Display, CooldownAttaque, CooldownDefense, CooldownSpecial]

function playerTurn(player){
    //Si le personange est vivant il peut jouer
    if (player[2] == true){
      console.log(player[3]);
      afficheAction.innerHTML = "C'est au tour de "+player[3]+" de jouer.";
      ActionPersonnageAttaque.style.visibility = 'visible';
      var target;
      var validTarget = false;
      do{
      	target = prompt(player[3]+" va attaquer un ennemi :");
        for(el of ListeMonstresVivants){
          if(ListeMonstres[el].includes(target)){
          	validTarget = true;
            target = el;
            break;
        	}
        }
        if(!validTarget){
          alert(target+" est déjà mort...(ou inexistant)");
        }
      }while(!validTarget);
      attack(target);
		}   
}

//Monstres [HP, Mana, Alive, Nom, Display]
function monsterTurn(monster){
    //Si le monstre est vivant,il riposte
    if (monster[2] == true){
        console.log(monster[3]);
        afficheAction.innerHTML = monster[3]+" riposte!";
      	//La cible du monstre est choisie au hasard
      	playerIndex = ListeJoueursVivants[Math.floor(Math.random() * (ListeJoueursVivants.length - 0)) + 0]
      	console.log(playerIndex);
      	player = ListeJoueurs[playerIndex];
      	console.log(player);
      	console.log("attaque : "+player[3]);
      	player[0] -= Math.floor(Math.random() * (50 - 20)) + 20;
        player[4][2].innerHTML = player[0];
        //ActionPersonnageAttaque.style.visibility = 'visible';
      	//Si la cible tombe à zéro hp ou en dessous, elle meurt
      	if(isDead(player)){
          player[2] = false;
          vanish(player);
          ListeJoueursVivants = setAliveList(ListeJoueurs);
        }
    }
}

//Generation de la liste des cibles disponibles
function generateLi(){
  var listeLi = "";
  for ([index, el] of ListeMonstres.entries()){
    if (el[2] == true){
  		listeLi += "<li onclick=\"attack("+index+")\">"+el[3]+"</li>";
		}
  }
  document.getElementById("ListeCibles").innerHTML = listeLi;
  document.getElementById("ListeCibles").style.visibility = 'visible';
}

function attack(targetIndex){
  	var target = ListeMonstres[targetIndex];
    afficheAction.innerHTML = "L'attaque vise "+target[3];
    ActionPersonnageAttaque.style.visibility = 'hidden';
  	document.getElementById("ListeCibles").style.visibility = 'hidden';
    target[0] -=  Math.floor(Math.random() * (20 - 5)) + 5;;
    target[4][2].innerHTML = target[0] ;
    //Si la cible tombe à zéro hp ou en dessous, elle meurt
    if (isDead(target)){
      target[2] = false;
      vanish(target);
      ListeMonstresVivants = setAliveList(ListeMonstres);
    }
}

function isDead(target){
  return target[0] <= 0;
}

function vanish(target){
  for (el of target[4]){
    el.style.visibility = 'hidden';
  }
}
//Actions possibles
ActionPersonnageAttaque.onclick = function() {
  //generateLi();
}


//Définition d'un Round
async function Round(){
  for (el of ListeJoueurs){
    //Personnage [HP, Mana, Alive, CooldownAttaque, CooldownDefense, CooldownSpecial, Nom]
    if(ListeMonstresVivants.length > 0){
    	playerTurn(el);
      await delay(1000);
    }
  }  
  
  for (el of ListeMonstres){
    //Monstre [HP, Mana, Alive]
    // Vérifie qu'il y a encore des cibles
    if(ListeJoueursVivants.length > 0){
      monsterTurn(el);
    	await delay(1000);
    }
  }
  // ICI
}


//Préparation du combat
function setup(){
    afficheAction.innerHTML = "Le combat commence!";
  	DisplayGabin[2].style.visibility = 'hidden';
    DisplayGrosGabin[2].style.visibility = 'hidden';
    DisplayPetitGabin[2].style.visibility = 'hidden';
    ActionPersonnageAttaque.style.visibility = 'hidden';
    ActionPersonnageDefense.style.visibility = 'hidden';
    ActionPersonnagePouvoir.style.visibility = 'hidden';
  	
    ListeJoueursVivants = setAliveList(ListeJoueurs);
    ListeMonstresVivants = setAliveList(ListeMonstres);

}

function setAliveList(list){
  	listAlive = [];
    for ([index, el] of list.entries()){
      //console.log(el);
      //console.log(index);
      if(el[2] == true){
    		listAlive.push(index); 
      }
    }
  console.log(listAlive);
  return listAlive;
}

function isGame(){
  if(ListeJoueursVivants.length <= 0){afficheAction.innerHTML = "Défaite...";return false}
  if(ListeMonstresVivants.length <= 0){afficheAction.innerHTML = "Victoire!";return false}

  return true;
}
const delay = async(ms = 1000) =>
new Promise(resolve => setTimeout(resolve, ms))


//Début code
setup();
window.onload = async (event) => {
  while(isGame){
    console.log('in game');
    await Round();  
	}
  console.log("fini");
}