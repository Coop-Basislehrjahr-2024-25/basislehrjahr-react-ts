# Requirements

* node v20.18.0
* npm v10.8.2

**nvm ist empfohlen**

[Hier zum installations Guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

`nvm use` in `basislehrjahr-react-ts` ausführen, wenn `nvm` installiert ist um die korrekt node und npm
Version zu verwenden.

## Nexus

Womöglich ist ein Login nötig für den Coop Nexus:
`npm adduser --registry=https://nexus3.hs.coop.ch/repository/js-public/ --auth-type=legacy`

## Bearbeitung der typescript Aufgaben

Löse jeweils die Aufgaben in den korrespondierenden Typescript (`.ts`) Dateien.
Die Dateien können direkt in IntelliJ ausgeführt werden.

Wenn VS Code verwendet wird kann über den Build Task das Typescript File direkt ausgeführt werden. `CTRL + SHIFT + B`. 

## Bearbeitung der react Aufgaben

Löse jeweils die Aufgaben in den korrespondierenden Ordnern.
Die Projekte können via `npm run react:[Aufgaben Nummer]` gestartet werden.

## Slides

Die Präsentation wurde via Markdown Files erstellt. `npm i` im Root Folders im Projekt lädt die Dependencies herunter,
welche für das Ausführen der Slides benötigt werden.
`npm run slides` um den Slidewebserver zu öffnen. Dann jeweils in den `slides` Ordner navigieren des jeweiligen
Themenabschnittes.
Bsp. `01-typescript-basics/00-slides`