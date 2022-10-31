const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) return {};
  return employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
