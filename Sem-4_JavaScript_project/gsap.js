const card = document.querySelectorAll('.card');

// Scale up animation on hover
card.forEach((card,i)=>{

    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    
    // Scale down animation on mouse leave
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
})