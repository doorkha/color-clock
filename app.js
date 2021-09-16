colorClock();

function colorClock() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    let clockFace = hour + ':' + min + ':' + sec;
    let hexaColor = '#' + hour + min + sec;

    document.getElementById('clock').innerHTML = clockFace;
    
    document.body.style.backgroundColor = hexaColor;
    document.body.style.color = 'white';
    
    setTimeout(function() {
        colorClock();
    }, 1000);
}