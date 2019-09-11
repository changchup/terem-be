### To Run
```
node index.js [path to csv file]  
```
i.e. 
```
node index.js test.csv 
```

The json will be printed to the standard out.

### To Run Tests
```
npm test
```
### Assumptions

lines in date order, no data structure errors

It was not clear to me how to format multiple elements => When there were multiple elements such as month I put them inside an array.

I did not make tests for weatherData.js as I could not get the promise to work with line reader.

### Improvements

use enums for fixed values  
make checks for above assumptions  

