document.getElementById('show-more-btn').addEventListener('click', function() {
    var moreTimeline = document.getElementById('more-timeline');
    
    if (moreTimeline.style.display === 'none' || moreTimeline.style.display === '') {
        moreTimeline.style.display = 'block';
        this.textContent = 'Show Less';  // Change button text
    } else {
        moreTimeline.style.display = 'none';
        this.textContent = 'Show More';  // Reset button text
    }
});