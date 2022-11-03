const data = require('../data/zoo_data');

const { species } = data;

const getAnimalslist = () => {
  const list = [];

  species.forEach((specie) => {
    const { name } = specie;
    list.push(name);
  });
  return list;
};

// const fullSchedule = () => {};

function getSchedule(scheduleTarget) {
  const animals = getAnimalslist();

  if (animals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  // if(scheduleTarget === undefined){
  //   return
  // }
}

module.exports = getSchedule;
