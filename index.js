/** ÉTUDIANTS */

// Maïté(pikilla) ✅
// Jérémy ✅
// Manon ✅
// Romain (Akzyos) ✅
// Denis, le pingouin masqué, est dans la place ! ✅
// julien ✅
// raiden974 mike (lecoquin) ✅
// AsuraPikachu ✅
// Dorian ❌
// Guillaume ❌
// Stan ❌
// Josiane ❌

/** Exo 1 */
/** Minimum */

// var max = 500;

// var nbRandom = Math.floor(Math.random() * (max + 1));

// var nbUser = prompt(`Veuillez choisir un nombre compris entre 0 et ${max}`);

// while (nbUser != nbRandom) {
// 	if (nbUser > nbRandom) {
// 		nbUser = prompt("plus petit");
// 	} else {
// 		nbUser = prompt("Plus grand");
// 	}
// }

// alert("Tu as gagné !");

/** Amélioration */

// var max = 500;
// var nbRandom = Math.floor(Math.random() * Math.floor(max));

// var tentative = 0;

// var nbUser = prompt(`Trouvez le nombre entre 0 et 500`);

// while (nbUser != nbRandom) {
// 	tentative++;
// 	if (nbUser > nbRandom) {
// 		nbUser = prompt("plus petit");
// 	} else {
// 		nbUser = prompt("Plus grand");
// 	}
// }

// alert(`Tu as gagné en ${tentative} coups`);

/******** */

var nbrRandom = Math.floor(Math.random() * 500) + 1;

var nombre, compteur;

for (compteur = 1; compteur <= 10; compteur++) {
	nombre = parseInt(prompt("donnez un chiffre:"), 10);

	if (nombre === nbrRandom) {
		alert("Bravo");
		break;
	} else if (nombre > nbrRandom) {
		prompt("trop grand");
	} else if (nombre < nbrRandom) {
		prompt("trop petit");
	} else {
		prompt("ce n'est pas un chiffre");
		compteur -= 1;
	}
}

alert(`c'est fini. le chiffre cherche est :${nbrRandom}`);
