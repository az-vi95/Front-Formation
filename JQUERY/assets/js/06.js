/* --------------------------------
LES SELECTEURS D'ENFANTS jQUERY
---------------------------------*/

$(function() {
    l = e => console.log(e);

    //-- Je souhaite selectionner toutes les divs de ma page
    l($('div'));

    // -- Je souhaite selectionner la balise nav de ma page
    l($('#menu'));
    // ou  l($(nav));

    // Je souhaite tous les éléments descendants directs (enfants) qui sont dans "nav"
    l( $('#menu').children() );

    // -- Parmi ces descendants ,uniquement l'éléments "ul"
    l( $('#menu').children('ul') );

    // -- Je souhaite récupérer tous les éléments de "li" de mon "ul"
    l( $('#menu').children('ul').find('li') );

    // -- Je souhaite récupérer tous le 2eme éléments de mes "li"
    l( $('#menu').find('li').eq(1) );

    // -- Je souhaite connaitre le voisin immédiat de mon "menu"
    l( $('#menu').next() );
    l( $('#menu').next().next() ); // -- Le voisin du voisin
    l( $('#menu').pre() ); // -- Le voisin d'avant

    // -- LES PARENTS
    l( $('#menu').parent() );

});