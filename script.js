const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');

musicToggle.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.innerHTML = '♫ <span>Playing</span>';
    } catch (error) {
      musicToggle.innerHTML = '♫ <span>Add music.mp3</span>';
    }
  } else {
    music.pause();
    musicToggle.innerHTML = '♫ <span>Music</span>';
  }
});

surpriseButton.addEventListener('click', () => {
  surpriseMessage.classList.toggle('show');
  surpriseButton.innerHTML = surpriseMessage.classList.contains('show')
    ? 'Close surprise <span>♡</span>'
    : 'Open your surprise <span>✦</span>';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
