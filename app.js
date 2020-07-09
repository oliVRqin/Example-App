function showTime() {
    const date = new Date();

    const hour = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours();
    const minute = date.getMinutes();
    const minute_adj = (minute < 10) ? `0${minute}` : minute;
    const second = date.getSeconds();
    const second_adj = (second < 10) ? `0${second}` : second;

    const ampm = (date.getHours() > 12) ? "PM" : "AM";

    document.getElementById('demo').innerHTML = `${hour}:${minute_adj}:${second_adj} ${ampm}`;
    setTimeout(showTime, 1000);
}

showTime();
function startTime() {

}

function stopTime() {
    
}

function timer() {
    
}