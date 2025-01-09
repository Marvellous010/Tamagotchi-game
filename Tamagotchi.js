document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    const playAudio = () => {
        audio.play().catch((error) => {
            console.log('Autoplay blocked:', error);
        });
    };

    document.addEventListener('click', playAudio, { once: true });
});