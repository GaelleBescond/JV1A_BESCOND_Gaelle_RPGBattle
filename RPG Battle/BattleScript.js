

    afficheAction = document.getElementById("afficheAction");
    afficheAction.innerHTML = "Le combat commence!";



//Personnage1: Yann
DivYann = document.getElementById("DivYann");
HPYann = document.getElementById("HPYann");
DivYann.onclick = function() {
    afficheAction.innerHTML = "Vous sélectionnez Yann";
    }

//Personnage2: Baptiste
DivBaptiste = document.getElementById("DivBaptiste");
HPBaptiste = document.getElementById("HPBaptiste");
DivBaptiste.onclick = function() {
    afficheAction.innerHTML = "Vous sélectionnez Baptiste";
    }

//Personnage3: Guenole
DivGuenole = document.getElementById("DivGuenole");
HPGuenole = document.getElementById("HPGuenole");
DivGuenole.onclick = function() {
    afficheAction.innerHTML = "Vous sélectionnez Guenole";
    }

//Personnage4: Marie
DivMarie = document.getElementById("DivMarie");
HPMarie = document.getElementById("HPMarie");
DivMarie.onclick = function() {
    afficheAction.innerHTML = "Vous sélectionnez Marie";
    }

//Actualisation Dialogue
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
