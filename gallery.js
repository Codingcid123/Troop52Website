const lightbox = document.getElementById('gallery-lightbox');
const lightboxImg = document.getElementById('gallery-lightbox-img');
const lightboxCaption = document.getElementById('gallery-lightbox-caption');
const closeBtn = document.querySelector('.gallery-lightbox-close');

document.querySelectorAll('.gallery-thumb').forEach((btn) => {
  btn.addEventListener('click', () => {
    lightboxImg.src = btn.dataset.full;
    lightboxImg.alt = btn.querySelector('img').alt;
    lightboxCaption.textContent = btn.dataset.caption || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});
