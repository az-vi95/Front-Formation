/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

/*
var prenom = prompt("Quel est ton prénom?");
if (prenom.toLowerCase() == "sylvain")
   
age = 30;
var age = prompt("Waw ! Bonjour sylvain ,Quel age as-tu ?");


if (age.toLowerCase() == "30")
    alert("Tu es donc né en 1987.");

document.write("Bonjour, tu as 30 ! ");

*/

/*
var prenom = prompt("Quel est ton prénom?");
if (prenom.toLowerCase() == "sylvain")
   
var age = prompt("Waw ! Bonjour sylvain ,Quel age as-tu ?");


function annee(resultat = 2018 - age )
if (resultat.toLowerCase() == "")
    alert("Tu es donc né en 1987.");

document.write("Bonjour, tu as 30 ! "); */



// -- 1. Initialisation des variables
var ObjetDate = new Date();
var AnneeActuelle = ObjetDate.getFullYear();
// -- 2. Création d'une Fonction
function Hello() {

    //--2a. Je demande à l'user son Prénom
    var prenom = prompt("Hello! What is your name?","<Saisir votre Prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    //--2b. Je lui demande son age
    var age = parseInt(prompt("Hello " + prenom + " ! How old are you?","<Saisir votre Age>"));
    // age = parseInt(age);
    console.log(age);
    console.log(typeof age);

    //--2c. Déduire l'année de naissance et l'afficher dans une alerte
    var AnneeDeNaissance = AnneeActuelle - age;
    alert('AMAZING ! SO you were born in ' + AnneeDeNaissance);
    

    //--2d. Afficher dans la page un récapitulatif
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
}
// -- 3. Execution de la fonction
Hello();