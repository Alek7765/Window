const checkNumbInputs = (selector) => {
    const numImputs = document.querySelectorAll(selector);

    numImputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, ''); // проверяем на цифры и менеяем все буквы на пустое место
        });
    });
}

export default checkNumbInputs;