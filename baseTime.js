
module.exports = class Year {
  constructor(year, month, day) {
    this.firstRecordedDate = new Date(year, month, day);
    this.lastRecordedDate = '';
    this.daysWithRain = 0;
    this.daysWithoutRain = 0;
    this.rainfall = 0;
    this.noOfDays = 0;
    this.day = new Number(day);
    this.month = new Number(month);
    this.year = new Number(year);
  }

  addRain(rainfall) {
    this.noOfDays++;
    if(rainfall ==='0'){
      this.daysWithoutRain++;
    } else {
      this.daysWithRain++;
    }
    this.rainfall += new Number(rainfall);
  }

  setLastRecordedDate(year, month, day) {
    this.lastRecordedDate = new Date(year, month, day);
  }

  getFirstRecordedDate() {
    return this.firstRecordedDate;
  }

  getLastRecordedDate() {
    return this.lastRecordedDate;
  }

  getAverageRainFall() {
    return this.rainfall/this.noOfDays;
  }

  getTotalRainfall() {
    return this.rainfall;
  }

  getDaysWithRain() {
    return this.daysWithRain;
  }

  getDaysWithoutRain() {
    return this.daysWithoutRain;
  }

  getYear() {
    return this.year;
  }

  getMonth() {
    return this.month;
  }

  getDay() {
    return this.day;
  }

  formatDate(date) {
    const months = ["01", "02", "03","04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const days = ["01", "02", "03","04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    return date.getFullYear() + "-" + months[date.getMonth()]  + "-" + days[date.getDate()];
  }

};