// Sticky Navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Image Carousel
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.piano-gallery img');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
document.addEventListener('DOMContentLoaded', showSlides);

// Form Validation with Real-Time Feedback
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const validateInput = (input) => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ccc';
        }
    };
    
    nameInput.addEventListener('input', () => validateInput(nameInput));
    emailInput.addEventListener('input', () => validateInput(emailInput));
    messageInput.addEventListener('input', () => validateInput(messageInput));

    form.addEventListener('submit', (e) => {
        validateInput(nameInput);
        validateInput(emailInput);
        validateInput(messageInput);

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            e.preventDefault();
            alert("Please fill out all fields.");
        }
    });
});

// Scroll-to-Top Button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
