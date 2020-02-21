//these three variables hold the actual time left
let h = 0;
let m = 0;
let s = 361;
//these three variables are what will actually be shown
let cH = 0;
let cM = 0;
let cS = 0;

var amountSeconds = prompt("Enter time in seconds", '')

if (amountSeconds != '') {
    s = amountSeconds;
} else s = 1;



if (s > 360) {
    h = Math.floor(s / 360) + h;
    m = Math.floor(((s - (h * 360))/60)) - m;
    s = s % 60;
} else if (s > 60) {
    m = Math.floor(s / 60)
    s = s % 60;
}

timeFix(h, m, s);
numbers.textContent = cH + ':' + cM + ':' + cS;

function countdown() {

    s = s - 1;
    
    if (h >= 1 && m == 0 && s == 0) {
        h -= 1;
        m = 59;
        s = 59;
    } else if (m >= 1 && s == 0) {
        m -= 1;
        s = 59;
    }

    timeFix(h, m, s);

    numbers.textContent = cH + ':' + cM + ':' + cS;
    if (s == 0 && m == 0 && h == 0) {
        clearInterval(timerStart);
        numbers.textContent = '00:00:00';
    }
}

function timeFix(h ,m, s) {
    if (h < 10) {
        cH = '0' + h;
    } else cH = h;

    if (m < 10) {
        cM = '0' + m;
    } else cM = m;

    if (s < 10) {
        cS = '0' + s;
    } else cS = s;
}
var timerStart = setInterval(countdown, 1000);



