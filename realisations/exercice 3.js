// Exercice # 1
// Créer une constante "data", elle contient un tableau avec les valeurs suivantes : ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'], veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "data" et n'afficher dans la console du navigateur que les prénoms avec moins ou egale 5 lettres.
const data: string[] = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'];
for (const name of data) {
  if (name.length <= 5) {
    console.log(name);
  }
}


// Exercice # 2
// Créer une CONSTANTE "countries", elle contient un tableau avec 5 pays de votre choix, veillez à bien le typer.
// Créer une VARIABLE "sentence", elle contient une string vide, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "countries" et ajouter chaque valeur dans la string de la variable "sentence" avec une virgule entre chaque.
// Lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Attendu : "France, Allemagne, Italie, Suisse, Belgique"
const countries: string[] = ["France", "Allemagne", "Italie", "Suisse", "Belgique"];
let sentence: string = "";
for (let i = 0; i < countries.length; i++) {
  sentence += countries[i];
  if (i !== countries.length - 1) {
    sentence += ", ";
  }
}
console.log(sentence);

// Exercice # 3
// Créer une constante "numbers", elle contient le tableau suivant [123, 999, 340, 12390], veillez à bien le typer.
// Créer une variable "results", elle contient un tableau vide. Ce tableau servira plus tard, veillez à bien le typer.
// À l'aide d'une boucle multiplier chaque valeur du tableau "numbers" par 180.
// Vous stockerez chaque résultat dans le tableau "results", lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Aide : regarder sur Google comment insérer des valeurs dans un tableau, ici on cherche à pousser dans le tableau "results"
const numbers: number[] = [123, 999, 340, 12390];
let results: number[] = [];
for (let i = 0; i < numbers.length; i++) {
  results.push(numbers[i] * 180);
}
console.log(results);


// Exercice # 4
// Créer une constante contenant l'objet suivant : { name: 'Marchal', surname: 'Mickeal', age: 19 }, veillez à bien le typer.
// À l'aide d'une condition vérifier si Mickeal est bien majeur, si c'est le cas afficher un message dans la console du navigateur.
const person = { name: 'Marchal', surname: 'Mickeal', age: 19 };
if (person.surname === 'Mickeal' && person.age >= 18) {
  console.log('Mickeal est majeur');
}

// Exercice # 5
// Créer une constante contenant un objet, cet objet contient les clés suivantes: "nom", "prénom", "age". Vous êtes libres de choisir les valeurs associées, veillez à bien typer.
// Exploitez l'objet de sort à afficher dans le navigateur une phrase se présentant comme cela : "bonjour mon nom est <insérer nom> <insérer prénom>, j'ai <insérer age>"
const Objet = {nom: "Pustel", prenom: "Tom", age: 23};
const phrase = `Bonjour, mon nom est ${Objet.nom} ${Objet.prenom}, j'ai ${Objet.age} ans.`;
console.log(phrase);


// Exercice # 6
// Créer une constante contenant contenant un tableau de 5 objets, chaque objet à la forme de celui de l'exercice # 5, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau d'objet et afficher dans la console du navigateur la même phrase que l'exercice # 5 pour chaque valeur du tableau.
const personnes = [
    { 
      nom: "Pustel", 
      prenom: "Tom", 
      age: 23
    },
    { 
      nom: "Pustel", 
      prenom: "Eliott", 
      age: 23 
    },
    { 
      nom: "Pustel", 
      prenom: "Noah", 
      age: 20 
    },
    { 
      nom: "Tisserand", 
      prenom: "Karine", 
      age: 52 
    },
    { 
      nom: "Tisserand", 
      prenom: "Bernard", 
      age: 70 
    }
  ];
    for (let i = 0; i < personnes.length; i++) {
    console.log(`Bonjour, mon nom est ${personnes[i].nom} ${personnes[i].prenom}, j'ai ${personnes[i].age} ans.`);
  }


// Exercice # 7
// Pousser ce que vous avez produit dans votre repo Github et partagez moi l'url ;)

