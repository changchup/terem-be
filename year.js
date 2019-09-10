const BaseTime = require('./baseTime.js');

module.exports = class Year extends BaseTime {
  constructor(year, month, day) {
    super(year, month, day);
    this.year = year;
    }

    getName(){
      return this.year;
    }

    getFormattedObject() {
      return {
        WeatherDataForYear: {
          WeatherDataForMonth: {
            Year: this.getName(),
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