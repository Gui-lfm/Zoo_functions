const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = [];
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      result.push(`${employee.firstName} ${employee.lastName}`);
    }
  });

  return result;
}

module.exports = { isManager, getRelatedEmployees };
