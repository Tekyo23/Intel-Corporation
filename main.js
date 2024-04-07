var showreel = document.getElementById('showreel');
var showreelSound = document.getElementById('showreel__sound-btn');

showreelSound.addEventListener('click', () => {
    showreel.muted = !showreel.muted;
    if (showreel.muted) {
        showreelSound.src = 'svg/sound-off.svg';
    } else {
        showreelSound.src = 'svg/sound-on.svg';
    }
});
