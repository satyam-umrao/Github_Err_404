const menuMobile = document.querySelector('.mobile-menu')

function menuShow() {
    console.log('click')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').innerHTML = "<i class='bx bx-menu'></i>";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').innerHTML = "<i class='bx bx-x'></i>";
    }
}