const WeatherData = require('./weatherData.js');

describe('Weather methods', () => {
  test('test', () => {
    const data = new WeatherData();
    const result = data.loadFile('./testing/testall.csv');
    console.log(result)

    expect(1 + 1).toBe(2);
  });

});


