/* -------------------------------------------------------------
 * VIGILANCE DEFENSE - SECURITY & CCTV SERVICES
 * Interactive Features Script
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Switcher Handler
    const langSelectors = document.querySelectorAll('.lang-selector');
    langSelectors.forEach(select => {
        select.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            const currentPath = window.location.pathname;
            const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

            // Redirect to selected language directory
            window.location.href = `../${selectedLang}/${currentPage}`;
        });
    });

    // 2. Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Scroll Triggered Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        animatedElements.forEach(el => el.classList.add('animated'));
    }

    // 4. Contact Form Validation and Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const alertBox = document.getElementById('contactAlert');
            if (alertBox) {
                alertBox.className = 'alert alert-success mt-3';
                alertBox.textContent = contactForm.dataset.successMsg || 'Your message has been sent successfully! Our tactical team will contact you shortly.';
                alertBox.classList.remove('d-none');
            }
            contactForm.reset();
        });
    }

    // 5. Newsletter Form Submission Handler
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(form.dataset.successMsg || 'Thank you for subscribing to Vigilance Defense Intelligence alerts!');
                emailInput.value = '';
            }
        });
    });

    // 6. Blog Comment Form Handler
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('commentName');
            const messageInput = document.getElementById('commentMessage');
            const commentList = document.getElementById('commentList');

            if (nameInput && messageInput && commentList) {
                const now = new Date();
                const dateStr = now.toLocaleDateString();

                const newCommentHtml = `
                    <li class="comment-item border-start border-3 border-warning">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="User" class="comment-avatar bw-img">
                        <div>
                            <h5 class="text-white mb-1">${escapeHtml(nameInput.value)}</h5>
                            <small class="text-warning d-block mb-2"><i class="far fa-clock"></i> ${dateStr}</small>
                            <p class="text-light mb-0">${escapeHtml(messageInput.value)}</p>
                        </div>
                    </li>
                `;

                commentList.insertAdjacentHTML('afterbegin', newCommentHtml);
                commentForm.reset();

                const alertBox = document.getElementById('commentAlert');
                if (alertBox) {
                    alertBox.classList.remove('d-none');
                    setTimeout(() => alertBox.classList.add('d-none'), 4000);
                }
            }
        });
    }

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#039;");
    }
});
