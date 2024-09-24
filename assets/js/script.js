document.getElementById('show-more-btn').addEventListener('click', function() {
    var moreTimeline = document.getElementById('more-timeline');
    var icon = document.getElementById('timeline-btn-icon');
    
    if (moreTimeline.style.display === 'none' || moreTimeline.style.display === '') {
        moreTimeline.style.display = 'block';
        this.querySelector('span').textContent = 'Show Less';
        document.body.classList.add('change-btn-icon')
    } else {
        moreTimeline.style.display = 'none';
        this.querySelector('span').textContent = 'Show More';
        document.body.classList.remove('change-btn-icon')
    }
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});