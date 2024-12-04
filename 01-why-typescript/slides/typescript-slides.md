---
theme: customized
_class: lead
paginate: true
---
# Typescript
Warum es ***fast*** all unsere Probleme mit **Javascript** löst

--- 

# Was sollte Javascript machen?

Webseiten interaktive gestaltbar machen

* Manipulation von HTML- und CSS-Elementen
* Kommunikation mit dem Servern

---

# Javascript bringt unendlich Möglichkeiten

![counter](./assets/counter.gif)
![dino-game](./assets/dino-game.gif)
* Jeder Browser unterstützt Native Javascript!
--- 

# Es ist überall!

Desktop Apps

![sample](./assets/discord.jpg)

*Electron -> Javascript*

---
# Es ist überall!

Mobiles Apps

![ionic](./assets/ionic.png)

*Ionic -> Javascript*

---
# Es ist überall!

Games Engines

![pixijs](./assets/pixijs.png)

*PixiJS -> Javascript*

---
# Es ist überall!

Internet der Dinge

![arduino](./assets/arduino.png)

*Arduino -> Javascript*

---
# Es ist überall!

Backend

![nodejs](./assets/nodejs.svg)

*Nodejs -> Javascript*

---
<!-- _class: hidden-list -->
# **Javascript** vs **Java**

* **Java**
* Statisch typisierte Sprache
* Objektorientiert (OO)
* Strengere Syntax und erfordert Definition von namentypen.

* **Javascript**
* Dynamisch typisierte Sprache
* lockerere Syntax und erlaubt andern von namentypen
---
<!-- _class: hidden-list -->
# Warum ist **Javascript** ungeeignet?
Java
```
String name = "Bob";
name = 5;
System.out.println(name);
```
* :angry: :-1:
* > Compiler: Required type:
String
Provided:
int
---
<!-- _class: hidden-list -->
# Warum ist **Javascript** ungeeignet?
Javascript
```
let name = "Bob";
name = "Hallo Welt"
name = [5, 12, 3]
name = true
console.log(name); 
```
* :smile: :+1:
* > console: `true`
