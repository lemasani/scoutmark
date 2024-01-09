const hamMenu = document.querySelector('.nav-toggle');

let menuContent = null;

const displayNav = () => {
    if (menuContent) {
        // Content is already displayed, remove it
        menuContent.remove();
        menuContent = null;
    } else {
        // Content is not displayed, create and display it
        menuContent = document.createElement('div');
        menuContent.classList.add('menu-content');

        let navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach((item) => {
            let itemClone = item.cloneNode(true);
            itemClone.style.display = 'block';
            menuContent.appendChild(itemClone);
        });

        document.body.appendChild(menuContent);
    }
};

hamMenu.addEventListener('click', displayNav);
