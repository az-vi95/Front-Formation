/*--------- LES BOUCLES -------- */

// -- Pour i = 0 ; Tant que  i est strictiment inférieur ou égale à 10 ; alors, j'incrémente i de 1.
for( let i = 0 ; i <= 10 ; i++ ) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

var j = 1;
while(j <= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');

    // ATTENTION A NE PAS OUBLIER L'INCREMENTATION ! 
    j++;
}

/*-- EXERCICES*--*/

var Prenoms = ['Jeans', 'Marc', 'Mathieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

/**
 * CONSIGNE : Grace à une boucle FOR , affichez la liste des prénoms
 * du tableau ci -dessus dans la console, ou sur votre page.
 */

 console.log(Prenoms);
 for( let i = 0 ; i < Prenoms.length ; i++ ) {
     console.log(Prenoms[i]);
 }

 console.log('---');

 var j = 0;
 while( j < Prenoms.length) {
     console.log(Prenoms[j]);
     j++;
 }

 // -- Avec la Boucle forEach
 // -- ATTENTION A LA PERFORMANCE!!!

 Prenoms.forEach(afficheUnPrenom);
 function afficheUnPrenom(prenom, i) {
     console.log(i + ' ' + prenom);
 }