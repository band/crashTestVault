document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.sticky-header');
    var headroom = new Headroom(header);
    headroom.init();

    var sidebar = document.getElementById('sidebar');
    var mainmenuToggle = document.getElementById('mainmenu-toggle');
    var contentsToggle = document.getElementById('contents-toggle');

    // Function to toggle display based on window width
    function adjustSidebarDisplay() {
        if (window.innerWidth > 768) {
            sidebar.style.display = 'block'; // Show sidebar if window is wide
        } else if (!sidebar.contains(document.activeElement)) {
            sidebar.style.display = 'none'; // Hide sidebar if window is narrow
        }
    }

    // Event listeners for toggles
    mainmenuToggle.addEventListener('click', function() {
        sidebar.style.display = (sidebar.style.display === 'block' ? 'none' : 'block');
    });

    contentsToggle.addEventListener('click', function() {
        var contents = document.getElementById('contents');
        contents.style.display = (contents.style.display === 'block' ? 'none' : 'block');
    });

    // Close menus when clicking outside
    document.body.addEventListener('click', function(e) {
        if (!e.target.matches('.hamburger, .collapsible')) {
            document.querySelectorAll('.collapsible').forEach(function(element) {
                element.style.display = 'none';
            });
            if (window.innerWidth <= 768) {
                sidebar.style.display = 'none';
            }
        }
    }, true);

    // Adjust sidebar display on window resize
    window.addEventListener('resize', adjustSidebarDisplay);

    // Initial adjustment
    adjustSidebarDisplay();
});
