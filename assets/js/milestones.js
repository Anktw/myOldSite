document.addEventListener('DOMContentLoaded', function () {
    fetch('milestones.json')
        .then(response => response.json())
        .then(data => {
            const timelineContainer = document.querySelector('.timeline');
            const moreTimelineContainer = document.getElementById('more-timeline');

            // Render first 5 milestones initially
            data.milestones.slice(0, 5).forEach(milestone => {
                const milestoneElement = createMilestoneElement(milestone);
                timelineContainer.insertBefore(milestoneElement, document.getElementById('more-timeline'));
            });

            // Render rest of the milestones in the hidden section
            data.milestones.slice(5).forEach(milestone => {
                const milestoneElement = createMilestoneElement(milestone);
                moreTimelineContainer.appendChild(milestoneElement);
            });
        });

    // Function to create milestone elements
    function createMilestoneElement(milestone) {
        const milestoneDiv = document.createElement('div');
        milestoneDiv.classList.add('milestone');

        const title = document.createElement('h3');
        title.textContent = milestone.title;

        const description = document.createElement('p');
        description.textContent = milestone.description;

        milestoneDiv.appendChild(title);
        milestoneDiv.appendChild(description);
        return milestoneDiv;
    }

    // Show more/less functionality
    document.getElementById('show-more-btn').addEventListener('click', function () {
        var moreTimeline = document.getElementById('more-timeline');
        if (moreTimeline.style.display === 'none' || moreTimeline.style.display === '') {
            moreTimeline.style.display = 'block';
            this.querySelector('span').textContent = 'Show Less';
        } else {
            moreTimeline.style.display = 'none';
            this.querySelector('span').textContent = 'Show More';
        }
    });
});
