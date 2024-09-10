function showMessage(textId) {
    const textElement = document.getElementById(textId);
    const textContainer = document.querySelector('.text-container');

    if (textElement) {
        if (textElement.classList.contains('hidden')) {
            textElement.classList.remove('hidden');
            textContainer.classList.add('active');

            const allTexts = document.querySelectorAll('.text');
            allTexts.forEach(text => {
                if (text !== textElement) {
                    text.classList.add('hidden');
                }
            });
        } else {
            textElement.classList.add('hidden');
            const anyVisibleText = Array.from(document.querySelectorAll('.text')).some(text => !text.classList.contains('hidden'));
            if (!anyVisibleText) {
                textContainer.classList.remove('active');
            }
        }
    } else {
        console.error(`Element with ID "${textId}" not found.`);
    }
}