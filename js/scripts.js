const shareIcon = document.getElementById('share-icon');
const tooltip = document.getElementById('tooltip');

shareIcon.addEventListener('click', () => {
  shareIcon.classList.toggle('share--active');
  tooltip.classList.toggle('tooltip--show');
});
