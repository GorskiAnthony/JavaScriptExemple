/** Exo if */
// Maïté

// declaration nombre etudiant
var nombreEtudiant = 11;

// Si nombreEtudiant = à 12 ALORS
if (nombreEtudiant == 12) {
	// affiche ça
	console.log("Bonjour les etudiants");
} else {
	//affiche ça
	console.log("Les absents, levez la main");
}

/********** */

/** Exo ternaire */
// Jérémy

var operateurTernaire = true;
console.log(operateurTernaire ? "j'ai compris" : "j'ai pas compris");

/********* */

/** Exo comparaison */
// Manon

var nombreTotalEtudiant = 12;
var nombreActuelEtudiant = 12;

if (nombreTotalEtudiant == nombreActuelEtudiant) {
	console.log("on est tous la ");
} else {
	console.log("y a pas tout le monde");
}

/** Operateur */
/**

- ==
Celui ci compare si le nombre à gauche est le même qu'à droite
- ===
Ceci est la strict égalité, c'est à dire qu'il va vérifier le contenu et son type.
- !=
Celui ci c'est l'opérateur d'inegalité, en soit il va vérifier si l'un est différent de l'autre.
- !==
Celui ci c'est l'opérateur de strict d'inegalité, en soit il va vérifier si l'un est différent de l'autre ainsi que son typage.
- > ou >=
Plus grand que OU plus grand ou égal
- < ou <=
Plus petit que OU plus petit ou égal
 */
/********* */

var a = 1,
	b = 2;

if (a > b) {
	console.log("plus grand");
} else {
	console.log("plus petit");
}

/** Exo Boucle
 *
 * 1/ while
 */
// Romain

var nombre = 18;
var nombre2 = 18;

// Tant Que nombre < 10 on affiche nombre
while (nombre <= 10) {
	console.log(`La valeur de nombre = ${nombre}`);
	// nombre = nombre + 1;
	// nombre += 1;

	// nombre++;
	// ++nombre;

	nombre++;
}

/** Exo Do While */
// Denis

// Tant Que nombre2 < 10 on affiche nombre
do {
	console.log(`La valeur du 2eme nombre = ${nombre2}`);
	// nombre = nombre + 1;
	// nombre += 1;

	// nombre++;
	// ++nombre;

	nombre2++;
} while (nombre2 <= 10);

/******** */
/*
    Composition des 3 éléments qui controle la boucle

    1/ la variable de controle (i dans notre cas)
    2/ Condition à vérifier
    3/ Incrémentation de la variable

    for(1; 2; 3) {
        [...]
    }
*/

/** Exo For */
// Mike

// pour i ← 0 jusqu'à i <10 par pas de 1
// for (var i = 0; i < 10; i++) {
// 	console.log(`La variable i = ${i}`);
// }

for (var i = 0; i < 15; i++) {
	// si i = 8 > console.log("i vaut 8")

	//if (i = 8;) ❌

	// Si i est strictement egal a 10 alors
	// Jojo
	if (i === 10) {
		// afficher "la boucle s'arrete rrête à 10"
		console.log(`La boucle s'arrete à ${i}`);
		// mettre fin à la boucle
		break;
	}

	console.log(`La variable i = ${i}`);
}

/********** */

/** Exo Switch case */
// Julien

var fruit = "Pomme";

switch (fruit) {
	case "Pomme":
		console.log("C'est une pomme !");
		break;
	case "Banane":
		console.log("Tu as la banane !");
		break;
	case "Mangue":
		console.log("Huum les mangues !");
		break;
	default:
		console.log(
			`Tu aimes les ${fruit}, mais il n'est pas dans le switch ?!`
		);
}

// if (opérateur === "+") {
// 	console.log("+");
// } else if (opérateur === "*") {
// 	console.log("*");
// } else if (opérateur === "/") {
// 	console.log("/");
// } else if (opérateur === "-") {
// 	console.log("-");
// } else {
// 	console.log("L'operateur nest pas présent");
// }

/***************** */

/** Exo forEach */

// tableau
var fruits = ["banane", "kiwi", "orange"];

// objet
var animals = {
	species: "dog",
	name: "Gallia",
	weight: "20kg",
	age: 8,
};

// for (fruit in fruits) {
// 	console.log(fruit);
// 	console.log(`Mon fruit préféré est le ${fruits[fruit]}`);
// }

for (prop in animals) {
	//console.log(prop);
	console.log(`clé : ${prop} valeur ${animals[prop]} `);
}

/************** */
