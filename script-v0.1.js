const introText = document.getElementById('introText');
const buttons = document.querySelectorAll('.audience-nav button');

const descriptions = {
  anyone: "I create meaningful interfaces that put users first with the use of established principles and user research.",
  recruiters: "Hi Recruiters, I am a User Experience Expert and Product Designer. I have 5 years of experience and am currently looking for a place to call home",
  'design-directors': "Hi Design Directors, I am extremely flexible and able to take critism. I work best in groups and get along with everyone.",
  engineer: "Engineers: Although I might have chosen a different path than you, I understand enough programming to be able to create engineer-centered designs."
};

function activateButton(audience) {
  buttons.forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.audience-nav button[data-audience="${audience}"]`);
  if (btn) btn.classList.add('active');
  introText.textContent = descriptions[audience] || "";
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    activateButton(btn.dataset.audience);
  });
});

const grid = document.querySelector('.grid');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  targetX = x * 30;
  targetY = y * 30;
});

function animate() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;
  grid.style.backgroundPosition = `${currentX}px ${currentY}px, ${currentX + 25}px ${currentY + 25}px, ${currentX + 12.5}px ${currentY + 12.5}px`;
  requestAnimationFrame(animate);
}
animate();

activateButton('anyone');
