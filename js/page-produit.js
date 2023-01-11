let imagePrincipale = document.querySelector('.carte_Principale img');
let image1 = document.querySelector('.Img-Sec-1 img');
let image2 = document.querySelector('.Img-Sec-2 img');
let image3 = document.querySelector('.Img-Sec-3 img');
let image4 = document.querySelector('.Img-Sec-4 img');

image1.addEventListener('click', function(e) {
    imagePrincipale.setAttribute('src', "../assets/Photos/Marie-La-Souris.jpeg" );
    console.log(imagePrincipale);
});
image2.addEventListener('click', function(e) {
    imagePrincipale.setAttribute('src', "../assets/Sac-rose-Melina.jpeg" );
    console.log(imagePrincipale);
});
image3.addEventListener('click', function(e) {
    imagePrincipale.setAttribute('src', "../assets/Sac-rose-expo.jpeg" );
    console.log(imagePrincipale);
});
image4.addEventListener('click', function(e) {
    imagePrincipale.setAttribute('src', "../assets/Sac-rose-simple.jpeg" );
    console.log(imagePrincipale);
});



// Animation au scroll
const blocProduit = document.querySelectorAll('.bloc_produit');

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
blocProduit.forEach(blocus => {
    observer.observe(blocus)
 });


