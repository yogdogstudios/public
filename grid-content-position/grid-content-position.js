document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class .grid_section
    const gridSections = document.querySelectorAll('.grid_section');

    // Check if there are any .grid_section elements before proceeding
    if (gridSections.length > 0) {
        // Determine the content-position of the first .grid_section
        const firstPosition = gridSections[0].getAttribute('content-position');
        let newPosition;

        // Determine the new position value based on the first .grid_section's content-position
        if (firstPosition === 'left') {
            newPosition = 'right';
        } else if (firstPosition === 'right') {
            newPosition = 'left';
        }

        // If a new position was determined, apply it to even .grid_section elements
        if (newPosition) {
            gridSections.forEach((section, index) => {
                // Remember, index is 0-based. Thus, even items are at odd indices: 1, 3, 5, ...
                if ((index + 1) % 2 === 0) {
                    section.setAttribute('content-position', newPosition);
                }
            });
        }
    }
});
