document.addEventListener('DOMContentLoaded', function() {
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function toggleColorMode() {
        // Get all elements with the attribute color-mode
        const elements = document.querySelectorAll('[color-mode]');
        
        // Determine the new mode based on the current mode of the first element (assuming all are in sync)
        const newMode = elements[0].getAttribute('color-mode') === 'light' ? 'dark' : 'light';

        // Loop through each element and set the attribute value
        elements.forEach(element => {
            element.setAttribute('color-mode', newMode);
        });

        // Store the user's choice in a cookie for 30 days
        setCookie('colorModePreference', newMode, 30);
    }

    // Set the initial color mode based on the cookie
    const preferredMode = getCookie('colorModePreference');
    if (preferredMode) {
        document.querySelectorAll('[color-mode]').forEach(element => {
            element.setAttribute('color-mode', preferredMode);
        });
    }

    // Add an event listener to the element with the attribute yd-colormode="toggle"
    const toggleElement = document.querySelector('[yd-colormode="toggle"]');
    if (toggleElement) {
        toggleElement.addEventListener('click', toggleColorMode);
    }
});
