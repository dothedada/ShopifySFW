export const marqueeBehaviour = () => {
    const marquees = document.querySelectorAll('.marquee');

    for (const marquee of marquees) {
        const marqueeWidth = marquee.getBoundingClientRect().width;
        const marqueeTxt = marquee.querySelector('.marquee__text');
        const marqueeTxtWidth = marqueeTxt.getBoundingClientRect().width;
        const container = marquee.querySelector('.marquee__container');

        let texts = 1;

        while (marqueeTxtWidth * texts < marqueeWidth) {
            const newMarqueeTxt = marqueeTxt.cloneNode(true);
            container.append(newMarqueeTxt);
            texts++;
        }

        const animation = container.animate(
            [
                { transform: 'translateX(0)' },
                { transform: `translateX(-${marqueeTxtWidth}px)` },
            ],
            {
                duration: 10000,
                iterations: Infinity,
                easing: 'linear',
            },
        );

        marquee.addEventListener('mouseenter', () => {
            if (animation) {
                animation.pause();
            }
        });

        // Reanudar animación al quitar el hover
        marquee.addEventListener('mouseleave', () => {
            if (animation) {
                animation.play();
            }
        });
    }
};
