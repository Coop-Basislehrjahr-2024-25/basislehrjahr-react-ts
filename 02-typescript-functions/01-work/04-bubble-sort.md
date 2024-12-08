# Aufgabe

Sortiere folgendes Array ohne dabei `.sort()` zu verwenden.

```typescript
const sortNumbers = [
	864, 186, 275, 944, 901, 255, 781, 281, 745, 1, 410, 689,
	223, 416, 987, 693, 651, 20, 68, 572, 989, 159, 391, 810,
	25, 607, 171, 784, 486, 350, 743, 533, 450, 725, 779, 958,
	533, 172, 670, 93, 457, 225, 369, 141, 602, 647, 774, 20,
	507, 853, 825, 655, 207, 349, 71, 256, 107, 440, 829, 365,
	950, 518, 503, 606, 527, 97, 381, 828, 288, 455, 601, 91,
	26, 63, 586, 800, 656, 990, 656, 676, 411, 157, 773, 747,
	783, 393, 158, 827, 503, 398, 914, 566, 120, 681, 152, 270,
	280, 250, 766, 818
]
```

## Aufgaben Hilfe

<details>
  <summary>Wie könnte ich die Sortierung angehen?</summary>
Ein Ansatz für eine sortierung wäre [Bubblesort](https://de.wikipedia.org/wiki/Bubblesort)

Hier Pseudocode vom Wikipedia Artikel.

  ```
bubbleSort(A: Array)
for (n = A.size; n > 1; n = n - 1) { // äußere Schleife
	for (i = 0; i < n - 1; i = i + 1) { // innere Schleife
		if (A[i] > A[i + 1]) {
			A.swap(i, i + 1)
		}
	}
}
  ```

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

Der Lösungsansatz ist eine 1:1 implementations des Pseudocodes aus der [Aufgaben Hilfe](#aufgaben-hilfe)

  ```typescript
const numbers = [
    864, 186, 275, 944, 901, 255, 781, 281, 745, 1, 410, 689,
    223, 416, 987, 693, 651, 20, 68, 572, 989, 159, 391, 810,
    25, 607, 171, 784, 486, 350, 743, 533, 450, 725, 779, 958,
    533, 172, 670, 93, 457, 225, 369, 141, 602, 647, 774, 20,
    507, 853, 825, 655, 207, 349, 71, 256, 107, 440, 829, 365,
    950, 518, 503, 606, 527, 97, 381, 828, 288, 455, 601, 91,
    26, 63, 586, 800, 656, 990, 656, 676, 411, 157, 773, 747,
    783, 393, 158, 827, 503, 398, 914, 566, 120, 681, 152, 270,
    280, 250, 766, 818
];

for (let n = sortNumbers.length; n > 1; n--) {
    for (let i = 0; i < n - 1; i++) {
        const firstNumber = sortNumbers[i];
        const secondNumber = sortNumbers[i + 1];

        if (firstNumber > secondNumber) {
            // swap
            sortNumbers[i + 1] = firstNumber;
            sortNumbers[i] = secondNumber;
        }
    }
}

console.log(sortNumbers);
  ```

</details>
