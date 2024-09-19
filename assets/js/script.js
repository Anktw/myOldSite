document.getElementById('show-more-btn').addEventListener('click', function() {
    var moreTimeline = document.getElementById('more-timeline');
    
    if (moreTimeline.style.display === 'none' || moreTimeline.style.display === '') {
        moreTimeline.style.display = 'block';
        document.body.classList.add('timeline-btn-icon')
    } else {
        moreTimeline.style.display = 'none';
        document.body.classList.remove('timeline-btn-icon')  
    }
});