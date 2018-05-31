/*------- LES FONCTIONS ------*/

/**
 * Déclarer une fonction
 * NOTA BENE : Cette fonction ne retourne aucune valeur
 * et ne prend pas de paramètres.
 */
function Bonjour() {

    /**
     * Lors de l'appel de cette fonction,
     * les instructions ci-dessous seront executérs...
     */
    alert('Bonjour!');
}

/**
 * Je vais appeler ma fonction "Bonjour" et déclencher
 * ses instructions
 */
Bonjour();

// function NomDeMaFonction(Argument 1, Argument 2, Argument n) {
// Les instructions...    
//}

/**
 * Déclarer une fonction qui prend un argument ( un paramètre ) 
 */

 function ditBonjour(Prenom, Nom) {
     document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>" )
 }
 ditBonjour("Hugo", "LIEGEARD");


 /* -----------------------
    EXERCICE : 
    Créez une fonction permettant d'effectuer l'addition
    de deux nombres (nb1 et nb2) passés en paramètre

 --------------------------*/

 function addition(resultat = nb1 + nb2) {
     document.write(  resultat )
}
addition(2 + 11)


function addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "</p>");