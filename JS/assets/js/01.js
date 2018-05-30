/*alert('WOW ! Tu es sur ma page !');
alert('Tu es le Bienvenu');//

// Deux slash pour faire un commentaire uniligne

/*
    Ici, je peux faire un commentaire sur plusieurs lignes.

    RACCOURCI : CTRL + :
            ou: CTRL + SHIFT + : 

*/

// -- 1 : Déclarer une variable JS
var Prenom;

// -- 2 : Affecter une valeur 
Prenom ="Sylvain";

// -- 3 : Afficher la valeur de ma variable dans la console.
console.log(Prenom);

/* ---------- LES TYPES DE VARIABLES -------------*/

//Ici ,typeof ,me permet de connaitre le type de ma variable.
console.log(typeof Prenom);

// -- Déclaration et Affectation d'un Nombre
var Age = 40;

//- Afficher dans la console.
console.log(Age);

// -- Connaitre son type
console.log(typeof Age);

/*------------ LA PORTE DES VARIABLES---------

Les variables déclarées directement à la racine du fichier JS 
sont appelés variables GLOBABLES.

Elles sont disponibles dans l'ensemble de votre document,y
compris dans les fonctions.

###

Les variables déclarées à l'intérieur d'une fonction sont 
appelés variables LOCALES.

Elles sont disponible UNIQUEMENT dans le scope de la fonction.

-------------------------------------------- */

// -- Les variables de type FLOAT 
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens ( VRAi / FAUX )
var unBooleen = false; //true
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les Constantes
/**
 * La déclaration CONST permet de créer une constante accesible 
 * uniquement en lecture et sa valeur ne pourra pas être modifiée
 * par des réaffectations ultérieures.Une constante ne peut pas 
 * être déclarée à nouveau...
 * 
 * Généralement par convention,les constantes sont en majuscule.
 */

 const HOST = "localhost";
 const USER = "root";
 const PASSWORD = "mysql";

 // -- Je ne peux pas faire 
 ////USER = "Sylvain";
 //Uncaught TypeError: Assignment to constant variable.

 /*------------- LA MINUTE INFO-----------------------------

 Au fur et à mesure que l'on affecte opu ré-affecte des valeurs
 à une variable, celle ci prend la nouvelle valeur et le 
 nouveau type !

 En Javascript (ECMA Script) ;les variables sont auto-typées.

 Pour convertir une variable de type NUMBER en STRING et STRING 
 en NUMBER,je peux utiliser les fonctions natives de JS. 

 ------------------------------------------------------------ */
 
 var unNombre = "24";
 console.log(unNombre);
 console.log(typeof unNombre);

 /**
  * La fonction parseInt() pour retourner un Entier à partir
  * de ma chaine de caractère.
  */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je ré-affecte une valeur à ma variable//
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un Nombre en string avec toString()
unNombre = 10;
var monNombreDeTypeString = unNombre.toString();
console.log(unNombre);
console.log(typeof monNombreDeTypeStringe); 


