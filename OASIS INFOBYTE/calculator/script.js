const resultField = document.getElementById('result');
const buttons = document.querySelectorAll('.number, .operator, .clear, .equal');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            resultField.value = '';
        } else if (button.classList.contains('equal')) {
            try {
                resultField.value = eval(resultField.value);
            } catch (error) {
                resultField.value = 'Error';
            }
        } else {
            resultField.value += button.textContent;
        }
    });
});
