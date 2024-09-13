const timer = (id, deadline) => {

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()), // дата окончания акции минус тек. дата
            seconds = Math.floor((t / 1000) % 60), // получаем количество оставшихся сек
            minutes = Math.floor((t / 1000 / 60) % 60), // получ кол-во оставших мин
            hours = Math.floor((t / (1000 * 60 * 60)) % 24), // получ кол-во ост часов 
            days = Math.floor((t / (1000 * 60 * 60 * 24))); // получ кол-во ост дней

        return { // возвращаем объект с св-ми оставшихся дней, часов, минут, сек и общее время
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); // вызываем ф-цию заранее, чтобы при обновл стр, время не дергалось

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;