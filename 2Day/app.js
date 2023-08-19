const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    const divElements = this.querySelectorAll('div');
    divElements.forEach(div => div.classList.remove('no-animation'));
});

