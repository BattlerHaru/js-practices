// setTimeout(() => {
//   console.log("Hola Mundo, soy un callback");
// }, 1000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Fernando",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});
