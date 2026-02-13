const handleAllEvents = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });

    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.scrollY > 50 
            ? navbar.classList.add("nav-scrolled") 
            : navbar.classList.remove("nav-scrolled");
    }
};

const menuToggle = document.querySelector('.menu-toggle'); 
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    const closeMenu = () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('active');
            setTimeout(() => {
                if (!navLinks.classList.contains('active')) {
                    navLinks.style.display = 'none';
                }
            }, 400); 
        }
    };

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            setTimeout(() => {
                menuToggle.classList.add('is-active');
                navLinks.classList.add('active');
            }, 10);
        } else {
            closeMenu();
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !menuToggle.contains(e.target) && 
            !navLinks.contains(e.target)) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = '';
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        }
    });
}

window.addEventListener("scroll", handleAllEvents);
window.addEventListener("load", handleAllEvents);