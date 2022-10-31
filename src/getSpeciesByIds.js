const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  species.forEach((specie) => {
    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      if (id === specie.id) {
        result.push(specie);
      }
    }
  });
  return result;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
