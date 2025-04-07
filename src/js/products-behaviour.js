export const productsBehaviour = () => {
    const viewMoreBtn = document.querySelector('.featured__more-btn');
    const productsExtra = document.querySelector('#products-extra');

    viewMoreBtn.addEventListener('click', () => {
        productsExtra.classList.toggle('hidden');

        if (productsExtra.classList.contains('hidden')) {
            viewMoreBtn.textContent = 'view all';
        } else {
            viewMoreBtn.textContent = 'show less';
        }
    });
};
