// Animation de la première section (toggle switch) de la page d'accueil
let boutons = document.getElementsByClassName('btn_cat_chng');
console.log(boutons);

for (const bouton of boutons) {
    bouton.addEventListener('click', function (e) {
        document.querySelector('.active.categorie').classList.remove("active");
        document.querySelector('.' + bouton.getAttribute("categorie")).classList.add("active");
    }); 
};


// Variable du text au switch
var switchTxt = document.querySelector('.AC_roulette p');

// Les variables des boutons de switch
var sac = document.querySelector('.AC_sac');
var langer = document.querySelector('.AC_langer');
var famille = document.querySelector('.AC_famille');
var sante = document.querySelector('.AC_sante');
var couverture = document.querySelector('.AC_couverture');
var bavoir = document.querySelector('.AC_bavoir');

sac.addEventListener('click', function(e){
    switchTxt.innerHTML = "<p>Sacs cartables</p>";
});

langer.addEventListener('click', function(e){
    switchTxt.innerHTML = "<p>Tapis à langer nomade</p>";
});

famille.addEventListener('click', function(e){
    switchTxt.innerHTML = "<p>Protège livret de famille</p>";
});

sante.addEventListener('click', function(e){
    switchTxt.innerHTML = "<p>Protège carnet de santé</p>";
});

couverture.addEventListener('click', function(e){
    switchTxt.innerHTML = "<p>Couvertures</p>";
});

bavoir.addEventListener('click', function(e){
    switchTxt.innerHTML = "<p>Bavoirs</p>";
});





// Animation au scroll
const ronds = document.querySelectorAll('.AC_favRond');
const imgLigne1 = document.querySelectorAll('.AC_ligne1 img');
const imgLigne2 = document.querySelectorAll('.AC_ligne2 img');

//  D'abord, on créé les options
let options = {
    // root: null,
    rootMargin: "-10% 0px",
    threshold: 0
}

// puis notre fonction.
function handleIntersect(entries){
    
    //  Dans cette fonction, on va mettre ce qui va être "callback" (rappelé)
    // à chaque fois qu'une intersection se produit
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;          
        }
    });
    
}

// Puis, on crée notre objet 
const observer = new IntersectionObserver(handleIntersect, options)

// et on observe ce qu'il se passe pour chaque image
ronds.forEach(rond => {
    observer.observe(rond)
 });

imgLigne1.forEach(image1 => {
    observer.observe(image1)
});

imgLigne2.forEach(image2 => {
    observer.observe(image2)
});







