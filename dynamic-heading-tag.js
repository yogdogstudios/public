document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the heading-tag attribute
    const headers = document.querySelectorAll('[heading-tag]');

    headers.forEach(header => {
        // Get the heading-tag attribute value
        const headerType = header.getAttribute('heading-tag');
        
        if (headerType >= 1 && headerType <= 6) {
            // Create a new heading element based on the heading-tag value
            const newHeader = document.createElement('h' + headerType);
            newHeader.innerHTML = header.innerHTML;
            
            // Copy over any other attributes (excluding heading-tag)
            for (let attr of header.attributes) {
                if (attr.name !== 'heading-tag') {
                    newHeader.setAttribute(attr.name, attr.value);
                }
            }
            
            // Replace the original element with the new heading element
            header.parentNode.replaceChild(newHeader, header);
        }
    });
});
