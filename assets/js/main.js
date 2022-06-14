window.onscroll = function() {
    const header = document.getElementsByClassName('heading')[0];
    const headerContainer = document.getElementsByClassName('container--heading')[0];
    const navbarPhone = document.getElementsByClassName('navbar__phone')[0];
    header.classList.toggle("heading--background", window.pageYOffset > 0)
    headerContainer.classList.toggle("container--shrink", window.pageYOffset > 0)
    navbarPhone.classList.toggle("navbar__phone--hide", window.pageYOffset > 0)
}