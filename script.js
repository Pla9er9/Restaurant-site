const observer = new IntersectionObserver(e => {
    e.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        }
        else {
            e.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(e => observer.observe(e))


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});