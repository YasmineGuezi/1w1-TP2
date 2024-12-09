/**
 * @description Juste pour la partie de galerie pour avoir une version
 * agrandie de l'image cliquée  
 * @author Yasmine Guezi
 */
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.Images img'); // Sélectionne toutes les images
    const previewContainer = document.getElementById('preview'); // Conteneur pour l'image agrandie

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const enlargedImg = document.createElement('img'); // Crée une balise <img>
            enlargedImg.src = image.src; // Copie l'attribut src
            enlargedImg.alt = image.alt; // Copie l'attribut alt

            previewContainer.innerHTML = ''; // Vide le conteneur (si une image est déjà présente)
            previewContainer.appendChild(enlargedImg); // Ajoute l'image agrandie
        });
    });
});