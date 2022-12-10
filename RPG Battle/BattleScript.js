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
let DisplayGabin = [document.getElementById("PersonnageGabin"),document.getElementById("DivGabin"),document.getElementById("HPGabin")]
let DisplayGrosGabin = [document.getElementById("PersonnageGrosGabin"),document.getElementById("DivGrosGabin"),document.getElementById("HPGrosGabin")]
let DisplayPetitGabin = [document.getElementById("PersonnagePetitGabin"),document.getElementById("DivPetitGabin"),document.getElementById("HPPetitGabin")]

//Zone d'affichage de texte
let afficheAction = document.getElementById("afficheAction");

//Définition des variables utiles personnage [HP, Mana, Alive, CooldownAttaque, CooldownDefense, CooldownSpecial]
let VarYann = [50,100,true,false,false,false];
let VarBaptiste = [75,100,true,false,false,false];
let VarGuenole = [50,100,true,false,false,false];
let VarMarie = [100,100,true,false,false,false];
//Definition de la liste des joueurs pour les attaques aléatoires des monstres
let ListeJoueurs = [VarYann, VarBaptiste, VarGuenole, VarMarie]

//Définition des variables utiles Monstre [HP, Mana, Alive]
let VarGabin = [50,0,true];
let VarGrosGabin = [100,0,true];
let VarPetitGabin =[30,0,true];
//Definition de liste de monstres pour le choix des attaques du joueur
let ListeMonstres = [VarGabin, VarGrosGabin, VarPetitGabin]

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

//Tour joueur 1: Yann
function YannTurn(){
    //Si yann est vivant il peut jouer
    if (VarYann[0] > 0 && VarYann[2] == true){
        afficheAction.innerHTML = "C'est au tour de Yann de jouer.";
        ActionPersonnageAttaque.style.visibility = 'visible';
    }    
    //Sinon il meurt
    else{
        afficheAction.innerHTML = "Yann est mort!";
        DisplayYann[0].style.visibility = 'hidden';
        VarYann[2] = false ;
        //Son tour est automatiquement passé
        CompteurRound += 1;
    }
}

