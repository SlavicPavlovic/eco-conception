function rotation(entries, observer) {
    entries.forEach(entry => {
        const carouselImages = entry.target.querySelectorAll('.carousel-image');
        let currentImage = 0;

        if (carouselImages.length > 0) {
            carouselImages[currentImage].style.display = 'block';

            setInterval(() => {
                carouselImages[currentImage].style.display = 'none';
                currentImage++;
                if (currentImage >= carouselImages.length) {
                    currentImage = 0;
                }
                carouselImages[currentImage].style.display = 'block';
            }, 5000);
        } else {
            console.error("Aucune image de classe 'carousel-image' trouvée dans la balise cible.");
        }
    });
}

const imgColumns = document.querySelectorAll('.img-column');
imgColumns.forEach(imgColumn => {
    const observer = new IntersectionObserver(rotation, { threshold: 0.5 });
    observer.observe(imgColumn);
});
