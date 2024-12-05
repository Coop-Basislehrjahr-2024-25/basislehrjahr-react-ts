# Aufgabe

Erstelle eine Applikation welche eine zufällige Zahl generiert. Der Benutzer wird gefragt diese Zahl zu erraten. Die Applikation läuft so lange weiter bis die Zahl erfolgreich erraten wurde.  

Informiere dich im Internet, schau in die [Aufgaben Hilfe](#aufgaben-hilfe) oder in [00-cheatsheet](00-cheatsheet) wie man mit Funktionen und Schleifen umgeht. Möglicherweise hilft dir die [Aufgaben Hilfe aus in 01-greeter](01-greeter) weiter.
## Aufgaben Hilfe

<details>
  <summary>Wie generiere ich eine zufällige Zahl?</summary>

  ```typescript
const maximaleZahl = 10;
const minimaleZahl = 1;
const rndNumber = Math.floor(Math.random() * (maximaleZahl - minimaleZahl + 1) + minimaleZahl);
  ```
</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

  ```typescript
import * as process from 'node:process';
import * as rl from 'node:readline/promises';

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

// endloser loop, bis dieser unterbrochen wird. 
while (true) {
	const answer = await readline.question("Errate die Zahl zwischen 1 - 10");

	// parseInt wird benötigt, da answer ein String ist. randomNumber ist eine Number, daher muss der Wert geparsed werden.
	if (parseInt(answer) == randomNumber) {
		// bricht aus dem Loop heraus.
		break;
	} else {
		console.log(`${answer} war nicht die richtige Zahl`);
	}
}

console.log(`Glückwunsch, die Zahl war ${randomNumber}, du hast sie erraten!`);
process.exit();  // braucht es nur wegen dem dev Server
  ```

</details>

## Challenge

Nun drehst du den Spiess um. Du denkst dir vor dem Start eine Zahl aus in einem von dir gewählten Zahlenbereich aus. Der Zahlebereich wird am Start der Applikation von der Applikation gefragt. Diese versucht jetzt deine Zahl zu erraten.
Mit (y/n) Eingaben kannst du entscheiden ob das Programm richtig geraten hat.

Bonus Aufgaben: 
* Gib aus wie viele Versuche die Applikation gebraucht hat.
* Die Applikation merkt sich welche Zahlen es bereits versucht hat, diese Zahlen werden nicht erneut gefragt.
## Challenge Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

  ```typescript
import * as process from 'node:process';
import * as rl from 'node:readline/promises';

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});
const maximaleZahl = parseInt(await readline.question("Was ist die höchst möglichste Zahl?"));
const minimaleZahl = parseInt(await readline.question("Was ist die minimal Zahl?"));

function createRandomNumber(): number {
	return Math.floor(Math.random() * (maximaleZahl - minimaleZahl + 1) + minimaleZahl);
}

console.log("Ich beginne mit dem erraten deiner Zahl.");
while (true) {
	const guessedNumber = createRandomNumber();
	const answer = await readline.question(`Ist deine Zahl ${guessedNumber}? (y/n)`);
	if (answer == "y") {
		console.log(`Die Zahl war wohl ${guessedNumber}!`);
		break;
	} else {
		console.log(`${guessedNumber} war wohl nicht richtig, ich versuche es nochmals`);
	}
}

process.exit();
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Bonus 1)</summary>

  ```typescript
import * as process from 'node:process';
import * as rl from 'node:readline/promises';

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});
const maximaleZahl = parseInt(await readline.question("Was ist die höchst möglichste Zahl?"));
const minimaleZahl = parseInt(await readline.question("Was ist die minimal Zahl?"));

function createRandomNumber(): number {
	return Math.floor(Math.random() * (maximaleZahl - minimaleZahl + 1) + minimaleZahl);
}

console.log("Ich beginne mit dem erraten deiner Zahl.");
let guesses = 0;
while (true) {
	const guessedNumber = createRandomNumber();
	guesses++;
	const answer = await readline.question(`Ist deine Zahl ${guessedNumber}? (y/n)`);
	if (answer == "y") {
		console.log(`Die Zahl war wohl ${guessedNumber}! Ich habe ${guesses} Versuche gebraucht`);
		break;
	} else {
		console.log(`${guessedNumber} war wohl nicht richtig, ich versuche es nochmals`);
	}
}

process.exit();
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Bonus 2)</summary>

  ```typescript
const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});
const maximaleZahl = parseInt(await readline.question("Was ist die höchst möglichste Zahl?"));
const minimaleZahl = parseInt(await readline.question("Was ist die minimal Zahl?"));

function createRandomNumber(): number {
	return Math.floor(Math.random() * (maximaleZahl - minimaleZahl + 1) + minimaleZahl);
}

console.log("Ich beginne mit dem erraten deiner Zahl.");
let guesses = 0;
const guessedNumbers: number[] = [];
while (true) {
	guesses++;
	const guessedNumber = createRandomNumber();
	// überspringt den ganzen Loop bei Nummern welche bereits versucht wurden.
	if (guessedNumbers.includes(guessedNumber)) {
		continue;
	}
	// Bricht nach 100 Versuchen auf
	if (guesses > 100) {
		console.log("Ich gebe auf");
		break;
	}
	const answer = await readline.question(`Ist deine Zahl ${guessedNumber}? (y/n)`);
	if (answer == "y") {
		console.log(`Die Zahl war wohl ${guessedNumber}! Ich habe ${guesses} Versuche gebraucht`);
		break;
	} else {
		// schreibt bereits versucht Nummer in ein Array
		guessedNumbers.push(guessedNumber);
		console.log(`${guessedNumber} war wohl nicht richtig, ich versuche es nochmals`);
	}
}

process.exit();
  ```

</details>
