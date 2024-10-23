document.addEventListener('DOMContentLoaded', function() {
    const styleResult = document.getElementById('style-result');
    const buttons = document.querySelectorAll('.choose-option');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedOption = this.parentElement.querySelector('h3').innerText;
            styleResult.innerText = `Kamu memilih: ${selectedOption}`;
        });
    });
});
