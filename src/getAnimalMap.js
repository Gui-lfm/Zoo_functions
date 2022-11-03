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

const mapWithNames = () => {
  const map = {};
  locations.forEach((location) => {
    map[location] = animalByLocation(location).map((animal) => ({
      [animal]: getAnimalNames(animal),
    }));
  });

  return map;
};

function getAnimalMap(options) {
  if (options === undefined || !('includeNames' in options)) {
    return defaultMap();
  }
  if ('includeNames' in options) {
    return mapWithNames();
  }
}

const options = { includeNames: true, sorted: true };
console.log(getAnimalMap(options));

module.exports = getAnimalMap;
