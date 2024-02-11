// SELECTORS
const postContainer = document.querySelector('.post-container');
const backgroundSelector = document.querySelector('.background-selector');
const backgroundUnselector = document.querySelector('.background-unselector');
const backgroundColorsShow = document.querySelector('.background-colors');
const postTextarea = document.querySelector('.post-text');
const backgroundColors = document.querySelectorAll('.color');
const postContentSection = document.querySelector('.post-content');
const contentSection = document.querySelector('.content-section');

console.log(backgroundColors);

backgroundSelector.addEventListener('click', () => {
    backgroundSelector.style.display = "none";
    backgroundColorsShow.style.display = "flex";
});

backgroundUnselector.addEventListener('click', () => {
    backgroundSelector.style.display = "block";
    backgroundColorsShow.style.display = "none";
});

// Iterate over each element in backgroundColors NodeList
backgroundColors.forEach(color => {
    color.addEventListener('click', (event) => {
        const clickedColor = window.getComputedStyle(event.target).backgroundColor;
        const cleanedClickedColor = clickedColor.toLowerCase().replace(/\s/g, '');
        console.log(clickedColor);
        
        // Convert RGB to named color
        const namedColor = rgbToNamedColor(cleanedClickedColor);

        console.log(namedColor);
        if (namedColor !== 'white') {
            addPostStyle(namedColor);
            postTextarea.classList.add('style');

        } else if (namedColor === 'white') {
            removePostStyle(namedColor);
            postTextarea.classList.remove('style');
        }
        
    });
});

function addPostStyle(color) {
    contentSection.style.background = color;
    postContainer.style.height = '39.125rem';
    contentSection.style.height = `21.75rem`;
    postContainer.style.height = '39.125rem';
    postContentSection.style.height = '21.6875rem';
}

function removePostStyle(color) {
    contentSection.style.background = color;
    postContainer.style.height = '26.875rem';
    contentSection.style.height = `11.25rem`;
    postContainer.style.height = '26.875rem';
    postContentSection.style.height = '15.125rem';
}

function rgbToNamedColor(rgb) {
    // Define a mapping of RGB values to color names
    const colorMap = {
        '255255255': 'white',
        // Add more entries as needed for other colors
    };

    // Extract RGB values from the input string
    const rgbValues = rgb.match(/\d+/g);

    // Combine RGB values into a string without spaces
    const cleanedColor = rgbValues.join('');

    // Check if the cleanedColor exists in the colorMap
    if (colorMap.hasOwnProperty(cleanedColor)) {
        return colorMap[cleanedColor];
    }

    // If no match is found, return the original RGB color
    return rgb;
}
