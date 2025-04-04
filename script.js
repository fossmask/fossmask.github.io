
const starsContainer = document.querySelector('.stars');
const starsCount = 100;

for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    starsContainer.appendChild(star);
}

const buttons = document.querySelectorAll('.about-btn');


buttons.forEach(button => {
    button.addEventListener('click', function() {

        const content = this.nextElementSibling;
        

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            this.textContent = 'Hakkında';
        } else {

            document.querySelectorAll('.about-content.active').forEach(openContent => {
                openContent.classList.remove('active');
                openContent.previousElementSibling.textContent = 'Hakkında';
            });
            

            content.classList.add('active');
            this.textContent = 'Kapat';
        }
    });
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const angleY = (mouseX - cardCenterX) / 20;
        const angleX = (cardCenterY - mouseY) / 20;
        

        card.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
    });
    

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'rotateY(0) rotateX(0)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }, 300);
    });
    

    card.addEventListener('mouseenter', function() {
        card.style.transition = 'none';
    });
});