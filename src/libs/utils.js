
/**
 * Parses CSV format to JSON format for easy manipulation of data
 */
export function csv2json(body) {
	console.log("parsing csv to json");
	var i = [];
	// split the data into array by whitespaces
	var o = body.split(/\r\n|\n/);

	// split the first row of that array only by comma (,) to get headers
	var a = o[0].split(",");

	// loop through the other rows to obtain data
	for (var o = body.split(/\r\n|\n/), a = o[0].split(","), s = 1; s < o.length; s++) {
		// split each row by comma
		var l = o[s].split(",")
		// compare the splited row with the first/header row
		if (l.length == a.length) {
			// run through the header row
			// attaches splited row to the header row
			// then store it on variable d
			// create array by pushing the stored data to the variable i
			for(var d = {}, u = 0; u < a.length; u++) d[a[u]] = l[u]; i.push(d)
		}
	}
	// i[i.length -1]
	return i;
}

export const csvParser = async function(data){
	// //This is the array which will convert the json data.
	var jsonArray = [];

    // //The following line will split the csv file line by line and store each of it in the vraiable dataArray.
    // var dataArray = data.split(/\r\n|\n/);
	let dataArray = await CSVToArray(data);
	
    //This line helps us to obtain the keys for various values in the file.
    // var fieldsArray =  dataArray[0].split(",");
    var fieldsArray =  dataArray[0];

	// console.log(dataArray)

    //The following loop creates an object for every line and then pushes it into the array.
    for(var i = 1;i < dataArray.length; i++) {
        var temp = {};
        // contains values which are separated by a comma in a line.
        // var valuesArray = dataArray[i].split(",");
		var valuesArray = dataArray[i];
		if (valuesArray.length > 1) {
			for (var k = 0 ; k < valuesArray.length; k++) {
				temp[fieldsArray[k]] = valuesArray[k]
			}
			//pushes the object into the array.
			jsonArray.push(temp);
		}
    }
	return jsonArray;
};

/**
 * This advanced csv to json parse reads contents line by line
 * @param {*} csv 
 */
export function csvToJsonParser(csv) {
	var dataArray = csv.split(/\r\n|\n/);

    //This line helps us to obtain the keys for various values in the file.
    var fieldsArray =  dataArray[0].split(",");
	// console.log(dataArray)

	let array = [];

	for (let i = 1; i < dataArray.length; i++) {
		let line = dataArray[i];
		
		if (line.length > 1) {
			let chars = [];
			let content = "";

			// loop throught each character in a line
			for (let j = 0; j < line.length; j++) {
				let char = line[j];
				if (char.search(",") == 0) {

				}
				else {
					// concat char
					content += char;
				}
				if (char.search("\"") == 0) chars.push(char)
			}
			console.log(chars)
		}
	}
}

export function csvToJson(csv) {
	const [firstLine, ...lines] = csv.split('\n');
	return lines.map(line =>
		firstLine.split(',').reduce(
		(curr, next, index) => ({
			...curr,
			[next]: line.split(',')[index],
		}),
		{}
		)
	);
}

export async function CSVToArray(strData, strDelimiter) {
	// Check to see if the delimiter is defined. If not,
	// then default to comma.
	strDelimiter = (strDelimiter || ",");
  
	// Create a regular expression to parse the CSV values.
	var objPattern = new RegExp(
	  (
		// Delimiters.
		"(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
  
		// Quoted fields.
		"(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
  
		// Standard fields.
		"([^\"\\" + strDelimiter + "\\r\\n]*))"
	  ),
	  "gi"
	);
  
  
	// Create an array to hold our data. Give the array
	// a default empty first row.
	var arrData = [[]];
  
	// Create an array to hold our individual pattern
	// matching groups.
	var arrMatches = null;
  
  
	// Keep looping over the regular expression matches
	// until we can no longer find a match.
	while (arrMatches = objPattern.exec(strData)) {
  
	  // Get the delimiter that was found.
	  var strMatchedDelimiter = arrMatches[1];
  
	  // Check to see if the given delimiter has a length
	  // (is not the start of string) and if it matches
	  // field delimiter. If id does not, then we know
	  // that this delimiter is a row delimiter.
	  if (
		strMatchedDelimiter.length &&
		strMatchedDelimiter !== strDelimiter
	  ) {
  
		// Since we have reached a new row of data,
		// add an empty row to our data array.
		arrData.push([]);
  
	  }
  
	  var strMatchedValue;
  
	  // Now that we have our delimiter out of the way,
	  // let's check to see which kind of value we
	  // captured (quoted or unquoted).
	  if (arrMatches[2]) {
  
		// We found a quoted value. When we capture
		// this value, unescape any double quotes.
		strMatchedValue = arrMatches[2].replace(
		  new RegExp("\"\"", "g"),
		  "\""
		);
  
	  } else {
  
		// We found a non-quoted value.
		strMatchedValue = arrMatches[3];
  
	  }
  
  
	  // Now that we have our value string, let's add
	  // it to the data array.
	  arrData[arrData.length - 1].push(strMatchedValue);
	}
  
	// Return the parsed data.
	return (arrData);
}

