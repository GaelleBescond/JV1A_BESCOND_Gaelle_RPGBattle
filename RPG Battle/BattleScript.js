//setTimeout(() => { 
//}, timeout);

//Récupération des éléments de Yann
PersonnageYann = document.getElementById("PersonnageYann");
DivYann = document.getElementById("DivYann");
HPYann = document.getElementById("HPYann");
SPYann = document.getElementById("SPYann");
/*
DivBaptiste = document.getElementById("DivBaptiste");
HPBaptiste = document.getElementById("HPBaptiste");

DivGuenole = document.getElementById("DivGuenole");
HPGuenole = document.getElementById("HPGuenole");

DivMarie = document.getElementById("DivMarie");
HPMarie = document.getElementById("HPMarie");
*/

//Récupération des éléments de Gabin
MonstreGabin = document.getElementById("MonstreGabin");
DivGabin = document.getElementById("DivGabin");
HPGabin = document.getElementById("HPGabin");

//Zone d'affichage de texte
afficheAction = document.getElementById("afficheAction");


/*A faire:
- Complétion de toutes les attaques pour riposte
- 3 monstres
- attaques aléatoires monstres
- Mort des personnages (hp<=0)
- Mort des monstres
- Sélection personnage onclick
- Affichage menu de choix selon perso
- Coût mana pouvoir + lock réutlisation (mana interne à 1?)
*/


//Définition des variables utiles
let VarHPYann = 50
let VarHPGabin = 100
//let TourMonstre = false
//let AttaqueMode = false

//Préparation du combat
function setup(){
    afficheAction.innerHTML = "Le combat commence!";
    HPGabin.style.visibility = 'hidden';
    ActionPersonnageAttaque.style.visibility = 'hidden';
    ActionPersonnageDefense.style.visibility = 'hidden';
    ActionPersonnagePouvoir.style.visibility = 'hidden';
}

//Affichage vie monstre selon hover
DivGabin.onmouseover = function(){
    HPGabin.style.visibility = 'visible';
}
DivGabin.onmouseout= function(){
    HPGabin.style.visibility = 'hidden';
}

//Tour joueur 1: Yann
function YannTurn(){
    //Si yann est vivant il peut jouer
    if (VarHPYann > 0){
        afficheAction.innerHTML = "C'est au tour de Yann de jouer.";
        ActionPersonnageAttaque.style.visibility = 'visible';
        TourMonstre = TourMonstre + 1;
    }
    else {
        //Si Yann est mort, il disparait
        PersonnageYann.style.visibility = 'hidden';
        DivYann.style.visibility = 'hidden';
        HPYann.style.visibility = 'hidden';
        SPYann.style.visibility = 'hidden';
        ActionPersonnageAttaque.style.visibility = 'hidden';
        
    }
}

// Tour Monstre 1 : Gabin
function GabinTurn(){
    //Si Gabin est vivant,il riposte
    if (VarHPGabin > 0){
        afficheAction.innerHTML = "Gabin riposte!";
        VarHPYann = VarHPYann -10;
        HPYann.innerHTML = HPYann.innerHTML -10;
        ActionPersonnageAttaque.style.visibility = 'visible';
    }
    else{
        //Si Gabien est mort, il disparait
        MonstreGabin.style.visibility = 'hidden';
        DivGabin.style.visibility = 'hidden';
        HPGabin.style.visibility = 'hidden';
    }
    if (VarHPYann <=0){
        afficheAction.innerHTML = "Yann meurt!";
        PersonnageYann.style.visibility = 'hidden';
        DivYann.style.visibility = 'hidden';
        HPYann.style.visibility = 'hidden';
        SPYann.style.visibility = 'hidden';
        ActionPersonnageAttaque.style.visibility = 'hidden';        
    }
}

//Actions possibles
ActionPersonnageAttaque.onclick = function(Attaque) {
    if (VarHPGabin >0) {
        afficheAction.innerHTML = "Yann attaque Gabin";
        VarHPGabin = VarHPGabin -10;
        HPGabin.innerHTML = HPGabin.innerHTML -10 ;
        setTimeout(GabinTurn, 500);
        ActionPersonnageAttaque.style.visibility = 'hidden';
    }
    YannTurn();
}

//Ordre d'action des personnages
function personnagesTurn (){
    YannTurn();
}

//Ordre d'action des monstres
/*function monstresTurn (){
    GabinTurn();
}
*/

// Definition d'un tour, actions des personnages puis action des monstres
function tour (){
    personnagesTurn();
    //monstresTurn();
}
//Début code
setup()
setTimeout (tour,1500)