const data = require('../data/zoo_data');

const { species } = data;
const dayList = ['Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Thursday', 'Sunday', 'Monday'];
const getAnimalslist = () => {
  const list = [];

  species.forEach((specie) => {
    const { name } = specie;
    list.push(name);
  });
  return list;
};

const getAnimalsExhibition = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  const list = [];
  species.forEach((specie) => {
    if (specie.availability.includes(day)) {
      list.push(specie.name);
    }
  });
  return list;
};

const getOfficeHour = (day) => {
  if (day === 'Monday') { return 'CLOSED'; }
  const { hours } = data;
  const selectedDay = hours[day];

  return `Open from ${selectedDay.open}am until ${selectedDay.close}pm`;
};

const fullSchedule = () => {
  const result = {};
  dayList.forEach((day) => {
    const currentDay = day;
    result[currentDay] = {
      officeHour: getOfficeHour(day),
      exhibition: getAnimalsExhibition(day),
    };
  });

  return result;
};

function getSchedule(scheduleTarget) {
  const animals = getAnimalslist();

  if (animals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget)
      .availability;
  }
  if (
    scheduleTarget === undefined
    || (!animals.includes(scheduleTarget) && !dayList.includes(scheduleTarget))
  ) {
    return fullSchedule();
  }
  const daySchedule = { [scheduleTarget]: {
    officeHour: getOfficeHour(scheduleTarget),
    exhibition: getAnimalsExhibition(scheduleTarget),
  },
  };
  return daySchedule;
}

module.exports = getSchedule;
