# Aufgabe 

Erstelle eine Applikation welche im Terminal ausgeführt wird. Die Applikation soll der Benutzer verschiedene Frage in einem Frage-Antwort Rhytmus.
Stelle 3 Fragen, stelle diese in einem abschlissenden Text dar, bevor die Applikation beendet wird.

Informiere dich im Internet oder schau in die [Aufgaben Hilfe](#aufgaben-hilfe) wie man Benutzereingaben in **node** verarbeitet, wie man etwas in die Console schreibt und alles weitere was dich interessiert..

## Aufgaben Hilfe

<details>
  <summary>Wie stelle ich Fragen in node?</summary>

In **node** können Module verwendet werden, um das auslesen der Konsole zu ermöglichen. Hier wäre ein Beispiel.

  ```typescript
import * as rl from 'node:readline/promises'; // Import für das Modul, welches die Konsole ausliest

/**
 * Erstellung des Objekt welches definiert, woher gelesen und wohin geschrieben wird.
 */
const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

const name = await readline.question('Wie ist dein Name?'); // Stellen einer Frag und speicherung in einer Variable. Das await Keyword wird später erklärt.
console.log(name)
  ```

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

In **node** können Module verwendet werden, um das auslesen der Konsole zu ermöglichen. Hier wäre ein Beispiel.

  ```typescript
import * as process from 'node:process';
import * as rl from 'node:readline/promises';

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

const name = await readline.question('Wie ist dein Name?');
const age = await readline.question('Wie ist dein Alter?');
const opinion = await readline.question('Wie findest du Typescript?');

console.log(`
Name: ${name}
Alter: ${age}
Meinung zur Typescript: ${opinion}
`);

process.exit(); // braucht es nur wegen dem dev Server
  ```

</details>

## Challenge

Stelle eine Frage welche du in einer Bedingung prüfst. Je nach Antwort gibst du eine andere Antwort zurück.

Beispiel: "Bist du bereits Volljährig? y/n"

## Challenge Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

In **node** können Module verwendet werden, um das auslesen der Konsole zu ermöglichen. Hier wäre ein Beispiel.

  ```typescript
import * as process from 'node:process';
import * as rl from 'node:readline/promises';

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

const name = await readline.question('Wie ist dein Name?');
const legalAge = await readline.question('Bist du bereits volljährig? y/n');

if (legalAge === "y") {
	console.log(`${name} ist volljährig`)
} else {
	console.log("Leider darfst du noch nicht diese Applikation verwenden.");
}

process.exit(); // braucht es nur wegen dem dev Server
  ```

</details>
