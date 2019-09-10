const BaseTime = require('./baseTime.js');

module.exports = class Year extends BaseTime {
  constructor(year, month, day) {
    super(year, month, day);
    this.year = year;
  }

  getName() {
    return this.year;
  }

  getFormattedObject(months) {
    return {
      WeatherDataForYear: {
        Year: this.getName().toString(),
        FirstRecordedDate: this.formatDate(this.getFirstRecordedDate()),
        LastRecordedDate: this.formatDate(this.getLastRecordedDate()),
        TotalRainFall: this.getTotalRainfall().toString(),
        AverageDailyRainFall: this.getAverageRainFall().toString(),
        DaysWithNoRainfall: this.getDaysWithoutRain().toString(),
        DaysWithRainfall: this.getDaysWithRain().toString(),
        MonthlyAggregates: months
      }
    }
  }

};