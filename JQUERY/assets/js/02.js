/* ------------------------
LES SELECTEURS jQUERY
-------------------------*/

// -- Format : $('selecteur');
// -- En jQuery , tous les selecteurs CSS sont disponibles...

$(function() {
    // -- DOM READY !
    l = e => console.log(e);

    // -- Sélectionner toutes les balises SPAN !

        // EN JS 
        l(document.getElementsByTagName('span') );
       
       // EN JQ
        l( $('span'));

    // -- Je veux sélectionner un ID..

        // EN JS
        l(document.getElementsByID('menu') );

        // EN JQ 
        l( $('#menu') );

    // -- Je veux sélectionner une classe...

        // EN JS
        l( document.getElementsByClassName('MaClasse') );
        
        // EN JQ
        l( $('.MaClasse') );
    
    // -- Sélectionner un Attribut

    l($('[href="https://www.google.fr"]') );
     
});