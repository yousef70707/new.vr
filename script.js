// دالة لإضافة التفاعل للأزرار
function addButtonInteraction(buttonSelector) {
    document.querySelectorAll(buttonSelector).forEach(button => {
        button.addEventListener('click', function(event) {
            // تحقق مما إذا كان الزر هو زر "Buy Now"
            if (this.classList.contains('buy-btn')) {
                // إذا كان الزر "Buy Now"، لا تمنع الانتقال
                return; // الخروج من الدالة للسماح بالانتقال
            }
            event.preventDefault(); // منع الانتقال الافتراضي للرابط
            alert('Button Clicked: ' + this.textContent); // عرض رسالة عند الضغط على الزر
        });
    });
}

// دالة لإضافة تأثير التحجيم لبطاقات الشهادات
function addTestimonialHoverEffect() {
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)'; // تكبير البطاقة عند المرور
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)'; // إعادة الحجم الطبيعي عند الخروج
        });
    });
}

if (this.classList.contains('buy-btn')) {
    return; // السماح بالانتقال
}

    const stars = document.querySelectorAll('.star');
    let ratingValue = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            ratingValue = star.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= ratingValue) {
                    s.classList.add('selected');
                }
            });
        });
    });

    document.getElementById('testimonialForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = e.target[0].value;
        const name = e.target[1].value;

        alert(`تم إرسال التعليق: "${comment}"\nاسم العميل: ${name}\nتقييم: ${ratingValue} نجوم`);
        
        // إعادة تعيين الحقول بعد الإرسال
        e.target.reset();
        stars.forEach(s => s.classList.remove('selected'));
        ratingValue = 0;
    })
    function toggleDropdown(event) {
        const dropdown = event.currentTarget.querySelector('.dropdown-content');
        dropdown.classList.toggle('show');
    }
    
    // إغلاق القائمة عند الضغط خارجها
    window.onclick = function(event) {
        if (!event.target.matches('.three-dots') && !event.target.closest('.three-dots')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
    
    document.querySelectorAll('.visit-btn, .buy-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Button Clicked: ' + this.textContent);
        });
    });
        
