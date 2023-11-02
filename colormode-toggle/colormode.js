document.addEventListener('DOMContentLoaded', function() {
    function toggleColorMode() {
        // Get all elements with the attribute color-mode
        const elements = document.querySelectorAll('[color-mode]');
        
        // Determine the new mode based on the current mode of the first element (assuming all are in sync)
        const newMode = elements[0].getAttribute('color-mode') === 'light' ? 'dark' : 'light';

        // Update elements and the switch UI based on the new mode
        updateColorMode(newMode);
    }

    function updateColorMode(mode) {
        const elements = document.querySelectorAll('[color-mode]');
        elements.forEach(element => {
            element.setAttribute('color-mode', mode);
        });

        const switchCircles = document.querySelectorAll('.switch_circle');
        switchCircles.forEach(switchCircle => {
            if (mode === 'dark') {
                switchCircle.classList.add('is-dark');
            } else {
                switchCircle.classList.remove('is-dark');
            }
        });

        // Save the current color mode to local storage
        localStorage.setItem('colorMode', mode);
    }

    // Add event listeners to all elements with the attribute yd-colormode="toggle"
    const toggleElements = document.querySelectorAll('[yd-colormode="toggle"]');
    toggleElements.forEach(element => {
        element.addEventListener('click', toggleColorMode);
    });

    // On page load, check local storage for the user's color mode choice
    let savedColorMode = localStorage.getItem('colorMode');

    // If no saved preference, check the user's system preference
    if (!savedColorMode) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            savedColorMode = 'dark';
        } else {
            savedColorMode = 'light';
        }
    }

    // Apply the determined or saved color mode
    updateColorMode(savedColorMode);
});
