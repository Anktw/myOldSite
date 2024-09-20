window.addEventListener('scroll', function() {
    var milestones = document.querySelectorAll('.milestone');
    for (var i = 0; i < milestones.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = milestones[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            milestones[i].classList.add('visible');

        } else {
            milestones[i].classList.remove('visible');
        }
    }
});