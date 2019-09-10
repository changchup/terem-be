const WeatherData = require('./weatherData.js');

const data = new WeatherData('test2.csv');

beforeEach(() => {
});

afterEach(() => {
});

describe('Month methods', () => {
  test('no of Months', () => {
    expect(data.getMonths().count()).toBe(1);
  });
  test('no of Years', () => {
    expect(data.getYears().count()).toBe(1);
  });
});


