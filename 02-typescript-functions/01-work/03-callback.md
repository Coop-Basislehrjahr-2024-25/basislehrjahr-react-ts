# Aufgabe

Vorgegeben Basis Code in [03-callback.ts](03-callback.ts), um folgende Ergebnisse zu erreichen. Der Parameterwert der Funktion muss verwendet werde.

## Erwartet Ergebnisse

Die `magicStaticNumber` soll unverändert angezeigt werden.

```
        -------------------------------------------------------------------------       
        |                       Ergebniss der Berechnung                        |
        |                               41                                      |
        |                               ^w^                                     |
        ------------------------------------------------------------------------- 
```

Die `magicStaticNumber` soll quadriert, mit 5 multipliziert, die Wurzel gezogen und danach auf einen ganzen Wert gerundet werden.

```
        -------------------------------------------------------------------------       
        |                       Ergebniss der Berechnung                        |
        |                               91                                      |
        |                               ^w^                                     |
        ------------------------------------------------------------------------- 
```

Die `magicStaticNumber` `NaN` zurück geben.

```
        -------------------------------------------------------------------------       
        |                       Ergebniss der Berechnung                        |
        |                               Nan                                     |
        |                               ^w^                                     |
        ------------------------------------------------------------------------- 
```

Die `magicStaticNumber` `Infinity` zurück geben.

```
        -------------------------------------------------------------------------       
        |                       Ergebniss der Berechnung                        |
        |                               Infinity                                        |
        |                               ^w^                                     |
        -------------------------------------------------------------------------      
```

## Aufgaben Hilfe

<details>
  <summary>Wie kann ich die Methode aufrufen?</summary>
In diesem Beispiel wird die `magicStaticNumber` mit 5 summiert. Durchs `console.log` wird das Ergebnis der Funktion angezeigt.

  ```typescript
console.log(screenFormatter((number) => number + 5))
  ```

``` typescript
        -------------------------------------------------------------------------       
        |                       Ergebniss der Berechnung                        |
        |                               46                                      |
        |                               ^w^                                     |
        -------------------------------------------------------------------------    
```

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 1)</summary>

  ```typescript
console.log(screenFormatter( (number) => number));
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 2)</summary>

  ```typescript
console.log(screenFormatter( (number) => Math.floor(Math.sqrt( 5 * Math.pow(number, 2)))))
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 3)</summary>

  ```typescript
console.log(screenFormatter( (number) => parseInt(`w${number}w`)))
  ```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 4)</summary>

  ```typescript
console.log(screenFormatter( (number) => number/0))
  ```

</details>


