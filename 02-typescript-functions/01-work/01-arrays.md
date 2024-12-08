# Aufgabe

Probiere verschiedene Array Funktionen aus, um den Inhalt von folgenden Arrays zu manipulieren.

Versuche folgende Ergebnisse mit den Arrays zu erreichen.

- [ ] Hinzufügen eines neuen Eintrages.
- [ ] Ersetzen eines Eintrages.
- [ ] Kombinieren zweier Arrays.
- [ ] Bestimmte Eintrag eines Arrays anzeigen.
- [ ] Index eines Wertes in einem Array finden.
- [ ] Grössen eines Array anzeigen.
- [ ] Alle Werte eines Arrays verändern.
- [ ] Alle Werte eins Arrays zu einem Wert zusammen fassen.

```typescript
const numbers = [864, 186, 275, 944, 901, 255, 781, 281, 745, 1, 410, 689];
const names = ["Emilia", "Mia", "Emma", "Mila", "Lina", "Sophia", "Sofia", "Amelie", "Leonie", "Malia"];
```

Informiere dich im Internet oder schau in die [Aufgaben Hilfe](#aufgaben-hilfe) wie man die Array Methoden in **typescript** verwendet und alles
weitere was dich interessiert.

## Aufgaben Hilfe

<details>
  <summary>Wie kann ich ein Array beeinflussen?</summary>

Eine ziemliche gute übersicht der verschiedenen Funktionen ist auf [w3schools](https://www.w3schools.com/js/js_array_methods.asp) zu finden

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 1)</summary>

  ```typescript
sortNumbers.push(420);
console.log(sortNumbers);
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 2)</summary>

  ```typescript
sortNumbers[0] = 420;
console.log(sortNumbers); // [420, 186, 275, 944, 901, 255, 781, 281, 745, 1, 410, 689];
  ```

</details>
<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 3)</summary>

Hier wird ein neues Array erstellt mit den Werten aus `numbers` und `names`. Dabei werden die Datentypen gemischt.

  ```typescript
console.log([...names, ...sortNumbers])

/*	[
	'Emilia', 'Mia',    'Emma',
		'Mila',   'Lina',   'Sophia',
		'Sofia',  'Amelie', 'Leonie',
		'Malia',  864,      186,
		275,      944,      901,
		255,      781,      281,
		745,      1,        410,
		689
	]*/

  ```

</details>
<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 4)</summary>

  ```typescript
console.log(names[5])
// Sophia  
  ```

</details>
<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 5)</summary>

  ```typescript
console.log(names.findIndex(name => name === "Emma"));
// 2
  ```

</details>
<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 6)</summary>

  ```typescript
console.log(names.length)
// 10
  ```

</details>
<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 7)</summary>

  ```typescript
console.log(names.map(name => name.toUpperCase()))
/* [
'EMILIA', 'MIA',
	'EMMA',   'MILA',
	'LINA',   'SOPHIA',
	'SOFIA',  'AMELIE',
	'LEONIE', 'MALIA'
]
*/
  ```

</details>
<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 8)</summary>

`reduce` ist eine Funktion, welches durch alle Elementen durch iteriert und dieses zu einem Wert zusammenfasst.

`reduce(function, initialWert)`

`function` ist die Mapper funktion welche den vorherigen sowie den aktuellen Wert der iteration erhält. Wenn es der erste durchgang ist, der vorherige Wert der Initialwert.

  ```typescript
console.log(names.reduce((previousName, currentName) => `${previousName} ${currentName}`, ""))
// Emilia Mia Emma Mila Lina Sophia Sofia Amelie Leonie Malia

console.log(sortNumbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber, 0))
// 6332
  ```

</details>