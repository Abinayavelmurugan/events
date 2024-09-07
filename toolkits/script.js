document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    const contentData = {
        ideation: {
            image: 'ideation.avif',
            video: 'https://www.youtube.com/embed/21tL9ZCa-Qc?si=SAxr1YL-xaaVBrek'
        },
        validation: {
            image: 'validation.avif',
            video: 'https://www.youtube.com/embed/21tL9ZCa-Qc?si=SAxr1YL-xaaVBrek'
        },
        'early-traction': {
            image: 'tracking.avif',
            video: 'https://www.youtube.com/embed/21tL9ZCa-Qc?si=SAxr1YL-xaaVBrek'
        },
        scaling: {
            image: 'scaling.avif',
            video: 'https://www.youtube.com/embed/21tL9ZCa-Qc?si=SAxr1YL-xaaVBrek'
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');

            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding content
            tab.classList.add('active');
            const activeContent = document.getElementById(targetId);
            activeContent.classList.add('active');

            // Update image and video based on the selected tab
            activeContent.querySelector('.content-image').src = contentData[targetId].image;
            activeContent.querySelector('.video-container iframe').src = contentData[targetId].video;
        });
    });
});
