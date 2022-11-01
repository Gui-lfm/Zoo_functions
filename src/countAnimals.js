const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const result = {};
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  // const { specie, sex } = animal;
}

module.exports = countAnimals;
