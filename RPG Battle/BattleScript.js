//setTimeout(() => { 
//}, timeout);


DivYann = document.getElementById("DivYann");
HPYann = document.getElementById("HPYann");
DivBaptiste = document.getElementById("DivBaptiste");
HPBaptiste = document.getElementById("HPBaptiste");
DivGuenole = document.getElementById("DivGuenole");
HPGuenole = document.getElementById("HPGuenole");
DivMarie = document.getElementById("DivMarie");
HPMarie = document.getElementById("HPMarie");
DivMonstre1 = document.getElementById("DivMonstre1");
HPMonstre1 = document.getElementById("HPMonstre1");


afficheAction = document.getElementById("afficheAction");
afficheAction.innerHTML = "Le combat commence!";


/*A faire:
- Riposte du monstre
- Complétion de toutes les attaques pour riposte
- 3 monstres
- attaques aléatoires monstres
- Mort des personnages (hp<=0)
- Affichage pv monstres sur hover
- Mort des monstres
- Sélection personnage onclick
- Affichage menu de choix selon perso
- Coût mana pouvoir + lock réutlisation (mana interne à 1?)
*/

//Personnages
    //Personnage1: Yann
    DivYann.onclick = function() {
        afficheAction.innerHTML = "Vous sélectionnez Yann";
        Attaque()
        }

    //Personnage2: Baptiste
    DivBaptiste.onclick = function() {
        afficheAction.innerHTML = "Vous sélectionnez Baptiste";
        }

    //Personnage3: Guenole
    DivGuenole.onclick = function() {
        afficheAction.innerHTML = "Vous sélectionnez Guenole";
        }

    //Personnage4: Marie
    DivMarie.onclick = function() {
        afficheAction.innerHTML = "Vous sélectionnez Marie";
        }

//Monstres
    //Monstre1 

//Actions possibles
    //Action attaque
    ActionPersonnageAttaque.onclick = function(Attaque) {
        afficheAction.innerHTML = "Sélectionnez une cible à attaquer";
        x = true;

    }
    //Action défense
    ActionPersonnageDefense.onclick = function(Defense) {
        afficheAction.innerHTML = "Sélectionnez une cible";
        HPMonstre1 = document.getElementById("HPMonstre1");
        afficheAction.innerHTML = "Sélectionnez une cible à protéger";
    }

    //Action Pouvoir
    ActionPersonnagePouvoir.onclick = function(Pouvoir) {
        afficheAction.innerHTML = "Sélectionnez une cible pour le pouvoir";
  
    }

    DivMonstre1.onclick = function(){
        if (x== true) {
            HPMonstre1.innerHTML = HPMonstre1.innerHTML-40;
            HPMonstre1 = document.getElementById("HPMonstre1");
            afficheAction.innerHTML = "Monstre 1 perd 40 hp!";
            x = false
        }
        else {            
            afficheAction.innerHTML = "C'est un monstre";
        }
    }