// _.convert = function(data, separator) {
// 	separator || (separator = ',');
// 	if (!_.isObject(data))
// 		throw 'Your JSON must be an array or an object.';
// 	if (!_.isArray(data))
// 		data = [data];
// 	var allKeys = []
// 	  , allRows = [];
// 	for (var i = 0; i < data.length; i++) {
// 		var o = data[i]
// 		  , row = {};
// 		if (o !== undefined && o !== null && (!_.isObject(o) || _.isArray(o)))
// 			throw 'Item in array is not an object: ' + JSON.stringify(o);
// 		var keys = _.keys(o);
// 		for (var k = 0; k < keys.length; k++) {
// 			var key = keys[k];
// 			if (allKeys.indexOf(key) === -1)
// 				allKeys.push(key);
// 			var value = o[key];
// 			if (value === undefined && value === null)
// 				continue;
// 			if (_.isString(value)) {
// 				row[key] = '"' + value.replace(/"/g, '""') + '"';
// 			} else {
// 				row[key] = JSON.stringify(value);
// 				if (_.isObject(value) || _.isArray(value))
// 					row[key] = '"' + row[key].replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
// 			}
// 		}
// 		allRows.push(row);
// 	}
// 	keyValues = [];
// 	for (var i = 0; i < allKeys.length; i++) {
// 		keyValues.push('"' + allKeys[i].replace(/"/g, '""') + '"');
// 	}
// 	var csv = keyValues.join(separator) + '\n';
// 	for (var r = 0; r < allRows.length; r++) {
// 		var row = allRows[r]
// 		  , rowArray = [];
// 		for (var k = 0; k < allKeys.length; k++) {
// 			var key = allKeys[k];
// 			rowArray.push(row[key] || '');
// 		}
// 		csv += rowArray.join(separator) + '\n';
// 	}
// 	return csv;
// }

const statuses = ['good', 'warning', 'critical', 'unknown'];

// get user location
export function userLocation() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        const stored = localStorage.getItem('geolocation');
        if (stored) resolve(JSON.parse(stored));
      },
    );
  });
}

export function generateLocations(n, options) {
  const { center, radius } = options;
  const locations = [];
  for (let i = 0; i < n; i += 1) {
    locations.push({
      coord: [
        center[0] - (Math.random() - 0.5) * radius,
        center[1] - (Math.random() - 0.5) * radius,
      ],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return locations;
}

export function formatLocationsToLatLng(locations) {
  return locations?.map(location => location.coord);
}

export function findCenter(bounds) {
  return [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
}

export function findCenterOfGravity(locations) {
  const center = [0, 0];
  for (let i = 0; i < locations.length; i += 1) {
    center[0] += locations[i][0];
    center[1] += locations[i][1];
  }
  center[0] /= locations.length;
  center[1] /= locations.length;
  return center;
}

export function generateLocations2() {
	let geoJSON = {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [-104.99404, 39.75621]
				},
				"properties": {
					"name": "Coors Field"
				},
				"grommet": {
					"status": "critical"
				}
			}
		]
	}
	return geoJSON;
}