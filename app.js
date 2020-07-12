function showTime() {
    const date = new Date();

    const hour = (date.getHours() % 12) || 12;
    const minute = date.getMinutes();
    const minute_adj = (minute < 10) ? `0${minute}` : minute;
    const second = date.getSeconds();
    const second_adj = (second < 10) ? `0${second}` : second;

    const ampm = (date.getHours() > 12) ? "PM" : "AM";

    document.getElementById('show').innerHTML = `${hour}:${minute_adj}:${second_adj} ${ampm}`;
    
    setTimeout(showTime, 1000);
    document.getElementById("watch").type = "hidden";
}


function stopwatch() {
    var b1 = document.getElementById("b1");
    b1.type = 'hidden';
    var b2 = document.getElementById("b2");
    b2.type = 'button';
    document.getElementById('stopwatch').innerHTML = `00:00:00`;
}

let hundredths = 0;
let seconds = 0;
let minutes = 0;
let setTime = true;

function startTime() {
    if (setTime) {
        hundredths += 1;
        hundredths = hundredths % 100;
        if (hundredths == 0) {
            seconds += 1;
        }
        
        if (seconds == 60) {
            seconds = 0 
            minutes += 1;
        }

        if (minutes < 10) {
            if (hundredths < 10 && seconds < 10) {
                document.getElementById('stopwatch').innerHTML = `0${minutes}:0${seconds}:0${hundredths}`;
            } else if (hundredths < 10) {
                document.getElementById('stopwatch').innerHTML = `0${minutes}:${seconds}:0${hundredths}`; 
            } else if (seconds < 10) {
                document.getElementById('stopwatch').innerHTML = `0${minutes}:0${seconds}:${hundredths}`;
            } else {
                document.getElementById('stopwatch').innerHTML = `0${minutes}:${seconds}:${hundredths}`;
            }
        } else {
            if (hundredths < 10 && seconds < 10) {
                document.getElementById('stopwatch').innerHTML = `${minutes}:0${seconds}:0${hundredths}`;
            } else if (hundredths < 10) {
                document.getElementById('stopwatch').innerHTML = `${minutes}:${seconds}:0${hundredths}`; 
            } else if (seconds < 10) {
                document.getElementById('stopwatch').innerHTML = `${minutes}:0${seconds}:${hundredths}`;
            } else {
                document.getElementById('stopwatch').innerHTML = `${minutes}:${seconds}:${hundredths}`;
            }
        }
        var b2 = document.getElementById("b2");
        b2.type = 'hidden';
        var b3 = document.getElementById("b3");
        b3.type = 'button';
        setTimeout(startTime, 10);
    }
}

function stopTime() {
    setTime = false;
    var b3 = document.getElementById("b3");
    b3.type = 'hidden';
    var b4 = document.getElementById("b4");
    b4.type = 'button';
}

function resetTime() {
    hundredths = 0;
    seconds = 0;
    setTime = true;
    document.getElementById('stopwatch').innerHTML = `00:00:00`;
    var b2 = document.getElementById("b2");
    b2.type = 'button';
    var b3 = document.getElementById("b3");
    b3.type = 'hidden';
    var b4 = document.getElementById("b4");
    b4.type = 'hidden';
}

function timer() {
    document.getElementById('timer').style.display = 'none';
    document.getElementById('hours').innerHTML = 'Hr';
    document.getElementById('hours').style.display = 'initial';
    document.getElementById('minutes').innerHTML = 'Min';
    document.getElementById('minutes').style.display = 'initial';
    document.getElementById('seconds').innerHTML = 'Sec';
    document.getElementById('seconds').style.display = 'initial';
    var b9 = document.getElementById('b9');
    b9.type = 'number';
    var b10 = document.getElementById('b10');
    b10.type = 'number';
    var b11 = document.getElementById('b11');
    b11.type = 'number';
    var b5 = document.getElementById("b5");
    b5.type = 'hidden';
    var b6 = document.getElementById("b6");
    b6.type = 'button';
}

function hrLimits() {
    if (document.getElementById("b9").value > 23) {
          document.getElementById("b9").value = 23; 
    }

    if (document.getElementById("b9").value < 0) {
        document.getElementById("b9").value = 0; 
    }
}

