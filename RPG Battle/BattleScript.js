

    afficheAction = document.getElementById("afficheAction");
    afficheAction.innerHTML = "Le combat commence!";



//Personnage1
DivPersonnage1 = document.getElementById("DivPersonnage1");
HPPersonnage1 = document.getElementById("HPPersonnage1");

//Sélection personnage
afficheAction.onclick = function() {
    afficheAction.innerHTML = "Blabla!";
}


//Action attaque
ActionPersonnageAttaque.onclick = function() {
    HPMonstre1.innerHTML = HPMonstre1.innerHTML-10;
    HPMonstre1 = document.getElementById("HPMonstre1");
    afficheAction.innerHTML = "Monstre 1 perd 10 hp!";
}
//Action défense
ActionPersonnageDefense.onclick = function() {
    HPMonstre1 = document.getElementById("HPMonstre1");
    afficheAction.innerHTML = "Personnage 1 se protège!";
}

//Action Pouvoir
ActionPersonnagePouvoir.onclick = function() {
    HPMonstre1.innerHTML = HPMonstre1.innerHTML-40;
    HPMonstre1 = document.getElementById("HPMonstre1");
    afficheAction.innerHTML = "Monstre 1 perd 40 hp!";
}

//Monstre 1
DivMonstre1 = document.getElementById("DivMonstre1");
HPMonstre1 = document.getElementById("HPMonstre1");

    //Monstre riposte pas au clic mais APRES toutes les actions joueurs
DivMonstre1.onclick = function() {
  //  HPMonstre1.innerHTML = HPMonstre1.innerHTML-10;
  //  afficheAction.innerHTML = "Monstre 1 perd 10 hp!";
}
