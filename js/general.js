// Fonction pour l'animation du menu

function toggleCssMenu(icon) {

    var cssmenu = document.getElementById('AC_cssmenu');

    if (icon.className.indexOf('active') == -1) {
        icon.className = 'AC_menu-icon active';
        cssmenu.style.display = "block";
        setTimeout(function(){
            cssmenu.className = 'active';
        },0);            
    }
    else {
        icon.className = 'AC_menu-icon';
        cssmenu.className = '';
        setTimeout(function() {
            cssmenu.style.display = "none";
        },411); 
    }
}