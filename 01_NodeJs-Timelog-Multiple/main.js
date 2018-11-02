//Setup the MongoDB
var MongoClient = require('mongodb').MongoClient;
//URL of the database
//dbuser1 - username of the database
//dbuser1pass - password for the user
//file-test - name of the database
var url = 'mongodb://dbuser1:dbuser1pass@ds161022.mlab.com:61022/file-test';

//function to get a random number, from a minimum to a maximum value
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

//the setInterval function process the content every 1000ms
setInterval(function(){
	//get a random value, and assign it a new variable
	var random1 = getRandomInt(0, 100);
	var random2 = getRandomInt(0, 100);
	var random3 = getRandomInt(0, 100);

	//format the date and time to use for the value log
  var date = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '');

  //print to the console the date and the random value
	console.log(date +", Value 1: "+ random1);
  console.log(date +", Value 2: "+ random2);
  console.log(date +", Value 3: "+ random3);

	//create a seconds variable to use for minute validation
	var seconds = new Date();

	//if the seconds equal to 0, then store the values to the db
	if(seconds.getSeconds() == 0){
		console.log("Write to database");

		//format the data for mongoDB
		var mongoLog = [{
			time: date,
			value1: random1,
			value2: random2,
			value3: random3
		}];

		//connect to the client
		MongoClient.connect(url, function (err, db) {
			//Collection1 is the name of the db's collection
			var col = db.collection('Collection1');
			//insert the results, and close the connection
			col.insert(mongoLog, function(err, result){
				db.close();
			});
			console.log("Connected to server");
		});
	}
}, 1000);
