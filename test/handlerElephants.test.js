const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined caso não seja inserido nenhum parâmetro', () => {
    const actual = handlerElephants();
    expect(actual).toBe(undefined);
  });
  it('Retorna a quantidade correta de elefantes residentes ao inserir o argumento count', () => {
    const actual = handlerElephants('count');
    expect(actual).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes ao inserir o argumento names', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(actual).toEqual(expected);
  });
  it('retorna a média de idade dos elefantes ao inserir o argumento averageAge', () => {
    const actual = handlerElephants('averageAge');
    expect(actual).toBeCloseTo(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico ao inserir o argumento location', () => {
    const actual = handlerElephants('location');
    expect(actual).toBe('NW');
  });
  it('retorna a popularidade dos elefantes ao inserir o argumento popularity', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes ao inserir o argumento availability', () => {
    const actual = handlerElephants('availability');
    expect(actual).toEqual(expect.not.arrayContaining(['Monday']));
  });
  it('Retorna null caso seja passado um argumento que não contempla uma funcionalidade', () => {
    const actual = handlerElephants('weigth');
    expect(actual).toBeNull();
  });
  it('Retorna mensagem de erro ao inserir argumento cujo tipo não seja string', () => {
    const actual = handlerElephants({});
    expect(actual).toBe('Parâmetro inválido, é necessário uma string');
  });
});
