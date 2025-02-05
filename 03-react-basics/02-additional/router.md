# React Router

## Was ist Routing?

Routing im Kontext der Webentwicklung ist der Prozess der Auswahl einer Aktion basierend auf der URL, um spezifische Teile der Anwendung zu rendern. In Single-Page-Anwendungen (SPAs) wie denen, die mit React erstellt werden, wird clientseitiges Routing verwendet. In diesem Fall wird die Seite nicht bei jeder Anfrage neu geladen, sondern nur der für die Route spezifizierte Inhalt dynamisch gerendert.

> 💡 Routing ist ein wichtiger Bestandteil jeder Webanwendung, um die Navigation zwischen verschiedenen Inhalten zu ermöglichen, ohne die gesamte Seite neu laden zu müssen.

## Installation von `react-router-dom`

```shell
npm install react-router-dom
```

## Anwendung von React Router

Um React Router in unserer Anwendung zu verwenden, umhüllen wir unsere Hauptkomponente (normalerweise `App`) mit der `BrowserRouter`-Komponente. In diesem Fall sieht das `index.tsx` so aus:

```typescript jsx
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
  </StrictMode>,
);
```

## Erstellung von Routen

Im nächsten Schritt definieren wir Routen in unserer Anwendung. Routen verknüpfen URL-Pfade mit spezifischen React-Komponenten. Hier ist ein einfaches Beispiel, wie man Routen mit den `Routes`- und `Route`-Komponenten erstellt:

```typescript jsx
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/index" element={<Notes />} />
            <Route path="/courses" element={<Users />} />
        </Routes>
    );
}
```

Jede `Route` hat einen `path` und ein `element`. Der `path` gibt an, welcher URL-Pfad zu dieser Route führt, und das `element` ist das Komponente, die gerendert wird, wenn die Route erreicht wird.

## Navigation zwischen Seiten

Wir können das `Link`-Komponente verwenden, um auf andere Routen zu verweisen:

```typescript jsx
import { Link } from "react-router-dom";

function Hauptseite() {
    return (
        <div>
            <Link to="/index">Inhalt</Link>
            <Link to="/kurse">Kurse</Link>
        </div>
    );
}
```

## Dynamische Routen und URL-Parameter

React Router ermöglicht es uns, dynamische Routen zu erstellen, die auf URL-Parameter verweisen. Ein Beispiel wäre eine Detailseite für ein bestimmtes Ereignis. Die Definition der Route:

```typescript jsx
<Route path="/events/:id" element={<EventDetailPage/>}>
```

Hier gibt `:id` an, dass es sich um eine variable URL-Komponente handeln wird. Für unsere App definieren wir auch den Namen `id`, um später zwischen mehreren variablen Komponenten unterscheiden zu können.

Im Code der Komponente können wir dann den spezifischen Wert extrahieren und verwenden:

```typescript jsx
import { useParams } from "react-router-dom";

function EventDetailPage() {
    
    const params = useParams();
    const id: string | undefined = params.id;
    
    const event: fetchEvent(id);
    
    return(
        <EventCard event={event} />
    );
}
```

Hier wird die `useParams`-Funktion von `react-router-dom` verwendet, um die Parameter aus der URL zu extrahieren.

Wenn wir beispielsweise zu `https://unsereapp.beispiel.com/events/42` navigieren, wird die `EventDetailPage` `42` in der Variablen `const id` enthalten.

## Programmgesteuerte Navigation

Wenn wir die Navigation an einer bestimmten Stelle im JavaScript-Code auslösen möchten, können wir den `useNavigate`-Hook verwenden:

```typescript jsx

import { useNavigate } from "react-router-dom";

function EigeneKomponente() {
    
    const navigate = useNavigate();
    
    function zuEinerRouteGehen() {
        navigate("/einige-route");
    }
    
    return(
        <div>
            <button onClick={zuEinerRouteGehen}>Gehe zu Seite XY</button>
        </div>
    );
}
```

## Ressourcen

- [React Router Dokumentation](https://reactrouter.com/)
- [Einführung in React Router auf MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_router)
- [Artikel: Ein umfassender Leitfaden zu React Router](https://blog.logrocket.com/a-comprehensive-guide-to-react-router/)
- [Video-Tutorial: React Router für Anfänger](https://www.youtube.com/watch?v=Law7wfdg_ls)
