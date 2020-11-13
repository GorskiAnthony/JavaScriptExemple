/** ÉTUDIANTS */

// Maïté(pikilla) ✅
// Jérémy ✅
// Manon ✅
// Romain (Akzyos) ✅
// Denis, le pingouin masqué, est dans la place ! ✅
// julien ✅
// raiden974 mike (lecoquin) ✅
// AsuraPikachu ❌
// Dorian ❌
// Guillaume ❌
// Stan ❌
// Josiane ❌

/** Exo 1 */

var max = 500;

var nbRandom = Math.floor(Math.random() * max);

var nbUser = prompt("Veuillez choisir un nombre compris entre 0 et 500");
console.log(nbRandom);

do {
	if (Number(nbUser) > nbRandom) {
		nbUser = prompt("plus petit");
	} else if (Number(nbUser) < nbRandom) {
		nbUser = prompt("Plus grand");
	}
} while (nbUser != nbRandom);

alert("tu as gagné !");
/******** */
