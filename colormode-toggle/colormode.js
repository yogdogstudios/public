
document.addEventListener('DOMContentLoaded', function() {
    function toggleColorMode() {
        // Get all elements with the attribute color-mode
        const elements = document.querySelectorAll('[color-mode]');

        // Loop through each element and toggle the attribute value between light and dark
        elements.forEach(element => {
            const currentMode = element.getAttribute('color-mode');
            
            if (currentMode === 'light') {
                element.setAttribute('color-mode', 'dark');
            } else if (currentMode === 'dark') {
                element.setAttribute('color-mode', 'light');
            }
        });
    }

    // Add an event listener to the element with the attribute yd-colormode="toggle"
    const toggleElement = document.querySelector('[yd-colormode="toggle"]');
    if (toggleElement) {
        toggleElement.addEventListener('click', toggleColorMode);
    }
});