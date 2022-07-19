// Events
btnOpenModal.addEventListener('click', () => {
    formModal.style.display = 'block';
    btnOpenModal.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    formModal.style.display = 'none';
    btnOpenModal.style.display = 'block';
});
