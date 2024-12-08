## Projektstruktur und Komponenten

Ein React-Projekt ist in Komponenten unterteilt, die wiederverwendbare Bausteine der Benutzeroberfläche darstellen. Hier ist eine grundlegende Projektstruktur:

- **src/**
    - **index.tsx**: Die Hauptkomponente, die andere Komponenten rendert.
    - **index.html**: Die HTML-Seite, die unsere App enthält.
    - *.tsx andere Komponenten und strukturierte Unterordner.

## React-Komponenten

React-Komponenten sind die Bausteine unserer Benutzeroberfläche. Sie bestehen aus JSX, einer Syntax, die HTML und JavaScript kombiniert. Hier ist ein einfaches Beispiel:

```tsx
import React from 'react';

function halloWelt(props) {
    return <h1>Hallo Welt</h1>;
}

export default halloWelt;
```

> 💡 JSX ermöglicht es uns, JavaScript-Ausdrücke innerhalb von HTML-ähnlichem Code zu verwenden.

## Einbinden von Komponenten

In index.tsx können wir unsere Komponenten einbinden und verwenden.

```tsx
import React from 'react';
import HelloWorld from './components/HelloWorld';
function App() {
    return (
        <div>
            <HelloWorld />
        </div>
    );
}
export default App;
```

## Einführung in React Props

React-Props ermöglichen das Übergeben von Daten von einer Elternkomponente an eine Kindkomponente. Diese Daten können in der Kindkomponente verwendet werden, um dynamische Inhalte zu generieren.

## Übergeben von React Props

Um Props zu übergeben, werden sie in der Aufrufnotation der Komponente wie HTML-Attribute übergeben:

```jsx
<ChildComponent prop1={value1} prop2={value2} />
```

## Verwendung von React Props

In der Kindkomponente können Props wie Argumente einer Funktion verwendet werden:

```jsx
type Props = {
  prop1: string,
  prop2: number
}

function ChildComponent(props: Readonly<Props>) {
  return <p>{props.prop1}</p>;
};
```

> 💡 Props sollten in React nicht verändert werden. Readonly ist ein TypeScript-Feature, das verhindert, dass Props in der Kindkomponente verändert werden, z. B. props.name = "John".

## Callback-Funktionen in React

Callback-Funktionen sind Funktionen, die von einer Komponente an eine andere übergeben werden, um Ereignisse zu behandeln. Dies ermöglicht die Kommunikation zwischen Komponenten.

```tsx
function ParentComponent = () => {
    
  function handleEvent() {
    // Aktionen ausführen
  };

  return <ChildComponent onClick={handleEvent} />;
};
```
```tsx
type Props = {
    onClick: () => void;
};

function ChildComponent(props: Readonly<Props>) {
  return <button onClick={props.onClick}>Klick mich</button>;
};
```

> 💡 Callback-Funktionen sind ein zentrales Konzept in der Kommunikation zwischen React-Komponenten.

## Dynamisches Rendern mit `map`

Die `map`-Funktion wird verwendet, um eine Liste von Komponenten dynamisch zu rendern. Dies ist besonders nützlich beim Anzeigen einer Liste von Daten.

```tsx
function ParentComponent() {
  const data = ["Element 1", "Element 2", "Element 3"];

  return (
    <div>
      {data.map((element, index) => (
        <ChildComponent key={index} value={element} />
      ))}
    </div>
  );
};

function ChildComponent(props) {
  return <p>{props.value}</p>;
};
```

> 💡 Beim Rendern einer Liste von Komponenten muss jeder Komponente ein `key`-Attribut zugewiesen werden. Dieses Attribut muss eindeutig sein, um React zu ermöglichen, die Komponenten effizienter zu verwalten.

## Typisierung von React Props

Props können typisiert werden, um sicherzustellen, dass die richtigen Daten übergeben werden und Entwicklern bei der Verwendung zu helfen.

```tsx
// Beispiel für Typisierung von Props
type Props = {
  prop1: string;
  prop2: number;
};

const TypedComponent = (props: Readonly<Props>) => {
  return (
    <div>
      <p>{props.prop1}</p>
      <p>{props.prop2}</p>
    </div>
  );
};
```


## Zusätzliche Ressourcen

- [Vite Dokumentation](https://vitejs.dev/)
- [React DevTools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [w3schools React](https://www.w3schools.com/react/default.asp)

- [React Props](https://react.dev/learn/passing-props-to-a-component#)
- [Listen und Schlüssel](https://react.dev/reference/react/Children#children-map)
- [React TypeScript Spickzettel](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)