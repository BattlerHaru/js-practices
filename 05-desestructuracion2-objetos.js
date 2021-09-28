const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// Asignacion desestructurante
// const { nombre, clave, edad } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarPersona = ({ nombre, clave, edad, rango = "Capitan" }) => {
  //   const { nombre, clave, edad } = usuario;
  //   console.log(nombre, clave, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3232,
      lng: -12.52854651,
    },
  };
};

// const avenger = retornarPersona(persona);
// console.log(avenger);
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornarPersona(persona);
console.log(nombreClave, anios, lat, lng);
