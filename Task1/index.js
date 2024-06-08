document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('.div');

    divs.forEach(div => {
        const img = div.querySelector('img');
        const title = div.querySelector('h2');
        const description = div.querySelector('p');
        const btn = div.querySelector('.btn-know-more');

        // Add event listener for mouse enter
        div.addEventListener('mouseenter', () => {
            img.style.filter = 'grayscale(60%) blur(5px)';
            img.style.transform = 'scale(1.1)';

            title.style.transform = 'translateY(-30px)';
            description.style.transform = 'translateY(-30px)';
            btn.style.opacity = '1';
        });

        // Add event listener for mouse leave
        div.addEventListener('mouseleave', () => {
            img.style.filter = 'none';
            img.style.transform = 'scale(1)';

            title.style.transform = 'translateY(0)';
            description.style.transform = 'translateY(0)';
            btn.style.opacity = '0';
        });
    });
});
