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

## Entwicklung mit React DevTools

React DevTools ist eine Browsererweiterung, die die Entwicklung und das Debugging von React-Anwendungen erleichtert.

1. Installiere die React DevTools-Erweiterung in deinem bevorzugten Browser.
2. Starte deinen Vite-Entwicklungsserver (zu finden in package.json unter "scripts").
3. Öffne deine Anwendung im Browser.
4. Klicke auf das React DevTools-Symbol in der Browser-Symbolleiste.

Du kannst jetzt die Komponentenhierarchie, Props, State und vieles mehr überprüfen.

## Zusätzliche Ressourcen

- [Vite Dokumentation](https://vitejs.dev/)
- [React DevTools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)