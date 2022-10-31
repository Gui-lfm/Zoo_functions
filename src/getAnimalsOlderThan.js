const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const selectSpecie = species.find((specie) => specie.name === animal);
  const { residents } = selectSpecie;
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
