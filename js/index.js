var sec = 00
var min = 00
var interval

function start(){
    console.log('Start works');
    interval = setInterval(counter, 1000);
}

function pause(){
    console.log('Pause works');
    clearInterval(interval);
}

function reset(){
    console.log('Reset works');
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('counter').innerText= '00:00';        
}

function twoDigits(digit){
    if (digit<10){
        return('0' + digit)
    } else {
        return(digit)
    }
}

function counter(){
    sec++
    document.getElementById('counter').innerText= twoDigits(min)+':'+twoDigits(sec);
    if (sec==60) {
        min++;
        sec=0;
    }
}