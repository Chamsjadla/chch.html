function afficher(){
    FenetreAffichage = window.open(('', NouvelleFenetre), 'toolbar=no,statuts=no, width=300, height=200')
    FenetreAffichage.document.write("souvenez vous de vos informations");
    FenetreAffichage.document.write("vous etes connecter autant que "+document.formulaire.n1);
    FenetreAffichage.document.write("votre email est "+document.formulaire.email);
    FenetreAffichage.document.write("votre mot de passe est" +document.formulaire.passe1);
    
}