// Image slider for Home Page
window.addEventListener('DOMContentLoaded', function() {
    // Page Transition Animation
    const transitionOverlay = document.querySelector('.page-transition-overlay');
    
    // Ensure the overlay is always visible when DOM is loaded
    if (transitionOverlay) {
        // Make sure the overlay is visible immediately
        transitionOverlay.classList.add('active');
        
        // Keep it visible for a consistent time
        setTimeout(() => {
            transitionOverlay.classList.remove('active');
        }, 800);
    }
    
    // Handle all navigation links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        // Only add transition for internal links (not external or anchor links)
        if (link.hostname === window.location.hostname && 
            !link.href.includes('#') && 
            link.href.endsWith('.html')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.href;
                
                // Show the transition overlay
                transitionOverlay.classList.add('active');
                
                // Navigate to the new page after animation
                setTimeout(() => {
                    window.location.href = target;
                }, 500); // Match this with your CSS transition duration
            });
        }
    });
      // Fade out the overlay when page is loaded
    window.addEventListener('load', function() {
        // If the overlay exists and is active, fade it out
        if (transitionOverlay && transitionOverlay.classList.contains('active')) {
            setTimeout(() => {
                transitionOverlay.classList.remove('active');
            }, 300);
        }
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('pageshow', function(event) {
        // If the page is coming from browser cache (back/forward navigation)
        if (event.persisted) {
            // Show and then hide the overlay
            if (transitionOverlay) {
                transitionOverlay.classList.add('active');
                setTimeout(() => {
                    transitionOverlay.classList.remove('active');
                }, 500);
            }
        }
    });

    const slides = document.querySelectorAll('.slides img');
    let current = 0;
    if (slides.length > 0) {
        slides[current].classList.add('active');
        function showSlide(idx) {
            slides[current].classList.remove('active');
            current = (idx + slides.length) % slides.length;
            slides[current].classList.add('active');
        }
        setInterval(() => showSlide(current + 1), 3000);
    }

    // Feedback form logic
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
    if (feedbackForm && feedbackList) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const item = document.createElement('div');
            item.className = 'feedback-item';
            item.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
            feedbackList.prepend(item);
            feedbackForm.reset();
        });
    }
});
