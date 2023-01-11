// Animation au scroll
const histoireBloc = document.querySelectorAll('.bloc_histoire');

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
histoireBloc.forEach(story => {
    observer.observe(story)
 });

