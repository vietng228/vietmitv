const donateDialog = document.querySelector('#donate-dialog');
document.querySelector('#donate-open').addEventListener('click', () => donateDialog.showModal());
document.querySelector('.dialog-close').addEventListener('click', () => donateDialog.close());
donateDialog.addEventListener('click', (event) => {
  if (event.target === donateDialog) {
    const bounds = donateDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) donateDialog.close();
  }
});
const transparencyToggle = document.querySelector('#transparency-toggle');
transparencyToggle.addEventListener('click', () => {
  const reduced = document.documentElement.classList.toggle('reduce-transparency');
  transparencyToggle.setAttribute('aria-pressed', String(reduced));
});
