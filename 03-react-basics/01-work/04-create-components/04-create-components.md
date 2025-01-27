# Aufgabe

Die Applikation ist aktuell nur in einzelnen HTML Elementen aufgebaut. Versuche logische Komponenten zu erstellen und
dabei möglichst das gleiche Ergebnis dabei zu behalten.

Informiere dich im Internet oder schau in die [Aufgaben Hilfe](#aufgaben-hilfe)
## Aufgaben Hilfe

<details>
  <summary>Wie zeige ich Variablen an?</summary>

Mit `{}` können Variable im tsx Template verwendet werden.

```tsx
const bar = "Bar";
root.render(<>
    <p>Foo {bar}</p>
</>);
```
</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

[Cat.tsx](src/Cat.tsx)

```tsx
import React from "react";

export interface CatProps {
    name: string;
    imageLink: string
    description: string
}

export default function ({ name, imageLink, description }: CatProps) {
    return <>
        <div className="d-flex">
            <div className="p-2 cat-image-container">
                <img className="img" src={imageLink}/>
            </div>
            <div className="d-flex flex-column">
                <h1>{name}</h1>
                <p>{description}</p>
                <a href="https://cataas.com/cat">go to other cats</a>
            </div>
        </div>
    </>
}
```

[index.tsx](src/index.tsx)

```tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import Cat from "./cat";
import firstCat from "./cats/cat_0.jpeg"
const root = createRoot(document.getElementById('app')!);

root.render(<>
    <Cat name="Mothership of Cats" description="Devourer of the Abyss" imageLink={firstCat}></Cat>
</>);

```

</details>

## Challenge

Erstell ein Interface mit den wichtigsten Informationen des Katzen. Erstelle eine Liste mit diesen Katzen Elementen.
Lass die Katzen dynamisch rendern.
Erfülle dabei folgendes: 
* Die Reihenfolge ist zufällig.
* Es werden keine Elemente doppelt angezeigt.
* Es werden noch weitere Katzen hinzugefügt nebst den initialen Katzen, hierzu kannst du diesen Service verwenden: https://cataas.com/cat

## Challenge Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen?</summary>

Die Elemente werden aus dem `cats` Array gelesen und gerendert.

  ```tsx
const cats: CatProps[] = [
    {
        name: "Title 1",
        description: "Description 1",
        imageLink: firstCat
    },
    {
        name: "Title 2",
        description: "Description 2",
        imageLink: secondCat
    },
]


root.render(<>
    {cats.map((cat: CatProps) =>
        <Cat name={cat.name} description={cat.description} imageLink={cat.imageLink}></Cat>
    )}
</>);
  ```

</details>
