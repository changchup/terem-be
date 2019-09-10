const BaseTime = require('./baseTime.js');

module.exports = class WeatherDataForMonth extends BaseTime {
  constructor(year, month, day) {
    super(year, month, day);
    this.month = month;
  }

  getName() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[this.month];
  }

  getMonth() {
    return this.month;
  }
  
  getFormattedObject() {
    return {
      MonthlyAgregrates: {
        WeatherDataForMonth: {
          Month: this.getName(),
          FirstRecordedDate: this.formatDate(this.getFirstRecordedDate()),
          LastRecordedDate: this.formatDate(this.getLastRecordedDate()),
          TotalRainFall: this.getTotalRainfall(),
          AverageDailyRainFall: this.getAverageRainFall(),
          DaysWithNoRainfall: this.getDaysWithoutRain(),
          DaysWithRainfall: this.getDaysWithRain()
        }
      }
    }
  }

};