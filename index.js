const WeatherData = require('./weatherdata.js');

data = new WeatherData();

if(process.argv.length < 3) {
  console.log("incorrect arguments");
  process.exit();
}

data.loadFile(process.argv[2]).then((result)=>{
  console.log(JSON.stringify({ WeatherData: result }));
});
