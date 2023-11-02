document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class .grid_section or .grid_section and .is-big-image
    const gridSections = document.querySelectorAll('.grid_section');
    
    console.log(gridSections);

    // Check if there are any matched elements before proceeding
    if (gridSections.length > 0) {
        // Determine the content-position of the first matched element
        const firstPosition = gridSections[0].getAttribute('content-position');
        let nextPosition = firstPosition === 'left' ? 'right' : 'left'; 

        // Loop through all grid sections starting from the second element
        for (let i = 1; i < gridSections.length; i++) {
            gridSections[i].setAttribute('content-position', nextPosition);
            // Alternate the value for the next iteration
            nextPosition = nextPosition === 'left' ? 'right' : 'left';
        }
    }
});
