## Grundlagen
- Variablen deklariert mit `var`, `let` oder `const`. `const` sind Konstanten die nicht mehr geändert werden können.
- Datentypen wie `number`, `string`, `boolean`, `object`, `null` und `undefined`
- Operatoren wie arithmetische (`+`, `-`, `*`, `/`), Vergleichsoperatoren (`==`, `===`, `!==`, `<`, `>`), logische (`&&`, `||`, `!`) und
  Zuweisungsoperatoren (`=`, `+=`, `-=` usw.).
- Kontrollstrukturen wie `if`/`else`, `switch`, `for`/`while`
- Objekte werden mit `{}` erstellt
- Arrays werden mit `[]` erstellt

> 💡 `var` ist veraltet und sollte nicht mehr verwendet werden. `let` und `const` sind die neuen Standards.

## Schleifen
- **for-Schleife:**
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```

- **if-else:**
  ```javascript
  const alter = 18;
  if (alter >= 18) {
      console.log("Du bist erwachsen.");
  } else {
      console.log("Du bist minderjährig.");
  }
  ```

## JavaScript Code Beispiel

```javascript
console.log("Hallo Welt!");

const x = 5;
const y = 10;
console.log("Die Summe von x und y ist: ", x + y);
```
## Typescript Code Beispiel

```javascript
console.log("Hallo Welt!");

const x: number = 5; // Typ explizit deklariert
const y = 10;        // Typ wird automatisch erkannt

console.log("Die Summe von x und y ist: ", x + y);
```

> 💡 Beachte, wie der Typ in TypeScript explizit deklariert ist und wie die Funktion einen Standardwert für den Parameter hat.

## Der spezielle Typ `any`

Manchmal ist es notwendig oder praktisch, eine Variable zu haben, die jeden Typ akzeptieren kann. Zu diesem Zweck bietet TypeScript den speziellen Typ `any`. Eine Variable vom Typ `any` kann jeden Wert akzeptieren und jede Operation ausführen.

```typescript
let allesMoegliche: any = 10;
allesMoegliche = 'jetzt ist es ein String';
allesMoegliche = true;
```

> 💡 Hinweis: Die Verwendung von `any` sollte vermieden werden, da sie viele der Vorteile der Typsicherheit in TypeScript umgeht.

## Falsy

* falsy = `false`, `0`, `""`, `null`, `undefined` oder `NaN`
* alles andere ist truthy

## Template Strings
In Javascript gibt es mehrere möglichkeiten Strings zu kombinieren.

Template Strings verwenden Back-Ticks (``) anstelle von Anführungszeichen (""), um einen String zu definieren. 
Ausserdem erlauben diese einfache als auch doppelte Anführungszeichen innerhalb eines Strings. Auch ist es möglich Variablen in einem String direkt zu verwenden.
```typescript
console.log(`Der Parameter 'Name' "${name}" ist bereits gesetzt!`)
```

Multiline Strings sind auch möglich:
```typescript
let text = `The quick
brown fox
jumps over
the lazy dog`;
```

Ausführen von Codeblöcken bei denen der Rückgabewert eingesetzt wird.
```typescript
console.log(`2 * 5 = ${2*5}`)
```
## Kommentare

```typescript
/* Block Comment
    Alles in diesem Bereich zwischen /* und * / ist auskommentiert. 
 */

// Line Comment: Hier ist jeweils nur die Zeile auskommentiert, welche // ein hat.

const x: number = 5 // Kommentare können nach einer Variable deklariert werden

/**
 * Dies hier ist ein js-doc. Mit dem lassen sich Methoden standartisiert Kommentieren.
 */
function helloWorld() {
	console.log("Hallo Welt!")
}
```
> 💡 Hinweis: Kommentare können verwendet werden um zusätzliche Informationen zur einer Code stelle zu liefern oder um diese Temporär nicht auszuführen. 

## Ressourcen

- [MDN JavaScript Guide](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide)
- [w3schools JavaScript](https://www.w3schools.com/js/default.asp)
- [w3schools Typescript](https://www.w3schools.com/typescript/index.php)