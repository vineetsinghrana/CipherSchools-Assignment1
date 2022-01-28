window.onload = function() {
    var minutes = 0;
    var seconds = 0;
    var ms = 0;

    var outputMinutes = document.getElementById('minutes');
    var outputSeconds = document.getElementById('seconds');
    var outputms = document.getElementById('ms');

    var buttonStart = document.getElementById('btn-start');
    var buttonStop =  document.getElementById('btn-stop');
    var buttonReset =  document.getElementById('btn-reset');

    var interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(interval);
        minutes = "00";
        seconds = "00";
        ms = "00";
        outputMinutes.innerHTML = minutes;
        outputSeconds.innerHTML = seconds;
        outputms.innerHTML = ms; 
    });

    function startTimer() {
        ms++;
        if(ms <= 9) {
            outputms.innerHTML = "0" + ms;
        }

        if(ms > 9) {
            outputms.innerHTML = ms;
        }

        if(ms > 99) {
            seconds++;
            outputSeconds.innerHTML =  "0" + seconds;
            ms = 0;
            outputms.innerHTML = "0" + ms;
        }

        if(seconds<=9) {
            outputSeconds.innerHTML = "0" + seconds;
        }

        if(seconds > 9) {
            outputSeconds.innerHTML = seconds ;
        }

        if(seconds > 59) {
            minutes++;
            outputMinutes.innerHTML = "0" +minutes;
            seconds = 0;
            outputSeconds.innerHTML = "0" + seconds;
        }

    }
}