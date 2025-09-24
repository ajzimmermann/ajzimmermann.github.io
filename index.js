const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
const copyBtn = document.querySelector('.copy-link');
const penUrl = document.querySelector('.pen-url');

shareButton.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'AJ Zimmermann',
      url: 'https://ajzimmermann.github.com/'
    }).catch(() => {});
  } else {
    shareDialog.classList.add('is-open');
  }
});

closeButton.addEventListener('click', () => {
  shareDialog.classList.remove('is-open');
});

if (copyBtn && penUrl) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(penUrl.textContent.trim());
      copyBtn.textContent = 'Copied!';
      setTimeout(() => (copyBtn.textContent = 'Copy Link'), 1200);
    } catch {}
  });
}
