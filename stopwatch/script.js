let seconds = minutes = hours = 0;
let dSeconds = dMinutes = dHours = 0;
let i = 0;
let interval = null;
let status = 'stop';


function stopWatch() {
    seconds++;
    
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    seconds < 10 ? dSeconds = '0'+seconds+'' : dSeconds = seconds;
    minutes < 10 ? dMinutes = '0'+minutes+'' : dMinutes = minutes;
    hours < 10 ? dHours = '0'+hours+'' : dHours = hours;

    document.getElementById('display').innerHTML = dHours+':'+dMinutes+':'+dSeconds;
}

function startStop() {
    if (status === 'stop') {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById('start').innerHTML = 'STOP';
        document.getElementById('start').classList.add('stop');
        document.getElementById('start').classList.remove('start');
        status = 'start';
    } else {
        window.clearInterval(interval);
        document.getElementById('start').innerHTML = 'START';
        document.getElementById('start').classList.add('start');
        document.getElementById('start').classList.remove('stop');
        status = 'stop';
    }
}

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    status = "stop";
    document.getElementById('display').innerHTML = '00:00:00';
    document.getElementById('start').innerHTML = 'START';
}
let arr = [];
function createLap() {
    let tr = document.getElementById('data');
    tr.innerHTML += '<tr><td>'+ i++ +'</td><td>'+dHours+':'+dMinutes+':'+dSeconds+'</td></tr>';
    let time = dHours+':'+dMinutes+':'+dSeconds;
    arr.push(time);
    console.log(arr);
}
//<td>'+ +dHours- +dHours+':'+ +dMinutes- +dMinutes+':'+ +dSeconds- +dSeconds+'</td>