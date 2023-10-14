document.addEventListener('DOMContentLoaded', function() {
    function toggleColorMode() {
        // Get all elements with the attribute color-mode
        const elements = document.querySelectorAll('[color-mode]');
        
        // Determine the new mode based on the current mode of the first element (assuming all are in sync)
        const newMode = elements[0].getAttribute('color-mode') === 'light' ? 'dark' : 'light';

        // Loop through each element and set the attribute value
        elements.forEach(element => {
            element.setAttribute('color-mode', newMode);
        });
    }

    // Add event listeners to all elements with the attribute yd-colormode="toggle"
    const toggleElements = document.querySelectorAll('[yd-colormode="toggle"]');
    toggleElements.forEach(element => {
        element.addEventListener('click', toggleColorMode);
    });
});