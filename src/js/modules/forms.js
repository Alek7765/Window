import checkNumbInputs from './checkNumbInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumbInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text(); // await можно ставить в нескольких местах, вернем запрос в текст. формате
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''; // очищаем все инпуты после отправки формы
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item); // все введенные данные в форму запишутся в перменную формДата
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs(); // очищаем все инпуты
                    setTimeout(() => {
                        statusMessage.remove(); // удаляем блок с статусом отправки 
                    }, 3000);                   // через 5 сек
                })
        });
    })
};

export default forms;