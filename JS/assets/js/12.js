/*------- LE DOM -------- */

/* Le DOM est une interface de développement en JS
pour HTML. Grâce au DOM , je vais etre en mesure
d'acceder , modifier mon HTML.

L'Objet "document" : c'est le point d'entrée vers 
mon contenu HTML.

Chaque page chargée dans mon navigateur à un objet 
"document".


/**
 * Comment puis je faire pour récupérer les différentes
 * informations de ma page HTML ?
 */

 /* ~~~~ documeent.getElementById ~~~~ */
 /**
* documeent.hetElementById() est une fonction qui
* va permettre de récupérer un élément HTML à partir 
* de son identifiant unique : ID 
*/
var bonjour = document.getElementById('bonjour');
console.log(bonjour);


/* ~~~~ documeent.getElementsByClassName ~~~~ */
/**
 *document.getElementsByClassName() : C'est une 
 fonction qui va permettre de récupérer un ou plusieurs 
 éléments (une liste) HTML à partir de leur classe.  
 */

 var contenu = document.getElementsByClassName('contenu');
 console.log(contenu);

 // -- Me renvoi un tableau JS avec mes élément HTML ( Collection HTML ). /!\

/* ~~~~ documeent.getElementsByTagName ~~~~ */
/**
 *documeent.getElementsByTagName() : C'est une fonction qui va permettre de
 récupérer un ou plusieurs élément (une liste) HTML à partir de leur 
 * nom de balise *
 */
var span = document.getElementsByTagName('span');
console.log(span);
