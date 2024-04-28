
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Headroom for the sticky header
    var header = document.querySelector('.header');
    var headroom = new Headroom(header);
    headroom.init();

    // Close any open collapsible when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.collapsible') && !event.target.closest('.menu-icon')) {
            hideAllMenus();
        }
    });
});

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        hideAllMenus();
        menu.style.display = 'block';
    }
}

function hideAllMenus() {
    var menus = document.querySelectorAll('.collapsible');
    menus.forEach(function(menu) {
        menu.style.display = 'none';
    });
}
