//  partie interaction quantité /prix :
let quantiteChoisie = document.querySelector('#ac_input_qte');
let prixTotal = document.querySelector('.tarif');
let prixUnitaire = document.querySelector('.prix_unite_invisible').textContent;

quantiteChoisie.addEventListener('input', function (e) {
  e.preventDefault
  if (quantiteChoisie.value !=-1) {
    prixTotal.innerHTML = `${prixUnitaire * quantiteChoisie.value}`; 
  }
});


// Pour l'apparition d'une nouvelle ligne d'article ajouté...
// ...A AMELIORER... c'est juste pour la trame

// let ligneArticle = document.querySelector('.produit_recap');

// // [Evenement].addEventListener('click', function (e) {

//   let blocArticle = document.querySelector('.recap_panier');
//   let cloneLigneArticle = ligneArticle.cloneNode(true);
//   let blocLivraison = document.querySelector('.ac_blocLivraison');
//   cloneLigneArticle.style.marginTop = "10px";
//   blocArticle.insertBefore(cloneLigneArticle, blocLivraison);

// // });




// pour faire apparaitre le formulaire après validation des articles

let formulaireCommande = document.querySelector('.ac_formulaire');
let validationCommande = document.querySelector('.ac_btnValidation');

validationCommande.addEventListener('click', function (e) {
  formulaireCommande.style.display = "block";
});



//  partie du formulaire de commande

let spanFormName = document.querySelector('.ac_nom span');
let inputFormName = document.querySelector('.ac_nom input');

inputFormName.onclick = function () {
  spanFormName.classList.toggle('active');
};

let spanFormMail = document.querySelector('.ac_adMail span');
let inputFormMail = document.querySelector('.ac_adMail input');

inputFormMail.onclick = function () {
  spanFormMail.classList.toggle('active');
};

let spanFormObjet = document.querySelector('.ac_obj span');
let inputFormObjet = document.querySelector('.ac_obj input');

inputFormObjet.onclick = function () {
  spanFormObjet.classList.toggle('active');
};

let spanFormMessage = document.querySelector('.ac_msg span');
let inputFormMessage = document.querySelector('.ac_msg textarea');

inputFormMessage.onclick = function () {
  spanFormMessage.classList.toggle('active');
};





// Pour les infos à envoyer par mail :



function addNewLine(text, newLine) {
  return text + "\n" + newLine;
}

function mailTo() {
  
  const nomProduit = document.querySelector('.colonne2 h4').textContent;
  console.log(nomProduit);
  console.log(quantiteChoisie.value);
  const btnOui = document.querySelector('#ac_btn_radio_O').checked;
  console.log(btnOui);
  const personnalisation = document.querySelector('.ac_inputText').value;
  console.log(personnalisation);
  // if (btnOui == true && personnalisation.value != null)
  // si le bouton oui est ckecked et qu'il y a quelque chose dans la personnalisation
  // alors on l'envoie à Chanel
  // else ("Pas de personnalisation")
  const colis = document.querySelector('.ac_btn_livraison_okai');
  // if (colis.checked == true) { "Je suouhaite que mon achat soit livré"} else ("Je souhaite récupérer mon achat sur place")
  // Mon identité
  console.log(inputFormName.value);
  // Mon mail
  console.log(inputFormMail.value);
  // Mon tel
  console.log(inputFormObjet.value);
  // Mon message
  console.log(inputFormMessage.value);


  let body = `ligne 1\nligne 2`;
  body = encodeURIComponent(body);
  //   let subject = inputSubject.value;
  
    let url = `mailto:a.cannesson5@gmail.com?Subject=Commande&Nomduproduit=${nomProduit}&quantité souhaité=${quantiteChoisie.value}`;
  //   let url = `mailto:a.cannesson5@gmail.com?subject=${commande}&body=${body}`;
  
  console.log(url);
  window.open(url, "_blank").focus();
}


let validForm = document.querySelector('.btnFinal');
validForm.addEventListener("click", mailTo);





// const inputBody = document.querySelector("#body");
// const inputSubject = document.querySelector("#subject");
// const button = document.querySelector("button");

// function addNewLine(text, newLine) {
//   return text + "\n" + newLine;
// }