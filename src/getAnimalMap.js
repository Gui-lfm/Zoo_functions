const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

const animalByLocation = (region) => {
  const list = [];
  species.forEach((specie) => {
    if (specie.location === region) {
      list.push(specie.name);
    }
  });

  return list;
};

const defaultMap = () => {
  const map = {};
  locations.forEach((location) => {
    map[location] = animalByLocation(location);
  });

  return map;
};

const getAnimalNames = (animal) => {
  const currentAnimal = species.filter((specie) => specie.name === animal);
  const residents = Object.values(currentAnimal[0].residents);
  const names = residents.map((resident) => resident.name);

  return names;
};

const getNamesByGender = (animal, gender) => {
  const currentAnimal = species.filter((specie) => specie.name === animal);
  const residents = Object.values(currentAnimal[0].residents);
  const namesByGender = residents.filter((resident) => resident.sex === gender);

  return namesByGender.map((filteredAnimal) => filteredAnimal.name);
};

const mapWithNames = (sorted = false, sex = false) => {
  const map = {};
  console.log(sex);
  locations.forEach((location) => {
    map[location] = animalByLocation(location).map((animal) => {
      let names = getAnimalNames(animal);
      if (sex) {
        names = getNamesByGender(animal, sex);
      }
      if (sorted) {
        names.sort();
      }
      const list = { [animal]: names };

      return list;
    });
  });

  return map;
};

function getAnimalMap(options) {
  if (options === undefined || !('includeNames' in options)) {
    return defaultMap();
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return mapWithNames(sorted, sex);
  }
}

module.exports = getAnimalMap;
