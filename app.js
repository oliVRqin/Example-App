let showTime_cancelled = false;

function showTime() {
    if (showTime_cancelled == false) {
        const date = new Date();

        const hour = (date.getHours() % 12) || 12;
        const minute = date.getMinutes();
        const minute_adj = (minute < 10) ? `0${minute}` : minute;
        const second = date.getSeconds();
        const second_adj = (second < 10) ? `0${second}` : second;

        const ampm = (date.getHours() > 12) ? "PM" : "AM";

        document.getElementById('show').innerHTML = `${hour}:${minute_adj}:${second_adj} ${ampm}`;
        setTimeout(showTime, 1000);
    }
}


function stopwatch() {
    var b1 = document.getElementById("b1");
    b1.type = 'hidden';
    var b2 = document.getElementById("b2");
    b2.type = 'button';
    var b3 = document.getElementById("b3");
    b3.type = 'button';
    //let time = 0;
    document.getElementById('stopwatch').innerHTML = `00:00:00`;
}

let hundredths = 0;
let seconds = 0;
let setTime = true;

function startTime() {
    hundredths += 1;
    hundredths = hundredths % 100;
    if (hundredths == 0) {
        seconds += 1;
    }

    if (hundredths < 10 && seconds < 10) {
        document.getElementById('stopwatch').innerHTML = `0${seconds}:0${hundredths}`;
    } else if (hundredths < 10) {
        document.getElementById('stopwatch').innerHTML = `${seconds}:0${hundredths}`; 
    } else if (seconds < 10) {
        document.getElementById('stopwatch').innerHTML = `0${seconds}:${hundredths}`;
    } else {
        document.getElementById('stopwatch').innerHTML = `${seconds}:${hundredths}`;
    }

    if (setTime) {
        setTimeout(startTime, 10);
    }
}

function stopTime() {
    setTime = !setTime;
    var b2 = document.getElementById("b2");
    b2.type = 'hidden';
    var b4 = document.getElementById("b4");
    b4.type = 'button';
}

function resetTime() {
    hundredths = 0;
    seconds = 0;
    setTime = true;
    document.getElementById('stopwatch').innerHTML = `0${seconds}:0${hundredths}`;
    var b2 = document.getElementById("b2");
    b2.type = 'button';
    var b4 = document.getElementById("b4");
    b4.type = 'hidden';
}

function timer() {
    document.getElementById('timer').innerHTML = `Timer`;
}