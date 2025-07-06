/* ENTRADA E SAIDA DO MENU HAMBURGER E */

const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click',() => {
            menu.classList.toggle('show');
            menuToggle.classList.toggle('active');
       
        });

        document.addEventListener('click',(event) => {
            const isClickInsideMenu = menu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
                menu.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });