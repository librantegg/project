'use strict';
// touchstart касание элта
// touchmove если при касании начинается двигаться то при каждом движении
// touchend при отрывании пальца
// touchenter при наскальзывание на элемент при ведении пальца
// touchleave палец при скольэении ушел за пределы елта
// touchcancel когда точка соприкосновения больше не регистрируетс( прим в в браузере)


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches[0].pageX);
    });
});


// touches
// targetTouches
// changedTouches