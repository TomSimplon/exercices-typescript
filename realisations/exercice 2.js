// Exercice # 1
// - Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.

function fonction1() {
    const address: string = "Le Touvet";
    const zipCode: number = 38660;
    const addressFull: string = `${address} ${zipCode}`;
    console.log('adressFull');
}


// Exercice # 2
// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.
function fonction2() {
    const countries = ["France", "Espagne", "Japon", "Corée du Sud", "Norvège"];
    for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
    }
}

// Exercice # 3
// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.
function exercice3() {
    const sentance: string = "développement";
    const splitedSentance: any[] = sentance.split('');
    console.log(splitedSentance);
}

// Exercice # 4
// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.
function exercice4() {
    let fullSentance: string = '';
    const splitedSentance = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'm', 'e', 'n', 't'];

    for (let i = 0; i < splitedSentance.length; i++) {
        console.log(fullSentance);
        fullSentance = fullSentance + splitedSentance[i];
    }
    console.log(fullSentance);
}