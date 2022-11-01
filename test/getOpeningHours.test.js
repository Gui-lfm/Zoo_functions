const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna um objeto contendo todos os horários da semana caso não seja inserido um parâmetro', () => {
    const expectedResult = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toEqual(expectedResult);
  });
  it('Retorna um erro caso a hora do parâmetro dataHour seja inválida', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Retorna um erro caso os minutos do parâmetro dataHour seja inválido', () => {
    expect(() => getOpeningHours('Saturday', '09:0b-AM')).toThrow('The minutes should represent a number');
  });
  it('Retorna um erro caso a abreviação do parâmetro dataHour seja inválida', () => {
    expect(() => getOpeningHours('Saturday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Retorna um erro caso a hora do parâmetro dataHour não esteja entre 0 e 12', () => {
    expect(() => getOpeningHours('Saturday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Retorna um erro caso os minutos do parâmetro dataHour não estejam entre 0 e 59', () => {
    expect(() => getOpeningHours('Saturday', '09:62-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Retorna um erro caso os dia inserido esteja fora for formato válido', () => {
    expect(() => getOpeningHours('Mon', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Retorna uma string dizendo que o zoológico está fechado ao ser inserido dias/horários fora da faixa de funcionamento', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    expect(actual).toBe('The zoo is closed');
  });
  it('Retorna uma string dizendo que o zoológico está aberto ao ser inserido dias/horários dentro da faixa de funcionamento', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toBe('The zoo is open');
  });
});
