const mongoose = require("mongoose");
const Autor = require("./models/usuario");
const Texto = require("./models/texto");

const autorData = [
  {
    username: "U1",
    name: "User1",
    email: "email1@email.com",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique nibh arcu, vitae mollis erat faucibus in. Nam in leo velit. Aenean dictum sagittis varius. Praesent sodales orci mi. Mauris.",
  },
  {
    username: "U2",
    name: "User2",
    email: "email2@email.com",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique nibh arcu, vitae mollis erat faucibus in. Nam in leo velit. Aenean dictum sagittis varius. Praesent sodales orci mi. Mauris.",
  },
  {
    username: "U3",
    name: "User3",
    email: "email3@email.com",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique nibh arcu, vitae mollis erat faucibus in. Nam in leo velit. Aenean dictum sagittis varius. Praesent sodales orci mi. Mauris.",
  },
];

const textoData = [
  {
    type: "articulos",
    title: "Texto 1",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg",
    created: "2020-05-18T16:00:00Z",
  },
  {
    type: "articulos",
    title: "Texto 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2012/11/07/02/55/tulips-65036_1280.jpg",
    created: "2020-05-19T16:00:00Z",
  },
  {
    type: "articulos",
    title: "Texto 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg",
    created: "2020-05-20T16:00:00Z",
  },
  {
    type: "ensayos",
    title: "Texto 1",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg",
    created: "2020-05-18T16:00:00Z",
  },
  {
    type: "ensayos",
    title: "Texto 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2012/11/07/02/55/tulips-65036_1280.jpg",
    created: "2020-05-19T16:00:00Z",
  },
  {
    type: "ensayos",
    title: "Texto 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg",
    created: "2020-05-20T16:00:00Z",
  },
];

function seedDB() {
  Articulo.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Articulos borrados");
    Autor.deleteMany({}, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Usuarios borrados");
      autorData.forEach((seed) => {
        Autor.create(seed, (err, autor) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Autor creado");
            articuloData.forEach((seed) => {
              seed.author = { id: autor._id };
              seed.author.username = autor.username;
              Articulo.create(seed, (err, articulo) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Articulo creado");
                }
              });
            });
          }
        });
      });
    });
  });
}

function seedDBTextos() {
  Texto.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Textos borrados");
    textoData.forEach((seed) => {
      Texto.create(seed, (err, texto) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Texto creado");
        }
      });
    });
  });
}

module.exports = seedDBTextos;
