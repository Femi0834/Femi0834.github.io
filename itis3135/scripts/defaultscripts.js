var name;
var feeling;

function questions() {
    setName(prompt("Please enter your name", "Femi"))
    setFeeling(prompt("How is your day going?", "OK"))

    document.getElementById('date').innerHTML = 'Today is: ' + getTodaysDate() + ', and the time is: ' + getCurrentTime();
    document.getElementById('welcome').innerHTML = 'Oshin Operations would like greet, ' + getName() + '!\n' + 
        "You have mentioned that you're feeling " + getFeeling() + '.'; 
}

function setName(name) { 
    this.name = name;
}

function setFeeling(feeling) {
    this.feeling = feeling;
}

function getName() {
    return name;
}

function getFeeling() {
    return feeling;
}

function getTodaysDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getCurrentTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}



function changeFeeling() {
    setFeeling(prompt('We hope you are feeling better! Please enter a new feeling here', "great"));
    document.getElementById('welcome').innerHTML = 'Oshin Operations welcomes you, ' + getName() + '!\n' + 
    "You are feeling " + getFeeling() + '.'; 

}

function changeName() {
    setName(prompt('You dont like your name! Please enter a new name', "Patrick"));
    document.getElementById('welcome').innerHTML = 'Oshin Operations welcomes you, ' + getName() + '!\n' + 
    "You are feeling " + getFeeling() + '.'; 

}

today=new Date();
var nYear=new Date(today.getFullYear(), 11, 32);
if (today.getMonth()==11 && today.getDate()>32) 
{
    nYear.setFullYear(nYear.getFullYear()+1); 
}  
var one_day=1000*60*60*24;

function daysUntilNewYears() {
    document.getElementById("daysUntilNewYears").innerHTML = (Math.ceil((nYear.getTime()-today.getTime())/(one_day))+
    " days left until the New Year!");
}

function hoursUntilNewYears() {
    var one_hour=1000*60*60;
    document.getElementById("hoursUntilNewYears").innerHTML = (Math.ceil((nYear.getTime()-today.getTime())/(one_hour))+
" hours left until the New Year!")
}

function weeksUntilNewYears() {
    document.getElementById("weeksUntilNewYears").innerHTML = (Math.ceil((nYear.getTime()-today.getTime())/(one_day)/7)+
    " weeks left until the New Year!")
}