//Tour joueur 2: Baptiste
function BaptisteTurn(){
    //Si Baptiste est vivant il peut jouer
    if (VarBaptiste[0] > 0 && VarBaptiste[2] == true){
        afficheAction.innerHTML = "C'est au tour de Baptiste de jouer.";
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    //Sinon il meurt   
    else{
        afficheAction.innerHTML = "Baptiste est mort!";
        DisplayYann[0].style.visibility = 'hidden';
        VarBaptiste[2] = false ;
        //Son tour est automatiquement passé
        CompteurRound += 1;
    }
}

//Tour joueur 3: Guenole
function GuenoleTurn(){
    //Si Guenole est vivant il peut jouer
    if (VarGuenole[0] > 0 && VarGuenole[2] == true){
        afficheAction.innerHTML = "C'est au tour de Guenole de jouer.";
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    //Sinon il meurt   
    else{
        afficheAction.innerHTML = "Guenole est mort!";
        DisplayYann[0].style.visibility = 'hidden';
        VarGuenole[2] = false ;
        //Son tour est automatiquement passé
        CompteurRound += 1;
    }
}

//Tour joueur 4: Marie
function MarieTurn(){
    //Si Marie est vivante elle peut jouer
    if (VarMarie[0] > 0 && VarMarie[2] == true){
        afficheAction.innerHTML = "C'est au tour de Marie de jouer.";
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    //Sinon elle meurt   
    else{
        afficheAction.innerHTML = "Marie est mort!";
        DisplayYann[0].style.visibility = 'hidden';
        VarMarie[2] = false ;
        //Son tour est automatiquement passé
        CompteurRound += 1;
    }
}


// Tour Monstre 1 : Gabin
function GabinTurn(){
    //Si Gabin est vivant,il riposte
    if (VarGabin[0] > 0 && VarGabin[2] == true){
        afficheAction.innerHTML = "Gabin riposte!";
        VarYann[0] += -10;
        DisplayYann[2].innerHTML = DisplayYann[2].innerHTML -10;
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    else{
        //Si Gabin est mort, il disparait
        MonstreGabin.style.visibility = 'hidden';
        DivGabin.style.visibility = 'hidden';
        HPGabin.style.visibility = 'hidden';
    }
    //A la fin de son tour, le compteur augmente
    CompteurRound += 1
}

// Tour Monstre 2 : GrosGabin
function GrosGabinTurn(){
    //Si GrosGabin est vivant,il riposte
    if (VarGrosGabin[0] > 0 && VarGrosGabin[2] == true){
        afficheAction.innerHTML = "GrosGabin riposte!";
        VarYann[0] += -10;
        DisplayYann[2].innerHTML = DisplayYann[2].innerHTML -10;
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    else{
        //Si GrosGabin est mort, il disparait
        MonstreGrosGabin.style.visibility = 'hidden';
        DivGrosGabin.style.visibility = 'hidden';
        HPGrosGabin.style.visibility = 'hidden';
    }
    //A la fin de son tour, le compteur augmente
    CompteurRound += 1
}

// Tour Monstre 3 : PetitGabin
function PetitGabinTurn(){
    //Si PetitGabin est vivant,il riposte
    if (VarPetitGabin[0] > 0 && VarPetitGabin[2] == true){
        afficheAction.innerHTML = "PetitGabin riposte!";
        VarYann[0] += -10;
        DisplayYann[2].innerHTML = DisplayYann[2].innerHTML -10;
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    else{
        //Si Gabin est mort, il disparait
        MonstrePetitGabin.style.visibility = 'hidden';
        DivPetitGabin.style.visibility = 'hidden';
        HPPetitGabin.style.visibility = 'hidden';
    }
    //A la fin de son tour, le compteur augmente
    CompteurRound += 1
}

//Actions possibles
ActionPersonnageAttaque.onclick = function(Attaque) {
        afficheAction.innerHTML = "L'attaque vise Gabin";
        ActionPersonnageAttaque.style.visibility = 'hidden';
        VarGabin[0] += -10;
        HPGabin.innerHTML = HPGabin.innerHTML -10 ;
        CompteurRound += 1;
}


/*
//Ordre d'action des personnages
function personnagesTurn (){
    afficheAction.innerHTML = "Au tour des héros";
    ActionPersonnageAttaque.style.visibility = 'visible';
    setTimeout(YannTurn, 1500);
    BaptisteTurn();
    GuenoleTurn();
    MarieTurn();
    //On renvoie au tour des monstres après exécution des tours des joueurs
    setTimeout (monstresTurn, 1500)
}

//Ordre d'action des monstres
function monstresTurn (){
    afficheAction.innerHTML = "Au tour des monstres";
    ActionPersonnageAttaque.style.visibility = 'hidden';
    GabinTurn();
    GrosGabinTurn();
    PetitGabinTurn();
    //On renvoie au tour des joueurs après exécution des tours des monstres
    setTimeout (personnagesTurn, 1500)
}
*/
//Définition d'un Round
function Round(){
    //Si le compteur du round est à 8, on réinitialise pour recommencer
    /*while (game){
        if (CompteurRound >= 8) {
            CompteurRound = 1;
        }    
        if (CompteurRound == 1){
            YannTurn();
        }
        if (CompteurRound == 2){
            BaptisteTurn();
        }
        if (CompteurRound == 3){
            GuenoleTurn();
        }
        if (CompteurRound == 4){
            MarieTurn();
        }
        if (CompteurRound == 5){
            GabinTurn();
        }
        if (CompteurRound == 6){
            GrosGabinTurn();
        }
        if (CompteurRound == 7){
            PetitGabinTurn();
        }
    }
}

//Préparation du combat
function setup(){
    afficheAction.innerHTML = "Le combat commence!";
    DisplayGabin[2].style.visibility = 'hidden';
    DisplayGrosGabin[2].style.visibility = 'hidden';
    DisplayPetitGabin[2].style.visibility = 'hidden';
   /* ActionPersonnageAttaque.style.visibility = 'hidden';
    ActionPersonnageDefense.style.visibility = 'hidden';
    ActionPersonnagePouvoir.style.visibility = 'hidden';*/
}



//Début code
setup();
Round();