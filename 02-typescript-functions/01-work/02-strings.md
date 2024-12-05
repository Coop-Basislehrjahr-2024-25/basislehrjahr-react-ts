# Aufgabe

Probiere verschiedene String Funktionen aus, um den Inhalt von folgenden Strings zu manipulieren.

Versuche folgende Ergebnisse mit den Strings zu erreichen.

```typescript
const hello = "Hello World!"
const mindset = "java is the greatest of all time!"
```

- [ ] Ändere die Grosskleinschreibung der Buchstaben eins Strings
- [ ] Ersetzen ein Wort Strings.
- [ ] Wiederhole den Inhalt eines Strings.
- [ ] Drehe die Reihenfolge der Zeichen eins Strings um.
- [ ] Anzahl Zeichen eines Strings anzeigen.


Informiere dich im Internet oder schau in die [Aufgaben Hilfe](#aufgaben-hilfe) wie man die String Methoden in **typescript** verwendet und alles
weitere was dich interessiert.

## Aufgaben Hilfe

<details>
  <summary>Wie kann ich ein String beeinflussen?</summary>

Eine ziemliche gute Übersicht der verschiedenen Funktionen ist auf [w3schools](https://www.w3schools.com/js/js_strings.asp) zu finden

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 1)</summary>


  ```typescript
console.log(hello.toUpperCase());
// HELLO WORLD!
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 2)</summary>


  ```typescript
console.log(mindset.replace("java", "typescript"));
//typescript is the greatest of all time!
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 3)</summary>


  ```typescript
console.log(hello.repeat(10));
//Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 4)</summary>


  ```typescript
console.log(hello.split("").reverse().join(""));
//!dlroW olleH
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 5)</summary>


  ```typescript
console.log(hello.length);
// 12
  ```

</details>
