document.addEventListener('DOMContentLoaded', () => {
    // مدیریت کارت‌های تعاملی
    document.querySelectorAll('.interactive-card').forEach(card => {
        const moreBtn = card.querySelector('.more-info-btn');
        const backBtn = card.querySelector('.back-btn');

        const toggleCard = (e) => {
            e.preventDefault();
            e.stopPropagation();
            card.classList.toggle('flipped');
        };

        if(moreBtn) moreBtn.addEventListener('click', toggleCard);
        if(backBtn) backBtn.addEventListener('click', toggleCard);

        card.addEventListener('click', (e) => {
            if(!e.target.classList.contains('card-btn')) {
                card.classList.toggle('flipped');
            }
        });

        card.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
            }
        });
    });

    // انیمیشن اسکرول
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.interactive-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});