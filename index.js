// var countDownDate = new Date("April 25, 2022").getTime();

// console.log(countDownDate);

// var myfunc = setInterval(function() {
//     // code goes here
//     var now = new Date().getTime();
//     var timeleft = countDownDate - now;
    
//     var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days + "d "
//     document.getElementById("hours").innerHTML = hours + "h " 
//     document.getElementById("mins").innerHTML = minutes + "m " 
//     document.getElementById("secs").innerHTML = seconds + "s"
// }, 1000)


var countDownDate = new Date("April 25, 2022").getTime();

console.log(countDownDate);

var myfunc = setInterval(function() {
    // code goes here
    var minutesLeft, minutesRight;

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    //days
    days = Array.from(String(days));
    daysLeft = days.pop();
    daysRight = days.shift();
    
    //hours
    hours = Array.from(String(hours));
    hoursLeft = hours.pop();
    hoursRight = hours.shift();


    //minutes
    minutes = Array.from(String(minutes));
    minutesLeft = minutes.pop();
    minutesRight = minutes.shift();

    //seconds
    seconds = Array.from(String(seconds));
    secondsLeft = seconds.pop();
    secondsRight = seconds.shift();
    
    //undefined
    if (secondsRight == undefined) {
        secondsRight = 0;
    }
    if (minutesRight == undefined) {
        minutesRight = 0;
    }
    if (hoursRight == undefined) {
        hoursRight = 0;
    }
    if (daysRight == undefined) {
        daysRight = 0;
    }

    //seconds
    document.getElementById("secondsRight").innerHTML = secondsRight;
    document.getElementById("secondsLeft").innerHTML = secondsLeft;

    //minutes
    document.getElementById("minutesRight").innerHTML = minutesRight;
    document.getElementById("minutesLeft").innerHTML = minutesLeft;

    //hours
    document.getElementById("hoursRight").innerHTML = hoursRight;
    document.getElementById("hoursLeft").innerHTML = hoursLeft;

    //days
    document.getElementById("daysRight").innerHTML = daysRight;
    document.getElementById("daysLeft").innerHTML = daysLeft;

}, 1000)