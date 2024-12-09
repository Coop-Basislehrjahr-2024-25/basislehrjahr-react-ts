# Aufgabe

Erstelle Typescript Klassen mit sinnvollen vererbung und Überschreibungen von Funktionen. Spiele mit dem Typen und versuche verschiedene
Kombinationen.
Beispiel dafür wäre:

* Motor (Funktion: `starten` gibt einen generischen Output in die Konsole)
    * Auto (Funktion: `starten` vererbt von Motor gibt einen Autospezifischen Output in die Konsole)
    * Motorrad (Funktion: `starten` vererbt von Motorrad gibt einen Autospezifischen Output in die Konsole)

## Aufgaben Hilfe

<details>
  <summary>Wie erstelle ich eine Klasse?</summary>
Nach der Syntax kann eine Klasse erstellt werden mit einigen nicht initialisierten Parametern. Mit dem `abstract` Keyword kann eine Klasse Abstract gemacht werden.

```typescript
  export class GenericClass {
	paramter1: string;
	paramter2: string;
	paramter3: string;

	doStuff() {

	}
}

export abstract class AbstractGenericClass {
	paramter1: string;
	paramter2: string;
	paramter3: string;

	doStuff() {

	}
}
  ```

</details>

<details>
  <summary>Wie erweitere eine Klasse?</summary>
Nach der Syntax kann eine Klasse erweitert werden. Auch zu sehen ist wie eine Methode in der vorherig definierten Klassen überschrieben werden kann.

```typescript
export abstract class GenericClass {
	paramter1: string;
	paramter2: string;
	paramter3: string;

	doStuff() {

	}
}

export class SpecificClass extends GenericClass {

	doStuff() {
		super.doStuff();
	}
}
  ```

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

  ```typescript
export abstract class Motor {
	starten() {
		console.log("Generisches start")
	}
}

export class Auto extends Motor {
	starten() {
		console.log("Auto start")
	}
}

export class Motorrad extends Motor {
	starten() {
		console.log("Motorrad start")
	}
}

// Es kann der gemeinsame Typ verwendet werden bei der Typ dekleration.
const vehiclce1: Motor = new Auto()
const vehiclce2: Motor = new Motorrad()

// Ausführen der einzelnen implementationen.
vehiclce1.starten()
vehiclce2.starten()
  ```
</details>
