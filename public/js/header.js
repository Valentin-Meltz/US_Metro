document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth >= 992) { // Apply only on large screens
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('mouseover', function () {
        const menu = this.querySelector('.dropdown-menu');
        const toggle = this.querySelector('.dropdown-toggle');
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      });

      dropdown.addEventListener('mouseout', function () {
        const menu = this.querySelector('.dropdown-menu');
        const toggle = this.querySelector('.dropdown-toggle');
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});