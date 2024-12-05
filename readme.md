# Requirements

* node v20.18.0
* npm v10.8.2

`nvm use` in `basislehrjahr-react-ts` ausführen, wenn `nvm` installiert ist um die korrekt node und npm Version zu verwenden.

## .npmrc
In jedem Workspace gibt es eine `.npmrc` welche das Repository für npm setzt. Womöglich ist ein login nötig:
`npm adduser --registry=https://nexus3.hs.coop.ch/repository/js-public/ --auth-type=legacy`

# Wichtig

In den einzelnen `99-workspace` Ordner muss jeweils `npm i` ausgeführt werden um die Workspace dependencies herunterzuladen.

# Slides
Die Präsentation wurde via Markdown Files erstellt. `npm i` im Root Folders im Projekt lädt die Dependencies herunter, welche für das Ausführen der Slides benötigt werden.
`npm start` um den Slidewebserver zu öffnen. Dann jeweils in den `slides` Ordner navigieren des jeweiligen Themen Abschnittes.
Bspw. `01-typescript-basics/00-slides`