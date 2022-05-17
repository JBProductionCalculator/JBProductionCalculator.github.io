 

// timerDays('#header_hours', 'hours', 'one')
// timerDays('#header_minutes', 'minutes', 'one')
// timerDays('#header_seconds', 'seconds', 'one')

timerDays('.report_days', 'day', 'two')
timerDays('.report_hours', 'hours', 'two')
timerDays('.report_minutes', 'minutes', 'two')

function timerDays(classContainer,type, dateFinish) {

// Берём элемент для вывода таймера

    let timer_show = document.querySelector(classContainer);



    // Функция для вычисления разности времени
    function diffSubtract(date1, date2) {
        return date2 - date1;
    }
     
    // Массив данных о времени

    let end_date

    if (dateFinish === 'one') {
        end_date = {
            "full_year": "2021",
            "month": "06",
            "day": "12",
            "hours": "17",
            "minutes": "00",
            "seconds": "00"
        } 
    }

    if (dateFinish === 'two') {
        end_date = {
            "full_year": "2021",
            "month": "06",
            "day": "12",
            "hours": "17",
            "minutes": "00",
            "seconds": "00"
        } 
    }


    
     
    // Строка для вывода времени
    let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;



    // Запуск интервала таймера
    timer = setInterval(function () {
        // Получение времени сейчас
        let now = new Date();
        // Получение заданного времени
        let date = new Date(end_date_str);
        // Вычисление разницы времени 
        let ms_left = diffSubtract(now, date);
        // Если разница времени меньше или равна нулю 
        if (ms_left <= 0) { // То
            // Выключаем интервал
            clearInterval(timer);
            // Выводим сообщение об окончание
            // alert("Время закончилось");
        } else { // Иначе
            // Получаем время зависимую от разницы
            let res = new Date(ms_left);
            // Делаем строку для вывода
            // let str_timer = `${res.getUTCFullYear() - 1970}.${res.getUTCMonth()}.${res.getUTCDate() - 1} ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
             let str_timer

             if (type === 'year') {
                str_timer = res.getUTCFullYear() - 1970
             }
            
             if (type === 'month') {
                str_timer = res.getUTCMonth()
             }
             if (type === 'day') {
                str_timer = res.getUTCDate() - 1
             }
             if (type === 'hours') {
                str_timer = res.getUTCHours()
             }
             if (type === 'minutes') {
                str_timer = res.getUTCMinutes()
             }
             if (type === 'seconds') {
                str_timer = res.getUTCSeconds()
             }

             // res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;

           
            // Выводим время
            timer_show.innerHTML = str_timer;
        }
    }, 1000)



}  