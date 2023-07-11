const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navlink = document.getElementsByClassName('navbar-links')

if (toggleBtn)
  toggleBtn.addEventListener('click', function() {
    for (var i = 0; i < navlink.length; i++) {
      navlink[i].classList.toggle('active')
    }
  });
