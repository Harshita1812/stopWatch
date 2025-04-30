let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("time");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    const leadingHours = hours < 10 ? "0" + hours : hours;
    const leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    const leadingSeconds = seconds < 10 ? "0" + seconds : seconds

    display.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}
function start() {
    if (timer !== null) clearInterval(timer);
    display.classList.remove("blink");
    display.classList.add("fade-in");
    timer = setInterval(stopwatch, 1000);
};


function stop(){
    clearInterval(timer);
    display.classList.remove("fade-in");
    display.classList.add("blink")
}

function reset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0]
    display.innerText = "00:00:00";
    display.classList.remove("blink", "fade-in");

}