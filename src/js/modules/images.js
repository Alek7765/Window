const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup'); // добавили сущесствующий класс из CSS popup
    workSection.appendChild(imgPopup); // доб наш блок с дивом в нужную секцию

    imgPopup.style.justifyContent = 'center'; // центрируем блок с изображением по горизонтали
    imgPopup.style.alignItems = 'center'; // центрируем блок с изображением по вертикали
    imgPopup.style.display = 'none'; // изначально скрываем наш блок

    imgPopup.appendChild(bigImage); // в наш блок с дивом добавили блок с тегом img

    workSection.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем стандартное поведение браузера по обновлению стр

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex'; // чтобы при клике отобразить наш блок
            document.body.style.overflow = "hidden"; // отключаем скролинг при появлении изображения
            const path = target.parentNode.getAttribute('href'); // записываем путь при клике по атрибуту
            bigImage.setAttribute('src', path); // устанавливаем нашему блоку с img атрибут src с полученным путем при нажатии
        }

        if (target && target.matches('div.popup')) { // если кликнуть вне изображения
            imgPopup.style.display = 'none'; // блок исчезнет
            document.body.style.overflow = ""; // включаем скролинг 
        }
    });
};

export default images;