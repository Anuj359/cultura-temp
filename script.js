document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('customerForm');
    const logo = document.getElementById('cult-logo');
    
    // // Logo animation on hover - optimized for Archivo Black
    // logo.addEventListener('mouseover', function() {
    //     this.style.transform = 'scale(1.05)';
    //     this.style.letterSpacing = '12px';
        
    //     // Create sparkling effect
    //     const sparkles = document.createElement('div');
    //     sparkles.className = 'sparkle-overlay';
    //     this.appendChild(sparkles);
        
    //     setTimeout(() => {
    //         sparkles.remove();
    //     }, 1000);
    // });
    
    // logo.addEventListener('mouseout', function() {
    //     this.style.transform = 'scale(1)';
    //     this.style.letterSpacing = '8px';
    // });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        // Simple validation
        if (!name || !email) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Button animation
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').textContent = 'Thank You!';
        submitBtn.querySelector('.btn-icon').textContent = '✓';
        submitBtn.style.backgroundColor = '#4CAF50';
        
        // Confetti effect
        createConfetti();
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            submitBtn.querySelector('.btn-text').textContent = 'Notify Me';
            submitBtn.querySelector('.btn-icon').textContent = '💎';
            submitBtn.style.backgroundColor = '#d4af37';
            submitBtn.disabled = false;
        }, 3000);
        
        console.log('Form submitted:', { name, email, phone });
    });
    
    // Parallax effect
    const heroImage = document.querySelector('.hero-image');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
    
    // Create confetti function
    function createConfetti() {
        const colors = ['#d4af37', '#ffffff', '#f0e6d8'];
        const container = document.querySelector('.content');
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = '-10px';
            confetti.style.opacity = '0';
            confetti.style.transform = 'scale(0)';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            container.appendChild(confetti);
            
            // Animate in
            setTimeout(() => {
                confetti.style.opacity = '0.8';
                confetti.style.transform = 'scale(1)';
            }, 50);
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        .sparkle-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, 
                rgba(212, 175, 55, 0.8) 0%, 
                rgba(212, 175, 55, 0.5) 50%, 
                transparent 70%);
            animation: sparkle 1s ease-out forwards;
        }
        @keyframes sparkle {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.2); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});