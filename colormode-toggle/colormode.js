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

        // Find the element with the class switch_circle and toggle the class is-dark
        const switchCircleElement = document.querySelector('.switch_circle');
        if (switchCircleElement) {
            switchCircleElement.classList.toggle('is-dark');
        }
    }

    // Add an event listener to the element with the attribute yd-colormode="toggle"
    const toggleElement = document.querySelector('[yd-colormode="toggle"]');
    if (toggleElement) {
        toggleElement.addEventListener('click', toggleColorMode);
    }
});
