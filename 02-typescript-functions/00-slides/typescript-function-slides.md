---
theme: customized
_class: lead
paginate: true
---

# Typescript Functions

*Write it once and reuse it*

---

# Funktionen

* Code zu organisieren und wiederverwendbar machen

---

# Funktion deklaration

```
function sum(a: Typ, b: Typ): Rückgabetyp {
    return a + b;
};
```

---

# Funktion deklaration

 ```
const sum = (a: Typ, b: Typ): Rückgabetyp => {
    return a + b;
};
  ```

---

# String Funktionen

 ```
toUpperCase()
toLowerCase()
concat()
trim()
trimStart()
trimEnd()
padStart()
padEnd()
repeat()
replace()
replaceAll()
split()
  ```

---

# Array Funktionen

 ```
length()
toString()
at()
join()
pop()
push()
shift()
unshift()
delete()
concat()
copyWithin()
flat()
splice()
toSpliced()
slice()
  ```

---

# Callback Funktionen

<!-- _class: hidden-list -->

Aufrufen von Funktionsparameter in Funktionen

```typescript
const mathing = (zahl: number, transformer: (zahl: number) => number): number => {
	return transformer(zahl);
};
  ```

* `transformer` kann übergeben werden um die Logik der Funktion von aussen zu Steuern

---

# Callback für Async Funktionen

 ```typescript
const serverResponse = (ok: (response: string) => void, failed: (reason: string) => void): void => {
	// Erfolgsfall
	if (server.ok) {
		ok("Alles Inordnung");
	} else {
		// Fehlerfall
		failed(`Etwas ist passiert: ${server.reason}`);
	}
};
  ```

---

# Callback für Async Funktionen

 ```typescript
const serverResponse = (ok: (response: string) => void, failed: (reason: string) => void): void => {
	// Erfolgsfall
	if (server.ok) {
		ok("Alles Inordnung");
	} else {
		// Fehlerfall
		failed(`Etwas ist passiert: ${server.reason}`);
	}
};
  ```

```typescript
serverResponse((response) => {
	// Logik um die Response zu behandeln
}, (reason) => {
	// Logik um den Fehler zu behandeln
});
```

---

# Callback Hell

```typescript
fetchRandomJoke((joke) => {
	// Logik um die Response zu behandeln
	translateJoke(joke, (translatedJoke) => {
		// Logik um die Response zu behandeln
		postJoke(translatedJoke, () => {
			// Logik um die Response zu behandeln
		}, (reason) => {
			// Logik um den Fehler zu behandeln
		});
	}, (reason) => {
		// Logik um den Fehler zu behandeln
	});
}, (reason) => {
	// Logik um den Fehler zu behandeln
});
```

---

# Promises
 ```typescript
const serverResponse = (): Promise<string> => {
	if (server.ok) {
		return Promise.resolve("Alles Inordnung");
	} else {
		return Promise.reject(`Etwas ist passiert: ${server.reason}`);
	}
};
  ```

---

# Promises
 ```typescript
const serverResponse = (): Promise<string> => {
	if (server.ok) {
		return Promise.resolve("Alles Inordnung");
	} else {
		return Promise.reject(`Etwas ist passiert: ${server.reason}`);
	}
};
  ```

 ```typescript
serverResponse().then(response => {
	// Logik um die Response zu behandeln
}).catch((reason) => {
	// Logik um den Fehler zu behandeln
})
  ```
---

# Promise Heaven 
```typescript
fetchRandomJoke()
	.then((joke) => {
		return translateJoke(joke);
	})
	.then((translatedJoke) => {
		return postJoke(translatedJoke);
	})
	.then(() => {
		console.log("Joke posted successfully!");
	})
	.catch((error) => {
		console.error("Something went wrong:", error);
	});
```

--- 
# Vergleich

```typescript
fetchRandomJoke((joke) => {
	translateJoke(joke, (translatedJoke) => {
		postJoke(translatedJoke, () => {
			// Logik um die Response zu behandeln
		}, (reason) => {
			// Logik um den Fehler zu behandeln
		});
	}, (reason) => {
		// Logik um den Fehler zu behandeln
	});
}, (reason) => {
	// Logik um den Fehler zu behandeln
});
```
---
# Vergleich

```typescript
fetchRandomJoke()
	.then((joke) => {
		return translateJoke(joke);
	})
	.then((translatedJoke) => {
		return postJoke(translatedJoke);
	})
	.then(() => {
		// Logik um die Response zu behandeln
	})
	.catch((error) => {
		// Logik um den Fehler zu behandeln
	});
```


