module.exports = class Line {
  constructor(year, month, day, rainfall) {
    this.year = new Number(year);
    this.month = new Number(month);
    this.day = new Number(day);
    this.rainfall = rainfall;
  }
  
  getYear(){
    return this.year;
  }

  getMonth(){
    return this.month;
  }
  
  getDay(){
    return this.day;
  }
  
  getRainfall(){
    return this.rainfall;
  }
  
  toString() {
    return `${this.year},${this.month},${this.day}${this.rainfall}`
  }
};