# TypeScript-Funktion

## Lernziele
- [ ] Verstehen, was TypeScript-Funktionen sind und warum sie in der Entwicklung wichtig sind.
- [ ] Den Unterschied zwischen regulären Funktionen und Pfeilfunktionen kennenlernen.
- [ ] Array-Methoden wie `map` und `filter` in TypeScript anwenden.

## Grundlagen der TypeScript-Funktion
Funktionen sind grundlegende Bausteine in der Programmierung. Sie ermöglichen es uns, Code zu organisieren und wiederverwendbar zu machen. In TypeScript können wir Funktionen verwenden, um spezifische Aufgaben auszuführen.

Eine Funktion besteht aus:
```typescript
function Funktionsname(parameter1: Typ, parameter2: Typ): Rückgabetyp {
    // Funktionen-Code hier
    return Rückgabewert;
}
```
> 💡 `Funktionsname` ist der Name der Funktion, `parameter1` und `parameter2` sind die Eingabeparameter mit ihren Datentypen, `Rückgabetyp` ist der Datentyp des Rückgabewerts.

## Pfeilfunktionen
Pfeilfunktionen sind eine prägnantere Möglichkeit, Funktionen in TypeScript zu schreiben:
```typescript
const addiere = (a: number, b: number): number => {
    return a + b;
};
```
> 💡 Pfeilfunktionen haben eine kürzere Syntax und teilen das `this`-Verhalten mit ihrer umgebenden Funktion.

## Array-Methoden: map und filter
Die `map`-Funktion ermöglicht es uns, ein neues Array zu erstellen, indem wir eine Transformation auf jedes Element im Array anwenden:
```typescript
const zahlen = [1, 2, 3, 4, 5];
const quadrierteZahlen = zahlen.map(num => num * num);
```

Die `filter`-Funktion erstellt ein neues Array, das nur die Elemente enthält, die eine bestimmte Bedingung erfüllen:
```typescript
const geradeZahlen = zahlen.filter(num => num % 2 === 0);
```

## Ressourcen
- [TypeScript-Dokumentation](https://www.typescriptlang.org/docs/)
- [MDN Web Docs - Pfeilfunktionen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)