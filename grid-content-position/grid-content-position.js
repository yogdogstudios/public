document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class .grid_section
    const gridSections = document.querySelectorAll('.grid_section');

    // Check if there are any .grid_section elements before proceeding
    if (gridSections.length > 0) {
        // Determine the content-position of the first .grid_section
        const firstPosition = gridSections[0].getAttribute('content-position');
        let targetIndices;

        // Determine which indices to target based on the first .grid_section's content-position
        if (firstPosition === 'left') {
            // For 0-based index, even elements are 1, 3, 5,... (odd indices when 1-based)
            targetIndices = index => (index + 1) % 2 === 0;
        } else if (firstPosition === 'right') {
            // For 0-based index, odd elements are 0, 2, 4,... (even indices when 1-based)
            targetIndices = index => index % 2 === 0;
        }

        // If targetIndices was determined, apply the content-position attribute
        if (targetIndices) {
            gridSections.forEach((section, index) => {
                if (targetIndices(index)) {
                    section.setAttribute('content-position', 'right');
                }
            });
        }
        console.log('Script loaded!')
    }
});
