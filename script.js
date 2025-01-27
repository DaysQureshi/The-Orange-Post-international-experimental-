document.addEventListener('DOMContentLoaded', (event) => {
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        article.addEventListener('mouseover', () => {
            article.classList.add('hovered');
        });

        article.addEventListener('mouseout', () => {
            article.classList.remove('hovered');
        });
    });
});
