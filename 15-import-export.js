// import { heroes } from "./data/heroes";
// notas en node no funciona este tipo de import, asi que se puede utilizar
const { heroes } = require("./data/heroes");

getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(5));
