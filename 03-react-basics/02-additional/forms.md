# React Formulare

## Lernziele
- [ ] Verstehen, warum Formulare in React wichtig sind und ihre Anwendungsfälle
- [ ] Die grundlegenden Konzepte und bewährten Praktiken beim Arbeiten mit React Formularen lernen
- [ ] Formulare in React erstellen und Benutzereingaben verarbeiten
- [ ] Formulardaten in React validieren
- [ ] Das Formularzustandsmanagement in React mithilfe des `useState`-Hooks verstehen

## Einführung
React Formulare sind ein wesentlicher Bestandteil der Webanwendungsentwicklung. Sie ermöglichen das Erfassen und Verarbeiten von Benutzereingaben und sind in einer Vielzahl von Szenarien unverzichtbar. Mit React Formularen können wir interaktive Benutzeroberflächen erstellen und die eingegebenen Daten an den Server senden.

## Warum Formulare?
Formulare spielen eine zentrale Rolle in Webanwendungen und ermöglichen es Benutzern, Daten einzugeben und zu übermitteln. Beispiele für die Verwendung von Formularen sind Registrierungsformulare, Anmeldeformulare, Suchformulare und mehr. React bietet einen effizienten Weg, Formulare zu erstellen und die eingegebenen Daten zu verwalten.

## Erstellen eines einfachen React Formulars
Um ein einfaches React Formular zu erstellen, können wir funktionale Komponenten verwenden. Hier ist ein Beispiel:

```javascript
import React, { useState } from 'react';

function NameForm(props) {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        alert('Ein Name wurde übermittelt: ' + value);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </label>
            <button>Senden</button>
        </form>
    );
}
```

In diesem Beispiel haben wir ein einfaches Formular erstellt, das den eingegebenen Namen erfasst und eine Benachrichtigung mit dem eingegebenen Namen anzeigt, wenn das Formular übermittelt wird.

> 💡 Beachte, dass wir den `useState`-Hook verwenden, um den Zustand des Formularfelds zu verwalten. Die `setValue`-Funktion aktualisiert den Wert des Formularfelds, wenn der Benutzer etwas eingibt.

## Validierung von Formulardaten
Die Validierung von Benutzereingaben ist ein wichtiger Aspekt beim Arbeiten mit React Formularen. Wir möchten sicherstellen, dass die eingegebenen Daten die erforderlichen Kriterien erfüllen, bevor wir sie verarbeiten oder an den Server senden. Es gibt verschiedene Ansätze zur Validierung von Formulardaten in React, einschließlich der Verwendung von Bibliotheken wie Formik oder der Implementierung benutzerdefinierter Validierungslogik.

## Formularzustandsverwaltung
Das Verwalten des Zustands von Formularen ist entscheidend in React-Formularen. React bietet verschiedene Ansätze zur Zustandsverwaltung, einschließlich der Verwendung von Klassenkomponenten und der Verwendung von Hooks wie `useState` und `useReducer`. Das obige Beispiel verwendet den `useState`-Hook zur Verwaltung des Zustands des Formularfelds.

## Zusätzliche Ressourcen
- [React-Formulardokumentation](https://reactjs.org/docs/forms.html)