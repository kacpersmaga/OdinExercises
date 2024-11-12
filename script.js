function initDropdown(dropdownElement) {
    const toggleButton = dropdownElement.querySelector('.dropdown-toggle');
    const menu = dropdownElement.querySelector('.dropdown-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });
}

document.querySelectorAll('.dropdown').forEach(initDropdown);
