const WeatherData = require('./weatherData.js');

describe('Weather methods', () => {
  test('test e2e', async () => {
    const data = new WeatherData();
    const result = await data.loadFile('./testing/testall.csv');
    //check overall consistency
    expect(result.length).toBe(162);
    // check first year and month
    const firstYear = result[0].WeatherDataForYear;
    expect(firstYear.Year).toEqual('1858');
    expect(firstYear.FirstRecordedDate).toEqual('1858-07-01');
    expect(firstYear.LastRecordedDate).toEqual('1858-12-29');
    expect(firstYear.TotalRainFall).toEqual('289.20000000000016');
    expect(firstYear.MonthlyAggregates.length).toBe(12);
    expect(firstYear.DaysWithNoRainfall).toEqual('307');
    expect(firstYear.DaysWithRainfall).toEqual('59');
    const firstYear2ndMonth = firstYear.MonthlyAggregates[1].WeatherDataForMonth;
    expect(firstYear2ndMonth.Month).toEqual('February');
    expect(firstYear2ndMonth.FirstRecordedDate).toEqual('');
    expect(firstYear2ndMonth.LastRecordedDate).toEqual('');
    expect(firstYear2ndMonth.TotalRainFall).toBe('0');
    expect(firstYear2ndMonth.DaysWithNoRainfall).toEqual('28');
    expect(firstYear2ndMonth.DaysWithRainfall).toEqual('0');
    //check average year and month
    const middleYear = result[5].WeatherDataForYear;
    expect(middleYear.Year).toEqual('1863');
    expect(middleYear.FirstRecordedDate).toEqual('1863-01-02');
    expect(middleYear.LastRecordedDate).toEqual('1863-12-26')
    expect(middleYear.TotalRainFall).toEqual('1196.1999999999987');
    expect(middleYear.MonthlyAggregates.length).toBe(12);
    expect(middleYear.DaysWithNoRainfall).toEqual('232');
    expect(middleYear.DaysWithRainfall).toEqual('133');
    const fifthYear2Month = middleYear.MonthlyAggregates[1].WeatherDataForMonth;
    expect(fifthYear2Month.Month).toEqual('February');
    expect(fifthYear2Month.FirstRecordedDate).toEqual('1863-02-04');
    expect(fifthYear2Month.LastRecordedDate).toEqual('1863-02-28');
    expect(fifthYear2Month.TotalRainFall).toBe('159.79999999999995');
    expect(fifthYear2Month.DaysWithNoRainfall).toEqual('15');
    expect(fifthYear2Month.DaysWithRainfall).toEqual('13');
    
    //check last year
  });

});


