# Aufgabe

Schau dir die Projektstruktur an. Versuche Änderungen an den Datei vorzunehmen. Wie beinflussen deine Änderungen die
Website?

Versuche noch zusätzliches:

- [ ] Verändere den Inhalt vom
    - [ ] HTML Teil
    - [ ] React Teil
    - [ ] React Komponenten Teil
- [ ] Füge eine neue Komponente hinzu und zeige diese an
- [ ] Füge Styling zur Website hinzu

Informiere dich im Internet oder schau in die [Aufgaben Hilfe](#aufgaben-hilfe)

## Aufgaben Hilfe

<details>
  <summary>Wie verändere ich den HTML Teil?</summary>

Änderungen am HTML Teil können im [index.html](./index.html) vorgenommen werden.
Beispielsweise könntest du den Text ändern von

  ```html

<body>
Hier HTMl Code
<div id="app"></div>
</body>
  ```

zu einem anderen Text

```html

<body>
Hier könnte ein andere Text stehen, der im HTML definiert ist.
<div id="app"></div>
</body>
```

</details>


<details>
  <summary>Wie verändere ich den React Teil?</summary>

Änderungen am React Teil können an zwei Datei verbracht werden.
Der Hauptrenderer [index.tsx](./src/index.tsx) Rendert den React Teil der Applikation.

  ```tsx
root.render(<>
    // Hier könntest du ändern, was gerendert wird.
</>);
  ```

Ausserdem könntest du auch direkt an der Komponente [Greeter.tsx](./src/Greeter.tsx) ändern, solang diese gerendert
wird.
Das könnte beispielsweise so aussehen:

```tsx
export default function Greeter() {
    return <>
        <h1>Hier ist ein Text</h1>
        <button className="super-coole-class">Super cooler Knopf</button>
    </>
}
```

</details>

<details>
  <summary>Was sind diese <> Elemente?</summary>

`<>` ist eine besondere Syntax welche ermöglicht, mehrere JSX-Elemente nebeneinander zu rendern, ohne zusätzliche
HTML-Elemente wie `<div>` oder `<span>` zu erzeugen.

Das ist wichtig, da JSX Funktionen nur ein Element zurück geben können, daher müssen verschachtelte Komponenten entweder
mit einem `<div>`, `<span>` oder `<>` gewrapped werden.
</details>

## Musterlösung

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 1.1)</summary>

Eine mögliche Änderung könnte so aussehen, wo der ```<h1></h1>``` angepasst wurde.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React Basics</title>
    <script type="module" src="./src/index.tsx"></script>
</head>
<body>
<h1>Wilkommen auf der Website</h1>
<div id="app"></div>
</body>
</html>
```

</details>


<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 1.2-1.3 und 2)</summary>

Eine mögliche Änderung an [index.tsx](src/index.tsx) könnte so aussehen wo der renderer angepasst wird. So wurde die
Nachricht angepasst und eine neue Komponente angehängt.

```tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import SuperCoolerButton from "./SuperCoolerButton";

const root = createRoot(document.getElementById('app')!);
root.render(<>
    <p>Probiere doch mal diesen Button aus</p>
    <SuperCoolerButton></SuperCoolerButton>
</>);
```

`SuperCoolerButton.tsx`

```tsx
import React from "react";

export default function SuperCoolerButton() {
    return <button className="super-coole-class">Super cooler Knopf</button>
}
```

</details>

<details>
  <summary>Möchtest du bereits die Lösung anschauen? (Aufgabe 3)</summary>

Eine mögliche Änderung an der [index.html](index.html) könnte so aussehen. So wurde die ein `.css` File eingebunden.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React Basics</title>
    <script type="module" src="./src/index.tsx"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<h1>Hier HTML Code</h1>
<div id="app"></div>
</body>
</html>
```

`style.tsx`

```css
body {
    background-color: #01081e;
}

h1, p {
    color: #e1e7fe;
}

button {
    background-color: #e1e7fe;
}
```

</details>

