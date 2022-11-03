const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = employees.find((employee) => employee.id === id);
  const firstResponsible = selectedEmployee.responsibleFor[0];
  const specieResidents = species.find(
    (specie) => specie.id === firstResponsible,
  ).residents;

  const oldest = specieResidents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = oldest[0];

  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
