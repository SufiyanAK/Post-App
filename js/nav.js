const midIcons = document.querySelectorAll('.icon');

console.log(midIcons);

midIcons.forEach(link => {
    link.addEventListener('click', () => {
        midIcons.forEach(otherLink => {
            if (otherLink !== link) {
                removeStyle(otherLink);
            }
        });
        addStyle(link);
    });
    removeStyle(link);
});

function addStyle (link) {
    link.classList.add('solid');
}

function removeStyle (link) {
    link.classList.remove('solid');
}