# Aufgabe

Erweitere die gegebene Applikation in dem du `useState`verwendest.
Die gegebene Buttons sollen den Counter entsprechend anpassen.

## Aufgaben Hilfe

<details>
  <summary>Wie verwendet man useState?</summary>

```tsx
const [value, setValue] = useState(initValue)

// value getter
console.log(value)

// set value
setValue(otherValue)

```

</details>


<details>
  <summary>Wie zeigt man Variablen im Template an?</summary>

```tsx
const value = "Hallo Welt!";

function App() {
    return <>
        <p>{value}</p>
    </>
}

```

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

```tsx
import React, {useState} from "react";

export function Counter() {
    const [counter, setCounter] = useState(0)
    return <div className="d-flex flex-column align-items-center">
        <p>{counter}</p>
        <div>
            <button className="btn m-1" onClick={add}>+</button>
            <button className="btn m-1" onClick={subtract}>-</button>
        </div>
    </div>

    function add() {
        setCounter(counter + 1)
    }

    function subtract() {
        setCounter(counter - 1)
    }
}
```

</details>
