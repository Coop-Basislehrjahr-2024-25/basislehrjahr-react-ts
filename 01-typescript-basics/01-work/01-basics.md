## Grundlagen
- Variablen deklariert mit `var`, `let` oder `const`
- Datentypen wie `number`, `string`, `boolean`, `object`, `null` und `undefined`
- Operatoren wie arithmetische (`+`, `-`, `*`, `/`), Vergleichsoperatoren (`==`, `===`, `!==`, `<`, `>`), logische (`&&`, `||`, `!`) und
  Zuweisungsoperatoren (`=`, `+=`, `-=` usw.).
- Kontrollstrukturen wie `if`/`else`, `switch`, `for`/`while`
- Objekte werden mit `{}` erstellt
- Arrays werden mit `[]` erstellt
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

> 💡 `var` ist veraltet und sollte nicht mehr verwendet werden. `let` und `const` sind die neuen Standards.

## JavaScript Code Beispiel

```javascript
console.log("Hallo Welt!");

const x = 5;
const y = 10;
console.log("Die Summe von x und y ist: ", x + y);
```

## Warum TypeScript?

TypeScript wurde entwickelt, um die Entwicklung großer Anwendungen einfacher und fehleranfälliger zu machen. Die Hauptmerkmale von TypeScript sind statische Typen und seine kompilierte Natur, die zur Fehlererkennung beitragen. TypeScript ist ein Superset von JavaScript, was bedeutet, dass jeder gültige JavaScript-Code auch in TypeScript gültig ist.

> 💡 Wusstest du? TypeScript wurde von Microsoft entwickelt und erstmals 2012 veröffentlicht.

## JavaScript VS TypeScript

- Kann alles tun, was JavaScript kann, aber mehr (Superset)
- "Upgrade" für JavaScript mit Typüberprüfung von Microsoft
- Viele Frameworks unterstützen TypeScript (React)
- Überprüft nur während der Kompilierung
- Generiert letztendlich JavaScript-Code
- Dateierweiterung `.ts` oder `.tsx` (für JSX / Rendering)

```typescript
let i1: number;     // Typ explizit deklariert
let i2: number = 2; // Typ explizit deklariert
let i3 = 3;         // Typ wird automatisch erkannt
```

> 💡 Beachte, wie der Typ in TypeScript explizit deklariert ist und wie die Funktion einen Standardwert für den Parameter hat.
```

```markdown
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

## Ressourcen

- [MDN JavaScript Guide](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide)