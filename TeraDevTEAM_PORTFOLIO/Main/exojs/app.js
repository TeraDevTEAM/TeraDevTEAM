
// EXERCICE JAVASCRIPT PARTIE TROIS EXO 8 RENDU DE MONNAIE MJ

// ******************************************************************************************************
// ****************PARTIE 1 SAISIE DES DIFFERENTS PRIX UNITAIRES SUCCESSIFS******************************
// ******************************************************************************************************

// TANT QUE L UTILISATEUR N A PAS SAISI "exit" ALORS :
// -LUI DEMANDER DE SAISIR UN PRIX UNITAIRE
// -AJOUTER LE NOMBRE A LA SOMME
// -INCREMENTER DE 1 LE NOMBRE DE PRIX SAISIS
// -AFFICHER SOMME / NOMBRE DE PRIX SAISIS

// ******************************************************************************************************
// ********************************DECLARATION DES VARIABLES*********************************************
// ******************************************************************************************************
let somme = 0;
let nb_prix = 0;          
let input = ""
let sommearendre = 0;
let inputmontantverseresultfixe ="";

// **********************************************************************************************************
// ************BOUCLE DE SAISIE DU 1ER PROMPT DE SAISIES SUCCESSIVES DES ACHATS******************************
// **********************************************************************************************************
while (input !== "exit") {               
    input = prompt ("WARNING ATTENTION VOUS DEVREZ OBLIGATOIREMENT POUR VOIR LES RESULTATS A LA FIN FAIRE UN CLIC-DROIT DANS VOTRE NAVIGATEUR ( CHROME, FIREFOX, SAFARI, ETC...) ET CHOISIR AVEC CLIC : INSPECTER PUIS ENSUITE CLIQUER SUR 'CONSOLE' SINON VOUS NE VERREZ RIEN...                                                                                             PARTIE 1 SAISIE DES ACHATS : Veuillez saisir (ou re-saisir) un ou des prix d'achat successivement et/ou 'exit' pour quitter")
    if (!isNaN(input)) {            /* PARTIE QUI ADDITIONNE LES PRIX SAISIS SI CE SONT DES BONNES VALEURS ET LES COMPTE*/
        input = parseInt(input*100, 10)/100
        input=parseFloat(input.toFixed(2)); // ARRONDIS QUI...
        console.log(input);
        somme += input
        somme=parseFloat(somme.toFixed(2));
        nb_prix++
        console.log("nb prix : ", nb_prix);
    }
    if (input !== "exit" && isNaN(input)) {    /* PARTIE QUI (SANS SORTIR DU PROMPT AVEC EXIT) INDIQUE DANS LA CONSOLE QUE NE SONT PAS DE BONNES VALEURS NUMERIQUES VALABLES*/
        console.log("PARTIE 1 SAISIE DES ACHATS Désolé je n'ai pas compris votre instruction, Veuillez saisir des chiffres valides et/ou 'exit' pour quitter");
    }
} 
// **********************FIN DE SAISIE DES ACHATS SUCCESSIFS************************************
if (nb_prix <= 0) {
    /* (APRES ETRE SORTI DU PROMPT PAR exit) PARTIE 1 QUI AFFICHE DANS CONSOLE QU IL N Y A PAS EU AU MOINS UN PRIX CORRECT DE SAISI) */
    console.log("PARTIE 1 SAISIE DES ACHATS Pas de prix d'achat saisis pas de montant à payer");
    
} else {
        console.log(`PARTIE 1 SAISIE DES ACHATS TERMINÉE, Le nombre de prix successifs saisis est de : ${nb_prix} , Et la somme totale saisie calculée par cumul est de : ${somme}, Vous devez maintenant saisir un montant versé supérieur ou égal à cette somme de : ${somme}`);   
    } 
// **********************************************************************************************************       
// *******************FIN DE BOUCLE DE SAISIE DU 1ER PROMPT DE SAISIE DES ACHATS****************************
// **********************************************************************************************************


