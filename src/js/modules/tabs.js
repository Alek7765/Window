const tabs = (headerSelector, tabSelector, contentSelecor, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelecor);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || // проверяем нужный клас, убираем "." из наз-я класса
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { //проверяем тоже самое, только у родителя элемента
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
};

export default tabs;