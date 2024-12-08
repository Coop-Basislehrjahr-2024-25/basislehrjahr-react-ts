# Aufgabe

Bearbeite die Applikation, so dass die Komponenten [Counter.tsx](src/Counter.tsx) und [Digit.tsx](src/Digit.tsx) so dass
diese Kommunizieren. Der Counter Wert soll von [Counter.tsx](src/Counter.tsx) an [Digit.tsx](src/Digit.tsx) übergeben
werden, so dass dieser dort angezeigt werden kann.

## Aufgaben Hilfe

<details>
  <summary>Wie erstellt und ruft man ein Property?</summary>

```tsx
export default function NameRenderer(props: { name: string }) {
    // code
}

// Übergeben eines Properties

<><NameRenderer name={"Gabriel"}></NameRenderer></>
```


</details>

<details>
  <summary>Wie verwende ich Komponenten in Komponenten?</summary>

Komponenten können via den Funktionsnamen importiert werden.

```tsx
export function FirstComponent() {
    return <>
        <SecondComponent></SecondComponent>
    </>
}
```

</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

[index.tsx](src/index.tsx)

```tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Counter} from "./Counter";


const root = createRoot(document.getElementById('app')!);
root.render(<>
    <Counter></Counter>
</>);
```

[Counter.tsx](src/Counter.tsx)

```tsx
import React, {useState} from "react";
import Digit from "./Digit";

export function Counter() {
    const [counter, setCounter] = useState(0)
    return <div className="d-flex flex-column align-items-center">
        <Digit value={counter}></Digit>
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

[Digit.tsx](src/Digit.tsx)

```tsx
import React, {useState} from "react";
import figlet from "figlet";
// @ts-ignore
import standard from "figlet/importable-fonts/Standard.js";

interface DigitProps {
    value: number
}

export default function Digit({value}: DigitProps) {
    figlet.parseFont("Standard", standard);
    const [asciiArt, setAsciiArt] = useState("")

    convertNumber(value).then(setAsciiArt)

    return <pre>
        {asciiArt}
    </pre>


}

function convertNumber(number: number): Promise<string> {
    return new Promise((resolve, reject) => {
            figlet.text(number.toString(), {font: "Standard"}, (err, result) => {
                if (!err && result) {
                    resolve(result)
                } else {
                    reject()
                }
            })
        }
    )
}
```

</details>
