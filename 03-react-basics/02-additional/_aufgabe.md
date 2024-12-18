# Aufgabe zu React

## Abhängigkeiten bereitstellen

Öffne das Quick-Notes Backend, welches du als Abschlussaufgabe für das Spring Data Projekt gelöst hast. Gegen dieses wirst du nun mit React ein Frontend bauen.
Starte die Java-Applikation und öffne `http://localhost:8080/`. Das aktuelle "Frontend" findest du im Java Projekt unter `src/main/resources/static`.

## Projekt aufsetzen

Erstelle ein neues React-Projekt mit folgendem Befehl: `npm create vite@latest notes-frontend -- --template react-ts`. Installiere folgende packages:

- `axios`
- `react-router-dom`

Aktualisiere deine `vite.config.ts`-Datei, um HTTP-Anfragen auf das Java Backend vom Localhost senden zu können.

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
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

## Auftrag

Setze ein neues Frontend für die Quick-Notes Applikation um. Es soll Funktional gleich sein wie das bisherige Frontend aus dem Java Projekt. Sobald alle funktionen abgedeckt sind, kannst du dich ans Design machen. Gestalte die Webseite nach deinen Vorstellungen.

## Hinweise

1. Starte, indem du aus dem bisherigen Frontend die HTML-Struktur ins React-Projekt kopierst.
2. Versuche Wiederholungen zu vermeiden, indem du z.B. den HTML-Teil für ein Note in eine React-Komponente verlagerst.
3. Orientiere dich an den Endpunkten im Backend, um deine HTTP-Anfragen korrekt zu gestalten.
