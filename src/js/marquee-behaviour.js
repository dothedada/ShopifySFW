export const marqueeBehaviour = () => {
    const marquees = document.querySelectorAll('.marquee');

    // Create each marquee behaviour
    for (const marquee of marquees) {
        const marqueeWidth = marquee.getBoundingClientRect().width;
        const marqueeTxt = marquee.querySelector('.marquee__text');
        const marqueeTxtWidth = marqueeTxt.getBoundingClientRect().width;
        const container = marquee.querySelector('.marquee__container');

        let texts = 1;

        // calculate the amounts of copys of the text
        while (marqueeTxtWidth * texts < marqueeWidth) {
            const newMarqueeTxt = marqueeTxt.cloneNode(true);
            container.append(newMarqueeTxt);
            texts++;
        }

        // create the animations
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

        // hover behaviour
        marquee.addEventListener('mouseenter', () => {
            if (animation) {
                animation.pause();
            }
        });

        marquee.addEventListener('mouseleave', () => {
            if (animation) {
                animation.play();
            }
        });
    }
};
