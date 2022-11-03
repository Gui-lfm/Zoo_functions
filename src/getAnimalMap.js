const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  const animalMap = species.map((specie) => ({
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  }));

  return animalMap;
}

module.exports = getAnimalMap;
