const data = require('../data/zoo_data');

const { employees } = data;

const getSpecies = (id) => data.species.find((specie) => specie.id === id).name;
const getLocations = (id) => data.species.find((specie) => specie.id === id).location;

const getFullCoverage = () => {
  const fullList = employees.map((employee) => {
    const { responsibleFor } = employee;
    const species = [];
    const locations = [];
    responsibleFor.forEach((id) => { species.push(getSpecies(id)); });
    responsibleFor.forEach((id) => { locations.push(getLocations(id)); });

    const list = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species,
      locations,
    };
    return list;
  });
  return fullList;
};

const validateEmployee = (employee) => {
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
};

function getEmployeesCoverage(object) {
  if (object === undefined) { return getFullCoverage(); }

  const selectedEmployee = employees.find(
    (employee) =>
      employee.firstName === object.name
      || employee.lastName === object.name
      || employee.id === object.id,
  );
  validateEmployee(selectedEmployee);
  const fullName = `${selectedEmployee.firstName} ${selectedEmployee.lastName}`;
  const { responsibleFor } = selectedEmployee;

  const species = [];
  responsibleFor.forEach((id) => { species.push(getSpecies(id)); });
  const locations = [];
  responsibleFor.forEach((id) => { locations.push(getLocations(id)); });

  return { id: selectedEmployee.id, fullName, species, locations };
}

module.exports = getEmployeesCoverage;
