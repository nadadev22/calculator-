let resultField = document.getElementById('result');

function appendToDisplay(value) {
    resultField.value += value;
}

function clearDisplay() {
    resultField.value = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function toggleTheme() {
    const root = document.documentElement;
    const themeBtn = document.getElementById('theme-btn');
    
    if (root.getAttribute('data-theme') === 'light') {
        root.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '🌞'; // رمز الشمس للوضع النهاري
    } else {
        root.setAttribute('data-theme', 'light');
        themeBtn.textContent = '🌙'; // رمز القمر للوضع الليلي
    }
}
