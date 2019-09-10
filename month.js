const BaseTime = require('./baseTime.js');

module.exports = class WeatherDataForMonth extends BaseTime {
  constructor(year, month, day) {
    super(year, month, day);
  }

  getName() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[this.month - 1];
  }


  getFormattedObject() {
    return {
      WeatherDataForMonth: {
        Month: this.getName(),
        FirstRecordedDate: this.formatDate(this.getFirstRecordedDate()),
        LastRecordedDate: this.formatDate(this.getLastRecordedDate()),
        TotalRainFall: this.getTotalRainfall().toString(),
        AverageDailyRainFall: this.getAverageRainFall().toString(),
        DaysWithNoRainfall: this.getDaysWithoutRain().toString(),
        DaysWithRainfall: this.getDaysWithRain().toString()
      }
    }
  }

};