document.querySelectorAll('.indicator').forEach(item => {
    const overlay = document.createElement('div');
    overlay.className = 'ipc-overlay';
    overlay.textContent = 'Перейти';
    item.append(overlay);

    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
    item.addEventListener('click', () => {
        window.location.href = 'hello.html';
    });
});
