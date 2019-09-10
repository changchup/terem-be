const Year = require('./year.js');
const Month = require('./month.js');
const Line = require('./line.js');

module.exports = class WeatherData {
  constructor() {
    // data representing the JSON report
    this.data = [];
    this.year = new Year(0,0,0);
    this.month = new Month(0,0,0);
    // year to compare to find if a new year
    this.yearMarker = 0;
    // month to compare to find if a new month
    this.monthMarker = 0;
    this.lineNo = 0;
  }

  loadFile(file) {
    const lineReader = require('readline').createInterface({
      input: require('fs').createReadStream(file)
    });

    lineReader.on('line', (csvLine) => {
      // do not process header
      this.lineNo++;
      if(this.lineNo === 1) return;
      // put line in a line object and process by line
      const splitLine = csvLine.split(',');
      this.processLine(new Line(splitLine[2], splitLine[3], splitLine[4], splitLine[5]));
    });

    // end
    lineReader.on('close',  () => {
      console.log(JSON.stringify(this.data));
    });
  }

  /**
   * Start from earliest time period to latest.  As a new year or month
   * is encountered create a new object, load its data then push to the 
   * report data structure.
   * @param {*} line 
   */
  processLine(line) {
    
    // is this a new year?
    if (line.getYear() > this.year.getYear()) {
      // set the completed date
      this.year.setLastRecordedDate(line.getYear(), line.getMonth(), line.getDay());
      // push the completed year to the data structure
      this.data.push(this.year.getFormattedObject());
      // start a new year
      this.year = new Year(line.getYear(), line.getMonth(), line.getDay());
    }
    // is this a new month?
    if (line.getMonth() > this.month.getMonth()) {
      // set the completed date
      this.month.setLastRecordedDate(line.getYear(), line.getMonth(), line.getDay());
      // push the completed month to the data structure
      this.data.push(this.month.getFormattedObject());
      //start a new month
      this.month = new Month(line.getYear(), line.getMonth(), line.getDay());
    }

    // process line details
    this.year.addRain(line.rainfall);
    this.month.addRain(line.rainfall);

  }

  getData() {
    return this.data;
  }

};