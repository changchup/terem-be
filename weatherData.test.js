const WeatherData = require('./weatherData.js');

describe('Weather methods', () => {
  test('test', () => {
    const data = new WeatherData();
    data.loadFile('./testing/testall.csv');
    //console.log(data);

    expect(1 + 1).toBe(2);
  });

});


