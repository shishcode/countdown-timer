//initialize the audio
const alarmSound = new Audio('alarm.mp3');

document.getElementById('start-btn').addEventListener('click', function() {
    const countdownInput = document.getElementById('countdown-input');
    const countdownDate = new Date(countdownInput.value).getTime();
    const countdownButton = document.getElementById('start-btn');

    //make full screen
    document.documentElement.requestFullscreen();

    // Check if the input date is valid
    if (!isNaN(countdownDate)) {
        // hide the input and start button
        countdownInput.style.display = 'none';
        countdownButton.style.display = 'none';

        // Update the countdown every 1 second
        const countdownInterval = setInterval(() => {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = countdownDate - now;
    // Calculate days, hours, minutes, and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    // Display the countdown
    document.getElementById('text').style.display = 'block';
    document.getElementById('text').innerHTML = hours + ':' + minutes + ':' + seconds;


    // If the countdown is finished, display "Countdown Finished"
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('text').innerHTML = 'Süre sona erdi.';
                // Show the input and start button
                // Play the alarm sound
                alarmSound.loop = true;
                alarmSound.play();

                //show the stop button
                document.getElementById('stop-btn').style.display = 'inline-block';

                // Stop the alarm after 30 seconds
                setTimeout(() => {
                    alarmSound.pause();
                    countdownInput.style.display = 'block';
                    countdownButton.style.display = 'block';
                    document.getElementById('stop-btn').style.display = 'none';
                }, 30000);

                // Show the stop button
                document.getElementById('stop-btn').style.display = 'inline-block';
            }
        }, 1000);
    }
});

// Stop Countdown Button Click Event
function stopAlarm() {
    // Stop the alarm sound
    alarmSound.loop = false;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('countdown-input').style.display = 'block';
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('text').style.display = 'none';
    // Hide the stop buttoN
    document.getElementById('stop-btn').style.display = 'none';
    
};