# To-do list app
This is a to-do list app developed as part of a coding test for the Atom Chat company.
Inspired by **this** Simpsons to do list, I decided to go for a paper like, handwritten design.
![Homer's To Do list : r/TheSimpsons](https://external-preview.redd.it/kCjls9biFFl9DWCgc53iLla7PcfdKQxW1_twLSxyixs.jpg?auto=webp&s=ff06f7ffdae24eb0567a332fec3010217179c5b5)

To accomplish that style, after a day of searching for components and styles, I stumbled upon PaperCSS, a components library that was the perfect fit. Since it also included some layout and flexbox components which I didn't need since I was going to using Tailwind, I cloned the PaperCSS repo and made some changes to leave out some of the classes that I wouldn't use, in order to avoid conflicts with Tailwind.
 Built with:
- TypeScript 5.1.3.
- Angular 16.2.0
- Ngx Infinite Scroll 16.0.0
- TailwindCSS 3.3.3
- PaperCSS 1.9.2
- Pencil and Paper checkbox: https://codepen.io/jkantner/details/wEeWWG
- Hosted on Firebase Hosting: https://atom-ebfdc.web.app/


# API
This project connects to a Node.js server in order to connect to the NoSQL database Cloud Firestore where the tasks are created and fetched. The code for this API lives on: https://github.com/devendr4/atom-tasks-challenge-api
Built with:
- Express.js: 4.8.2
- TypeScript: 5.2.2
- Firebase-admin: 11.10.1
- Deployed using Firebase functions: https://us-central1-atom-ebfdc.cloudfunctions.net/default/v1/

# Spanish
## Lista de tareas
Esta es una aplicación de lista de tareas desarrollada como parte de una prueba de desarrollo para la empresa Atom Chat.
Inspirada por **esta** lista de tareas de los Simpsons, decidí optar por un diseño manuscrito similar al papel.
![Homer's To Do list : r/TheSimpsons](https://external-preview.redd.it/kCjls9biFFl9DWCgc53iLla7PcfdKQxW1_twLSxyixs.jpg?auto=webp&s=ff06f7ffdae24eb0567a332fec3010217179c5b5)

Para lograr ese estilo, después de un día de búsqueda de componentes y estilos, me topé con PaperCSS, una libreria que era justo lo que buscaba. Como también incluía algunos componentes de layout y flexbox que necesitaba ya que iba a usar Tailwind, cloné el repositorio de PaperCSS e hice algunos cambios para dejar fuera algunas de las clases de CSS que no iba a usar, para así evitar conflictos con Tailwind.

 Desarrollado con:
- TypeScript 5.1.3.
- Angular 16.2.0
- Ngx Infinite Scroll 16.0.0
- TailwindCSS 3.3.3
- PaperCSS 1.9.2
- Pencil and Paper checkbox: https://codepen.io/jkantner/details/wEeWWG
- Hosteado en Firebase Hosting: https://atom-ebfdc.web.app/
-
# API
Este proyecto se conecta a un servidor Node.js el cual se encarga de gestionar la conexión con la base de datos NoSQL Cloud Firestore, donde se crean y obtienen las tareas. El código de esta API se encuentra en: https://github.com/devendr4/atom-tasks-challenge-api
Desarrollado con:
- Express.js: 4.8.2
- Cloud Firestore.
- TypeScript: 5.2.2
- Firebase-admin: 11.10.1
- Desplegado con Firebase functions: https://us-central1-atom-ebfdc.cloudfunctions.net/default/v1/
