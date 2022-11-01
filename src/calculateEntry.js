const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const EntryQtd = countEntrants(entrants);
  const { child, adult, senior } = EntryQtd;
  const totalChildPrice = child * 20.99;
  const totalAdultPrice = adult * 49.99;
  const totalSeniorPrice = senior * 24.99;

  return totalChildPrice + totalAdultPrice + totalSeniorPrice;
}

module.exports = { calculateEntry, countEntrants };
