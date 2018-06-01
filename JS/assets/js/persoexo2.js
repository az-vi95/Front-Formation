

// -- 1 Demander à l'user son email
var MailUsers = 'wf3@hl-media.fr'; 'rodrigue@hl-media.fr'; 'nathanael.d@hl-media.fr';
var MdpUsers = 'wf3'; 'wf3'; 'wf3';
var Prenoms = 'Hugo'; 'Rodrigue'; 'Nathanael';
var Noms = 'LIEGEARD'; 'NOUEL'; 'DORDONNE';



// -- 2 Vérifier si @mail correct 

    /*if( MailUser === MailUsers) {
    return true;
}else{
    return false;
}
     {
    var askmdp = prompt("mdp please?");
    if( MdpUser === MdpUsers) 
        else 
}

*/

function connexion(MailUser, MdpUser) {
    if(MailUser === MailUsers && MdpUser === MdpUsers) {
        return true;
    }else {
        return false;
    }
    
}

var MailUser = prompt("Votre mail?");
var MdpUser = prompt("MDP?");

if( connexion(MailUser, MdpUser) ) {
    alert('Bienvenue ' );
} else {
    alert('ATTENTION, email / mot de passe incorrect.');
}



// -- 2a Mail ok 





// -- 3 Demander à l'user son mdp

// -- 4 Vérifier si mdp ok 

// -- 5 Tout est ok 

// -- 6 Echec 
