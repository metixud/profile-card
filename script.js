const overlay = document.getElementById('overlay');
const card = document.querySelector('.profile-card');
const music = document.getElementById('bg-music');
music.volume = 0.3;

document.addEventListener('click', () => {
    overlay.classList.add('hidden'); 
    card.classList.add('visible');    
    music.play();                   
}, { once: true });
