function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        const imgItems = entry.target.querySelectorAll('.img-item');

        if (entry.isIntersecting) {
            imgItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 0);
            });
        } else {
            imgItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}

const imgColumns = document.querySelectorAll('.img-column');
imgColumns.forEach(imgColumn => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(imgColumn);
});
