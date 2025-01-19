let isPlaying = false;

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
}
