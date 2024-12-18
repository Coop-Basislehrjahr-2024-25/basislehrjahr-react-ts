# React Axios

## Lernziele
- [ ] Verstehen, was Axios ist und wie es in React verwendet wird.
- [ ] Wissen über den useEffect-Hook erlangen und seine Bedeutung für den Komponentenlebenszyklus verstehen.
- [ ] Die Fähigkeit entwickeln, den useEffect-Hook in React-Anwendungen zu verwenden.

## Was ist Axios?
Axios ist eine JavaScript-Bibliothek, die es uns ermöglicht, HTTP-Anfragen auszuführen. Sie bietet eine einfachere Möglichkeit, Anfragen im Vergleich zur `fetch` Funktion in standard JavaScript zu handhaben. Axios unterstützt verschiedene Plattformen und bietet eine klare Schnittstelle für das Senden von Anfragen und das Empfangen von Antworten.

## Wie verwendet man Axios in React?
Um Axios in React zu verwenden, müssen wir es zunächst installieren. Dies kann mit einem Paketmanager erfolgen, zum Beispiel mit dem Befehl:
```bash
npm install axios
```

Nach der Installation können wir Axios importieren und in unseren Komponenten verwenden. Hier ist ein einfaches Beispiel:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    
    const fetchData = () => {
        axios.get('https://api.example.com/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Daten:', error);
            });
    };

    return (
        <div>
            {/* Daten rendern */}
        </div>
    );
}
```

## Wie verwendet man useEffect?
Hier ist ein einfaches Beispiel, wie man den useEffect-Hook verwendet:

```javascript
import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get('https://api.example.com/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Daten:', error);
            });
    };
    
    useEffect(() => {
    fetchData();
    
    }, []);
    
    return (
        <div>
            {/* Daten rendern */}
        </div>
    );
}
```

> 💡 Ein leerer Abhängigkeitsarray bedeutet, dass der Code innerhalb des useEffect einmalig ausgeführt wird.

Wenn der Abhängigkeitsarray nicht leer ist, wird der Code innerhalb des useEffect immer dann ausgeführt, wenn sich die Abhängigkeiten ändern.

```tsx
const [clickCounter, setclickCounter] = useState(0);

const fetchData = () => {
    axios.get('https://api.example.com/data')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Daten:', error);
        });
};

useEffect(() => {
    fetchData();
}, [clickCounter])
```
>💡Immer wenn sich der clickCounter ändert, wird fetchData() ausgeführt.

## Daten mit POST und PUT senden

Um Daten zu senden, können wir die Methoden `post` und `put` verwenden. Hier ist ein Beispiel:

```javascript
axios.post(
    // 1. Parameter = die URL
    'https://api.example.com/data',
    
    // 2. Parameter = der Request-Body
    {
        name: 'Max Mustermann',
        age: 42
    }
)
```

## Zugriff auf Spring Boot Backends während der lokalen Entwicklung

Da unsere Spring Boot-Anwendungen standardmäßig verhindern, dass Daten in Webseiten von anderen Servern eingebunden werden (CORS), müssen wir während der lokalen Entwicklung einen Proxy einrichten, um die Anfragen an das Backend weiterzuleiten.

Wir nehmen diese Änderung in der Datei `vite.config.ts` vor, die zum Beispiel so aussehen könnte:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
})
```

Wir definieren, dass der lokale Entwicklungsserver eine Weiterleitung mithilfe eines *Proxy* einrichtet, der nur Anfragen an den Pfad `/api` an den Server unter `http://localhost:8080` weiterleitet.

In unseren Komponenten können wir einfach die URL `/api/...` verwenden, um auf das Backend zuzugreifen:

```typescript jsx
axios.get("/api/cats")
    .then(...)
```

## Ressourcen
- [Aussprache von "Axios"](https://de.youglish.com/pronounce/axios/english)
- [Axios Dokumentation](https://axios-http.com/docs/intro)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)