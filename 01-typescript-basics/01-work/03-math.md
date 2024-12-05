# Aufgabe 

Führe Grundlegende mathematische Berechnungen in Typescript durch.

- [ ] Berechne das Volumen eines Würfels mit Seitenlänge s = 10.
- [ ] Berechne die Fläche eines Drecks mit der Höhe 7.5 und einer Grundlinie von 10. 
- [ ] Berechne den Umfang eines Kreises mit dem Radius $\sqrt{2}$
- [ ] Berechne die Mantelfläche eines Quaders l = 15, b = 7 = h 7 

Informiere dich im Internet oder schau in die [Aufgaben Hilfe](#aufgaben-hilfe) wie man das Math Module in **typescript** verwendet und alles weitere was dich interessiert.

## Aufgaben Hilfe
<details>
  <summary>Wie erhalte ich PI? </summary>

  ```typescript
const pi = Math.PI
  ```
</details>

<details>
  <summary>Wie erhalte ich eine Wurzel? </summary>

  ```typescript
const sqrtTwo = Math.sqrt(2);
  ```
</details>

## Musterlösung
<details>
  <summary>Möchtest du bereits die Lösung für Aufgabe 1 anschauen?</summary>

  ```typescript
// Die Erste Zahl ist die Basis. Die Zweite die Potenz
const cubeVolume = Math.pow(10, 3);
console.log(`Volumen des Würfels beträgt ${cubeVolume}`);
  ```
</details>

<details>
  <summary>Möchtest du bereits die Lösung für Aufgabe 2 anschauen?</summary>

  ```typescript
const height = 7.5;
const baseline = 10;
console.log(`Fläche des Dreiecks beträgt ${(height * baseline) / 2}`);
  ```
</details>

<details>
  <summary>Möchtest du bereits die Lösung für Aufgabe 3 anschauen?</summary>

  ```typescript
const circleRadius = Math.sqrt(2);
console.log(`Umfang des Kreises beträgt ${2 * circleRadius * Math.PI}`);
  ```
</details>

<details>
  <summary>Möchtest du bereits die Lösung für Aufgabe 4 anschauen?</summary>

  ```typescript
const cuboidLength = 15;
const cuboidWidth = 7;
const cuboidHeight = 7;
console.log(`Mantelfläche des Quaders beträgt ${(2 * cuboidLength * cuboidHeight) + (2 * cuboidWidth * cuboidHeight)}`);
  ```
</details>
