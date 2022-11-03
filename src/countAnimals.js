const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const result = {};
    species.forEach((specie) => { result[specie.name] = specie.residents.length; });
    return result;
  }
  if ('sex' in animal) {
    let count = 0;
    const specieResidents = species.find((specie) => specie.name === animal.specie).residents;
    specieResidents.forEach((resident) => {
      if (resident.sex === animal.sex) { count += 1; }
    });
    return count;
  }

  return species.find((specie) => specie.name === animal.specie).residents.length;
}

module.exports = countAnimals;
