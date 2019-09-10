const BaseTime = require('./baseTime.js');

const baseTime = new BaseTime(year, month, day);

describe('baseTime utils', () => {
  test('Last record date', () => {
    expect(baseTime.getLastRecordDate()).toEqual('');
  });
  test('First record date', () => {
    expect(baseTime.getFirstRecordDate()).toEqual('');
  });
  test('Average', () => {
    expect(baseTime.getAverageRainFall().toBe(0);
  });
  test('Total', () => {
    expect(baseTime.getTotalRainfall()).toBe(0);
  });
  test('Days with rain', () => {
    expect(baseTime.getDaysWithRain()).toBe(0);
  });
  test('Days without rain', () => {
    expect(baseTime.getDaysWithoutRain()).toBe(0);
  });
});