function minLimits() {
    if (document.getElementById("b10").value > 59) {
          document.getElementById("b10").value = 59; 
    }

    if (document.getElementById("b10").value < 0) {
        document.getElementById("b10").value = 0; 
    }
}

function secLimits() {
    if (document.getElementById("b11").value > 59) {
          document.getElementById("b11").value = 59; 
    }

    if (document.getElementById("b11").value < 0) {
        document.getElementById("b11").value = 0; 
    }
}

let setTimer = true; 

function timerStart() {
    let hrs = document.getElementById('b9').value;
    let mins = document.getElementById('b10').value;
    let secs = document.getElementById('b11').value;

    if (setTimer) {
        document.getElementById('b11').value -= 1;
        if(document.getElementById('b11').value == -1) {
            document.getElementById('b10').value = document.getElementById('b10').value - 1;
            document.getElementById('b11').value = 59;
        }

        if (document.getElementById('b10').value == -1) {
            document.getElementById('b9').value = document.getElementById('b9').value - 1;
            document.getElementById('b10').value = 59;
        }

        if (hrs < 10) {
            if (secs < 10 && mins < 10) {
                if (hrs == 0 && mins == 0 && secs == 0) {
                    document.getElementById('timer').innerHTML = `Expired`;
                    setTimer = false; 
                } else {
                    document.getElementById('timer').innerHTML = `0${hrs}:0${mins}:0${secs}`;
                }
            } else if (secs < 10) {
                document.getElementById('timer').innerHTML = `0${hrs}:${mins}:0${secs}`; 
            } else if (mins < 10) {
                document.getElementById('timer').innerHTML = `0${hrs}:0${mins}:${secs}`;
            } else {
                document.getElementById('timer').innerHTML = `0${hrs}:${mins}:${secs}`;
            }
        } else {
            if (secs < 10 && mins < 10) {
                document.getElementById('timer').innerHTML = `${hrs}:0${mins}:0${secs}`;
            } else if (secs < 10) {
                document.getElementById('timer').innerHTML = `${hrs}:${mins}:0${secs}`; 
            } else if (mins < 10) {
                document.getElementById('timer').innerHTML = `${hrs}:0${mins}:${secs}`;
            } else {
                document.getElementById('timer').innerHTML = `${hrs}:${mins}:${secs}`;
            }
        }
        var b6 = document.getElementById("b6");
        b6.type = 'hidden';
        var b7 = document.getElementById("b7");
        b7.type = 'button';
        var b8 = document.getElementById("b8");
        b8.type = 'hidden';
    
        setTimeout(timerStart, 1000);
    } 

    document.getElementById('timer').style.display = 'initial';
    document.getElementById('hours').style.display = 'none';
    document.getElementById('minutes').style.display = 'none';
    document.getElementById('seconds').style.display = 'none';

    var b9 = document.getElementById("b9");
    b9.type = 'hidden';
    var b10 = document.getElementById("b10");
    b10.type = 'hidden';
    var b11 = document.getElementById("b11");
    b11.type = 'hidden';
}

function timerStop() {
    setTimer = false;
    var b7 = document.getElementById("b7");
    b7.type = 'hidden';
    var b8 = document.getElementById("b8");
    b8.type = 'button';
}

function timerReset() {
    setTimer = true;
    document.getElementById('timer').style.display = 'none';
    document.getElementById('hours').innerHTML = 'Hr';
    document.getElementById('hours').style.display = 'initial';
    document.getElementById('minutes').innerHTML = 'Min';
    document.getElementById('minutes').style.display = 'initial';
    document.getElementById('seconds').innerHTML = 'Sec';
    document.getElementById('seconds').style.display = 'initial';
    var b9 = document.getElementById('b9');
    b9.type = 'number';
    b9.value = '0';
    var b10 = document.getElementById('b10');
    b10.type = 'number';
    b10.value = '0';
    var b11 = document.getElementById('b11');
    b11.type = 'number';
    b11.value = '0';
    var b5 = document.getElementById("b5");
    b5.type = 'hidden';
    var b6 = document.getElementById("b6");
    b6.type = 'button';
    var b8 = document.getElementById("b8");
    b8.type = 'hidden';
}