// **********************************************************************************************************
// **********************************PARTIE 2 SAISIE DU MONTANT VERSÉ****************************************
// **********************************************************************************************************
let inputmontantverse = prompt(`PARTIE 2 SAISIE DU MONTANT VERSÉ : Veuillez maintenant saisir un montant versé supérieur ou égal à : ${somme}`)
inputmontantverseresultfixe = inputmontantverse 
do {
    if (isNaN(inputmontantverse)){         
        inputmontantverse = prompt(`PARTIE 2 SAISIE DU MONTANT VERSÉ Désolé je n'ai pas compris votre instruction, Veuillez saisir un chiffre valide car vous avez saisi : ${inputmontantverse}`)        
    }
    if (!isNaN(inputmontantverse)) {
        inputmontantverse = parseInt(inputmontantverse*100, 10)/100
        inputmontantverse=parseFloat(inputmontantverse.toFixed(2)); // ARRONDIS QUI...
        if (inputmontantverse < somme) {
            inputmontantverseresultfixe = inputmontantverse
            inputmontantverse = 0
            inputmontantverse = prompt(`PARTIE 2 SAISIE DU MONTANT VERSÉ Le montant versé est de : ${inputmontantverseresultfixe}, MAIS insuffisant car inférieur au montant des achats de : ${somme}, RESSAISISSEZ DONC UNE VALEUR SUPERIEURE à : ${somme}`)         
        } else {
            sommearendre = inputmontantverse - somme
            sommearendre=parseFloat(sommearendre.toFixed(2)); // ARRONDIS QUI...
            // console.log(`FIN PARTIE 2 SAISIE DU MONTANT VERSÉ`)
          }
    }
} while (inputmontantverse < somme || isNaN(inputmontantverse));

sommearendre = inputmontantverse - somme
sommearendre=parseFloat(sommearendre.toFixed(2)); // ARRONDIS QUI...
console.log(`PARTIE 2 SAISIE DU MONTANT VERSÉ TERMINÉE, La somme totale cumulée "saisie des achats" est de : ${somme}: Le dernier prix valide de montant versé saisi est de : ${inputmontantverse} , Il doit donc vous etre rendu : ${sommearendre}`);

// **********************************FIN DE PARTIE 2 SAISIE DU MONTANT VERSÉ*********************************

// **********************************************************************************************************
// *******************************PARTIE 3 CALCUL DU RENDU DE MONNAIE****************************************
// **********************************************************************************************************

// *******************************************DECLARATION DES VARIABLES PRINCIPALES***********************************************
var piecesetbillets=new Array(500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01); /* DECLARATION TABLEAU VALEUR DES PIECES ET BILLETS */
var typepiecesetbillets=new Array('Billet', 'Billet', 'Billet', 'Billet', 'Billet', 'Billet', 'Billet', 'Pièce', 'Pièce', 'Pièce', 'Pièce', 'Pièce', 'Pièce', 'Pièce', 'Pièce'); /* DECLARATION TYPES DES PIECES ET BILLETS */
// var sommearendre=prompt("Somme à rendre : ");     /* DECLARATION DE LA SOMME A RENDRE */
// console.log(`PARTIE 3 RENDU DE MONNAIE sommearendre = ${sommearendre}`);
var sommearendrefixe=sommearendre;
var ntyppb=piecesetbillets.length,change=[];      /* ntyppb= PIECES ET BILLETS DIFFERENTS */

// ******************************************BOUCLE CALCUL RENDU DE MONNAIE***************************************************************
while (ntyppb) change[--ntyppb]=0;// TABLEAU DE ZERO POUR LES PIECES ET BILLETS A RENDRE
 
while (sommearendre){
    while (piecesetbillets[ntyppb]<=sommearendre) {
        sommearendre-=piecesetbillets[ntyppb];
        sommearendre=parseFloat(sommearendre.toFixed(2)); // ARRONDIS QUI...
        change[ntyppb]++;
    }
    if (0.01<piecesetbillets[ntyppb]) ntyppb++;
}
// ******************************FABRICATION DE LA CHAINE RENDU DE MONNAIE************************************************************
console.log('SOMME A RENDRE : '+sommearendrefixe+'€ SOUS LA FORME DE : ');
var str10="Rendre "; // FABRICATION DEBUT DE LA CHAINE RENDU DE MONNAIE
ntyppb=0;// FABRICATION DE LA CHAINE RENDU DE MONNAIE
while (ntyppb<piecesetbillets.length) {
    if (c=change[ntyppb]) 
    str10+=c+' X '+typepiecesetbillets[ntyppb]+(1<c?'s':'')+' de '+piecesetbillets[ntyppb]+'€, ';
    ntyppb++}
console.log(str10, 'FIN')
console.log('PARTIE 3 RENDU DE MONNAIE TERMINÉE')

// *******************************FIN PARTIE 3 CALCUL DU RENDU DE MONNAIE****************************************

