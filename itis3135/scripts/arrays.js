var days = ["Monday", "Tuesday"];
var temperature = [80,70];

var $ = function (id) { return document.getElementById(id); };


window.onload = function () {

    $("display_results").onclick = displayResults;
    $("add_temperature").onclick = addTemperature;
    $("display_temperature").onclick = displayTemperature;
    $("days").focus();
    
};

function addTemperature(){
    var dayInput = document.getElementById("days").value;
    var temperatureInput = document.getElementById("temperature").value;
    
   if(temperatureInput>150 || temperatureInput<-30 || temperatureInput == ""){
       alert("You must enter a day and a valid temperature");
       temperatureInput = "";
       $("days").focus();
   }
   else {
       temperatureInput = parseInt(temperatureInput);
       days.push(dayInput);
       temperature.push(temperatureInput);
       $("temperature").innerHTML = "" ;
       $("days").focus();
   }
}
