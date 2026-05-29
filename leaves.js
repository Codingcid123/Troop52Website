(function () {
  const SPAWN_EVERY_MS = 4500;
  const COLORS = ['#6b8f5a', '#7a9a62', '#8b7355', '#5c7a4a'];

  function spawnLeaf() {
    const leaf = document.createElement('span');
    leaf.className = 'falling-leaf';
    leaf.setAttribute('aria-hidden', 'true');

    const startX = Math.random() * 100;
    const drift = -60 + Math.random() * 120;
    const duration = 9 + Math.random() * 7;
    const size = 10 + Math.random() * 8;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    leaf.style.left = `${startX}vw`;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size * 1.35}px`;
    leaf.style.backgroundColor = color;
    leaf.style.setProperty('--leaf-drift', `${drift}px`);
    leaf.style.setProperty('--leaf-spin', `${180 + Math.random() * 360}deg`);
    leaf.style.animationDuration = `${duration}s`;

    document.body.appendChild(leaf);
    leaf.addEventListener('animationend', () => leaf.remove());
  }

  function tick() {
    if (document.hidden) {
      return;
    }
    spawnLeaf();
    if (Math.random() > 0.55) {
      setTimeout(spawnLeaf, 400 + Math.random() * 600);
    }
  }

  setInterval(tick, SPAWN_EVERY_MS);
  setTimeout(tick, 1200);
})();
