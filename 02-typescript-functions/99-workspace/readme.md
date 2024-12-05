# Requirements

* node v20.18.0
* npm v10.8.2

# Setup

## .npmrc
In jedem Workspace gibt es eine `.npmrc` welche das Repository für npm setzt. Womöglich ist ein login nötig:
`npm adduser --registry=https://nexus3.hs.coop.ch/repository/js-public/ --auth-type=legacy`

`nvm use` in `basislehrjahr-react-ts` ausführen, wenn `nvm` installiert ist um die korrekt node und npm Version zu verwenden.

In den einzelnen `99-workspace` Ordner muss jeweils `npm i` ausgeführt werden um die Workspace dependencies herunterzuladen.

## Scripts 

Im Workspace ist ein dev Server eingerichet, welcher automatisch das File nach änderungen wieder ausführt.

`npm start dev:js` führt das `main.js` File aus.

`npm start dev:ts` führt das `main.ts` File aus.

Happy Coding