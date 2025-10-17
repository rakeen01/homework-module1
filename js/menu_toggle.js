// Mobile hamburger toggle
(function () {
    var btn = document.getElementById('menuToggle');
    var menu = document.querySelector('.main-menu');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            var open = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }
})();
