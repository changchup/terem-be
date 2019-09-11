const Year = require('./year.js');
const Month = require('./month.js');
const Line = require('./line.js');

module.exports = class WeatherData {
  constructor() {
    // data representing the JSON report
    this.months = [];
    this.data = []

    this.year = new Year(0, 0, 0);
    this.month = new Month(0, 0, 0);
    this.lineNo = 0;
    this.previousLine = new Line(0, 0, 0);
  }

  // turn readlines async so can test result
  async loadFile(file) {
    const lineReader = require('readline').createInterface({
      input: require('fs').createReadStream(file)
    });

    const endOfProcessing = new Promise((resolve, reject)=> {
    lineReader.on('line', (csvLine) => {
      this.lineNo++;

      // do not process header
      if (this.lineNo === 1) return

      // put line in a line object and process by line
      const splitLine = csvLine.split(',');
      
      // initialize year and month
      if (this.lineNo === 2) {
        this.processFirstLine(new Line(splitLine[2], splitLine[3], splitLine[4], splitLine[5]));
      }

      this.processLine(new Line(splitLine[2], splitLine[3], splitLine[4], splitLine[5]));
    });

    // end of processing file
    lineReader.on('close', () => {
      // push any remaining year and month data
      this.data.push(this.year.getFormattedObject(this.months));
      resolve();
    })
  });
  await endOfProcessing;
  return this.data;
  }

  /**
   * Start from earliest time period to latest.  As a new year or month
   * is encountered create a new object, load its data then push to the 
   * report data structure.
   */
  processLine(line) {

    // is this a new year?
    if (line.getYear() > this.year.getYear()) {
      
      // push the final month
      this.months.push(this.month.getFormattedObject());

      // push the completed year to the data structure
      this.data.push(this.year.getFormattedObject(this.months));
      this.months = [];

      // start a new year
      this.year = new Year(line.getYear(), line.getMonth(), line.getDay());
      //start a new month
      this.month = new Month(line.getYear(), line.getMonth(), line.getDay());
    }
      
    // is this a new month?
    if (line.getMonth() > this.month.getMonth()) {
      // push the completed month to the data structure
      this.months.push(this.month.getFormattedObject());
      //start a new month
      this.month = new Month(line.getYear(), line.getMonth(), line.getDay());
    }

    // process line details
    this.year.processLine(line);
    this.month.processLine(line);

    // save this line to be previous line in the next line
    this.previousLine = line;
  }

  processFirstLine(line) {

    // start a new year
    this.year = new Year(line.getYear(), line.getMonth(), line.getDay());

    //start a new month
    this.month = new Month(line.getYear(), line.getMonth(), line.getDay());

    // process line details
    this.year.processLine(line);
    this.month.processLine(line);
  }
};