function animate() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;
  grid.style.backgroundPosition = `${currentX}px ${currentY}px, ${currentX + 25}px ${currentY + 25}px, ${currentX + 12.5}px ${currentY + 12.5}px`;
  requestAnimationFrame(animate);
}

const grid = document.querySelector('.grid');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  targetX = x * 30;
  targetY = y * 30;
});

animate();
