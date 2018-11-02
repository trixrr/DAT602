//Create a new function that is called getRandom
//The function has one argument (as an input)
function getRandom (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//setInterval will return the function results, and it will repeat
//according to the time variable that we specify (i.e. 1000)
setInterval(function(){
  //Print to the console (i.e. Terminal) the result of the function
  //The number 100 is used as an input for the function
  console.log(getRandom(100));
}, 1000); //1000ms is the time for the setInterval
