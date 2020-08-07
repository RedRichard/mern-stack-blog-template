const mongoose = require("mongoose");
const Articulo = require("./models/articulo");
const Autor = require("./models/usuario");

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

const articuloData = [
  {
    title: "Articulo 1",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg",
    created: "2020-05-18T16:00:00Z",
    titleId: "articulo-1",
  },
  {
    title: "Articulo 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2012/11/07/02/55/tulips-65036_1280.jpg",
    created: "2020-05-19T16:00:00Z",
    titleId: "articulo-2",
  },
  {
    title: "Articulo 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg",
    created: "2020-05-20T16:00:00Z",
    titleId: "articulo-3",
  },
  {
    title: "Articulo 4",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg",
    created: "2020-05-18T16:00:00Z",
    titleId: "articulo-4",
  },
  {
    title: "Articulo 5",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2012/11/07/02/55/tulips-65036_1280.jpg",
    created: "2020-05-19T16:00:00Z",
    titleId: "articulo-5",
  },
  {
    title: "Articulo 6",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    image:
      "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg",
    created: "2020-05-20T16:00:00Z",
    titleId: "articulo-6",
  },
];

function seedDB2() {
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
        Autor.create(autorData[0], (err, autor) => {
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
      Autor.create(autorData[0], (err, autor) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Autor creado");
          articuloData[0].author = { id: autor._id };
          articuloData[0].author.username = autor.username;
          Articulo.create(articuloData[0], (err, articulo) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Articulo creado");
            }
          });
        }
      });
      Autor.create(autorData[0], (err, autor) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Autor creado");
          articuloData[3].author = { id: autor._id };
          articuloData[3].author.username = autor.username;
          Articulo.create(articuloData[3], (err, articulo) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Articulo creado");
            }
          });
        }
      });
      Autor.create(autorData[1], (err, autor) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Autor creado");
          articuloData[1].author = { id: autor._id };
          articuloData[1].author.username = autor.username;
          Articulo.create(articuloData[1], (err, articulo) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Articulo creado");
            }
          });
        }
      });
      Autor.create(autorData[0], (err, autor) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Autor creado");
          articuloData[4].author = { id: autor._id };
          articuloData[4].author.username = autor.username;
          Articulo.create(articuloData[4], (err, articulo) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Articulo creado");
            }
          });
        }
      });
      Autor.create(autorData[2], (err, autor) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Autor creado");
          articuloData[2].author = { id: autor._id };
          articuloData[2].author.username = autor.username;
          Articulo.create(articuloData[2], (err, articulo) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Articulo creado");
            }
          });
        }
      });
      Autor.create(autorData[0], (err, autor) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Autor creado");
          articuloData[5].author = { id: autor._id };
          articuloData[5].author.username = autor.username;
          Articulo.create(articuloData[5], (err, articulo) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Articulo creado");
            }
          });
        }
      });
    });
  });
}

module.exports = seedDB;
