/* ENTRADA E SAIDA DO MENU HAMBURGER E */

const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click',() => {
            menu.classList.toggle('show');
        
        if (menu.classList.contains('show')) {
            menuToggle.classList.add('close-icon');
            menuToggle.innerHTML = '&times;'; 
        } else {
            menuToggle.classList.remove('close-icon');
            menuToggle.innerHTML = '&#9776;';
        }
        });

        document.addEventListener('click',(event) => {
            const isClickInsideMenu = menu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
                menu.classList.remove('show');
            }
        });