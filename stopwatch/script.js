let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;

let msString = document.getElementById("ms");
let secString = document.getElementById("sec");
let minString = document.getElementById("min");
let hrsString = document.getElementById("hour");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let interval;

function stopwatch(){
    ms++;
    if(ms == 100){
        ms = 0;
        sec++;
        msString.innerHTML = ms;
    }

    if(sec == 60){
        sec = 0;
        min++;
        secString.innerHTML = sec;
    }

    if(min == 60){
        min = 0;
        hour++;
        minString.innerHTML = min;
    }

    if(ms < 10){
        msString.innerHTML = "0" + ms;
    }else{
        msString.innerHTML = ms;
    }
    if(sec < 10){
        secString.innerHTML = "0" + sec;
    }else{
        secString.innerHTML = sec
    }
    if(min< 10){
        minString.innerHTML = "0" + min;
    }else{
        minString.innerHTML = min;
    }
    if(hour < 10){
        hrsString.innerHTML = "0" + hour;
    }else{
        hrsString.innerHTML = hour;
    }
}
function startTimer(){
    clearInterval(interval);
    interval = setInterval(stopwatch,10)
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval)
    ms = 0
    sec = 0
    min = 0
    hour = 0
    
    msString.innerHTML = "00";
    secString.innerHTML = "00";
    minString.innerHTML = "00";
    hrsString.innerHTML = "00";
    
}
startBtn.addEventListener("click",startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click", resetTimer)

