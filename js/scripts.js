// Image slider for Home Page
window.addEventListener('DOMContentLoaded', function() {
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
