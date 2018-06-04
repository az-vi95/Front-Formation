            /* ----- LES EVENEMENTS ------ */
/**
Les évenements vont me permettre de déclencher une fonction,
c'est à dire une série d'instructions;suite à une action de 
utilisateur...
 
OBJECTIF : Etre en mesure de capturer ces évènements 
afin d'exécuter une fonction.


Les Evenements : MOUSE ( Souris )
    
    click : au clic sur un élément;
    mouseenter : la souris passe au dessus de la zone d'un élément;
    mouseleave : la souris sors de cette zone.

Les Evenements : KEYBOARD ( Clavier ) 

    keyup : une touche du clavier a été relachée;
    keydown : une touche est enfoncée.

Les Evenements : WINDOW ( Fenetre )

    scroll : défilement de la fenêtre;
    resize : redimentionnement de la fenêtre. 

Les Evenements : FORM ( Formulaire )

    change : pour les éléments <input>,<select> et <textarea> ;
    submit : à l'envoi ( soumission ) du formulaire;
    input : pour capter la saisie d'un utilisateur sur un champ <input>.



############ LES ECOUTEURS D'EVENEMENTS ###########

Pour attacher un évenement à un élément ,ou autrement dit,
pour déclarer un écouteur d'évenement qui se chargera de déclencher 
une fonction, je vais utliser la syntaxe suivante : 

------------------------------------------- */
var p = document.getElementById('MonParagraphe');

// Je souhaite que mon paragraphe soit rouge au clic de la souris

function changerLaCouleurEnRouge() {
    p.style.color = "red";
}

p.addEventListener('click', changerLaCouleurEnRouge);

/* --------------------------------------------------\
|               EXERCICE PRATIQUE                    |
|
|A l'aide de JS créez un champ "input" type texte 
|avec un ID unique.Affichez ensuite dans une alerte,
|la saisie de l'user.
|---------------------------------------------------*/


var input = document.createElement('input');


// -- Attribution d'un attribut
//<input type="text" placeholder="Saisissez un contenu..."
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez un contenu...');
input.id="MonID";

// -- Ajout dans la page.
document.body.appendChild(input);

function voirLaSaisieDemonInput(){
    alert(input.value);
}

input.addEventListener('change',voirLaSaisieDemonInput);




























