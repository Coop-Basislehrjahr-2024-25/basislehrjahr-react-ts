---
theme: customized
_class: lead
paginate: true
---

# React

*Reaktive user interfaces*

--- 

# Warum **React**?

Webseiten interaktive gestaltbar machen

* Komponenten basierte Architektur
* Performance
* "Structure as Code"
* Grosses Ökosystem

---

# Wie **React**?

* In eine bestehende Applikation hinzufügen
* React Frameworks
    * Routing
    * State Management

---

# Komponenten

```html

<button class="super-coole-class">Super cooler Knopf</button>
```

```html
<!--code-->
<form>
    <button class="super-coole-class">Super cooler Knopf</button>
</form>
<!--code-->
<div>
    <button class="super-coole-class">Super cooler Knopf</button>
</div>
```

---

# Komponenten

```tsx
function SuperCoolButton() {
    return <button class="super-coole-class">Super cooler Knopf</button>
}
```

```html
<!--code-->
<form>
    <SuperCoolButton></SuperCoolButton>
</form>
<!--code-->
<div>
    <SuperCoolButton></SuperCoolButton>
</div>
<!--footer-->
```

---

---

# Komponenten dekleration

```tsx
function SuperCoolButton() {
    return <button class="super-coole-class">Super cooler Knopf</button>
}
```

```tsx
class SuperCoolButton extends React.Component {
    render() {
        return <button class="super-coole-class">Super cooler Knopf</button>;
    }
}
```

---

# SPA

* Multi Page Application (Plain JS)
    * `src/index.html` für `localhost/`
    * `src/page1/index.html` für `localhost/page1`
    * `src/page2/index.html` für `localhost/page1`

* Single Page Application
* `src/index.html` für `localhost/`
    * Für weitere Seiten braucht es ein Router
    * Bspw. Laden von `<SuperCoolButton>`

---

# State

`useState` um einfaches state management von React zu nutzen.

* `useState` gibt zwei Funktionen zurück. Value setter und setter

---

# State

`useState` um einfaches state management von React zu nutzen.

- `useState` gibt zwei Funktionen zurück. Value setter und setter

```tsx
const [value, setValue] = useState(initValue)
```

---

# Komponenten Kommunikation

```tsx
export default function NameRenderer(props: { name: string }) {
    // code
}
```

```tsx
<>
    <NameRenderer name={"Gabriel"}></NameRenderer>
</>
```

---

# Aufgaben

Allgemeine Syntax Informationen in `03-react-basics/01-work/00-cheatsheet.md`

Aufgaben in `03-react-basics/01-work`

Starten eines React Projekts `npm run react:[Nummer der Aufgabe]`