const BaseTime = require('./baseTime.js');
const Line = require('./line.js');

const baseTime = new BaseTime('2019', '01', '01');
baseTime.processLine(new Line('	2019	', '	1	', '	1	', '8.8'));
baseTime.processLine(new Line('	2019	', '	1	', '	2	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	3	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	4	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	5	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	6	', '26.2'));
baseTime.processLine(new Line('	2019	', '	1	', '	7	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	8	', '0.6'));
baseTime.processLine(new Line('	2019	', '	1	', '	9	', '4.8'));
baseTime.processLine(new Line('	2019	', '	1	', '	10	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	11	', '0.8'));
baseTime.processLine(new Line('	2019	', '	1	', '	12	', '3.8'));
baseTime.processLine(new Line('	2019	', '	1	', '	13	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	14	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	15	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	16	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	17	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	18	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	19	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	20	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	21	', '0.4'));
baseTime.processLine(new Line('	2019	', '	1	', '	22	', '0.2'));
baseTime.processLine(new Line('	2019	', '	1	', '	23	', '0.4'));
baseTime.processLine(new Line('	2019	', '	1	', '	24	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	25	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	26	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	27	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	28	', '2.8'));
baseTime.processLine(new Line('	2019	', '	1	', '	29	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	30	', '0'));
baseTime.processLine(new Line('	2019	', '	1	', '	31	', '0'));
baseTime.processLine(new Line('	2019	', '	2	', '	1	', '2.8'));
baseTime.processLine(new Line('	2019	', '	2	', '	2	', '23'));
baseTime.processLine(new Line('	2019	', '	2	', '	3	', '0'));

describe('baseTime utils', () => {
  test('Last record date', () => {
    expect(baseTime.getLastRecordedDate()).toEqual(new Date('2019', '1', '2'));
  });
  test('First record date', () => {
    expect(baseTime.getFirstRecordedDate()).toEqual(new Date('2019', '0', '1'));
  });
  test('Days with rain', () => {
    expect(baseTime.getDaysWithRain()).toBe(12);
  });
  test('Days without rain', () => {
    expect(baseTime.getDaysWithoutRain()).toBe(22);
  });

  test('Average rain fall', () => {
    expect(baseTime.getAverageRainFall()).toBe(2.1941176470588233);
  });

});