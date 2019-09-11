
module.exports = class BaseTime {
  constructor(year, month, day) {
    this.firstRecordedDate = '';
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
    if (!rainfall || rainfall === '0') {
      this.daysWithoutRain++;
    } else {
      this.daysWithRain++;
    }
    this.rainfall += new Number(rainfall);
  }

  processLine(line) {
    this.addRain(line.rainfall);
    this.setFirstRecordedDate(line);
    this.setLastRecordedDate(line);
  }

  setLastRecordedDate(line) {
    // if there was no rain or no rain recorded, do not set it
    if (line.getRainfall() !== '0') {
      this.lastRecordedDate = new Date(line.year, new Number(line.month) - 1, line.day);
    }
  }

  setFirstRecordedDate(line) {
    // if there was no rain or no rain recorded and no first recorded date
    if (line.getRainfall() !== '0' && this.firstRecordedDate === '') {
      this.firstRecordedDate = new Date(line.year, new Number(line.month) - 1, line.day);
    }

  }

  getFirstRecordedDate() {
    return this.firstRecordedDate;
  }

  getLastRecordedDate() {
    return this.lastRecordedDate;
  }

  getAverageRainFall() {
    return this.rainfall / this.noOfDays;
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
    if (!date) return '';

    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const days = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    return date.getFullYear() + "-" + months[date.getMonth()] + "-" + days[date.getDate()];
  }

};