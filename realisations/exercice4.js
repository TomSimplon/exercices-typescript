// Exercice # 1
// Typer la constante "students"
// Séparer les étudiants majeurs et non-majeurs dans deux tableaux différents.
// Faite la moyenne de l'âge des étudiants
interface Student {
    name: string;
    age: number;
    major: boolean;
  }

const students: Student[] = [
    {
        name: 'Paul'
        age: 19
        major: true
    },
    {
        name: 'Julie'
        age: 16
        major: false
    },
    {
        name: 'Jacques'
        age: 49
        major: true
    },
    {
        name: 'Marie'
        age: 12
        major: false
    }
]
const adultStudents: Student[] = students.filter(student => student.major);
const minorStudents: Student[] = students.filter(student => !student.major);
const averageAge: number = students.reduce((total, student) => total + student.age, 0) / students.length;

// Exercice 2
// Typer la constante "fruits"
// Séparer les fruits avec un date de péremption de : 
// - moins de deux jours
// - entre trois jours et une semaine
// - plus d'une semaine
interface fruit = {
    name: string;
    expirationInDays: number;
  };

const fruits: fruit[] = [
    {
        name: 'Pomme'
        expirationInDays: 1
    },
    {
        name: 'Poire'
        expirationInDays: 16
    },
    {
        name: 'Citron'
        expirationInDays: 5
    },
    {
        name: 'Tomate'
        expirationInDays: 4
    }
]

const expiring2days: fruit[] = [];
const expiringOneWeek: fruit[] = [];
const expiringMoreOneWeek: fruit[] = [];

fruits.forEach((fruit) => {
  if (fruit.expirationInDays < 2) {
    expiring2days.push(fruit);
  } else if (fruit.expirationInDays <= 7) {
    expiringOneWeek.push(fruit);
  } else {
    expiringMoreOneWeek.push(fruit);
  }
});

// Exercice 3
// Typer la constante "players"
// Pour chaque joueur afficher dans la console un message comme celui-ci :
// "<nom_du_joueur> possède les cartes : <carte_1>, <carte_2>, <carte_3>, <carte .......>"
interface player {
    name: string;
    cards: string[];
  }

const players: player[] = [
    {
        name: 'Marie'
        cards: ['Dracofeu', 'Chenipan', 'Rondoudou']
    },
    {
        name: 'Bilal'
        cards: ['Mew', 'Tortank']
    },
    {
        name: 'Sarah'
        cards: ['Dracoloss', 'Dardagnan', 'Roucoul']
    },
    {
        name: 'Joe'
        cards: ['Roucoups', 'Colosinge', 'Insecateur', 'Tignon']
    }
]

players.forEach(player => {
    console.log(`${player.name} possède les cartes : ${player.cards.join(', ')}`);
  });