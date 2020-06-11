function randomIntGenerator(min, max) {
  let result = Math.floor(Math.random() * Math.floor(max - min + 1) + min);
  return result;
};

function fieldGenerator(n) {
    let presents = ['Машина', 'Телефон', 'Телевизор', '10000р.', 'Путевка', 'Нет приза'];
    let mainContainer = document.querySelector('#present');
    let cellWidth = 600 / n - 40;
    let cells = document.querySelectorAll('present_cell');
    for (let i = 0; i < n * n; i++) {
        let div = document.createElement('div');
        div.style.width = cellWidth  + 'px';
        div.style.height = cellWidth  + 'px';
        div.style.lineHeight = cellWidth + 'px';
        div.classList.add('present_cell');
        let rand = randomIntGenerator(0, presents.length - 1);
        let present = presents[rand];
        if (present === 'Машина') {
            div.innerHTML = 'Открыть';
            div.dataset.present = present;
            div.dataset.index = 1;
            presents.splice([rand], 1);
            rand = randomIntGenerator(0, (presents.length - 1) - 1);
        } else if (present === 'Телефон') {
            div.innerHTML = 'Открыть';
            div.dataset.present = present;
            div.dataset.index = 1;
            presents.splice([rand], 1);
            rand = randomIntGenerator(0, (presents.length - 1) - 1);
        } else if (present === 'Телевизор') {
            div.innerHTML = 'Открыть';
            div.dataset.present = present;
            div.dataset.index = 1;
            presents.splice([rand], 1);
            rand = randomIntGenerator(0, (presents.length - 1) - 1);
        } else if (present === '10000р.') {
            div.innerHTML = 'Открыть';
            div.dataset.present = present;
            div.dataset.index = 1;
            presents.splice([rand], 1);
            rand = randomIntGenerator(0, (presents.length - 1) - 1);
        } else if (present === 'Путевка') {
            div.innerHTML = 'Открыть';
            div.dataset.present = present;
            div.dataset.index = 1;
            presents.splice([rand], 1);
            rand = randomIntGenerator(0, (presents.length - 1) - 1);
        } else {
            div.innerHTML = 'Открыть';
            div.dataset.present = present;
            div.dataset.index = 0;
        }
        mainContainer.appendChild(div);
    }
};

let presentsContainer =  document.querySelector('#present');
let counter = 0;

presentsContainer.addEventListener('click', function(e) {
    let element = e.target;
    if(counter < 3 && element.dataset.index == 1) {
        element.innerHTML = element.dataset.present;
        element.classList.add('win');
        alert(`Поздравляем, Вы выиграли ${element.innerHTML}`);
        return counter = 3;
    } else if(counter < 3 && element.dataset.index == 0) {
        element.innerHTML = element.dataset.present;
        element.classList.add('lose')
        return counter++;
    } else {
        return alert('У вас не осталось попыток или Вы уже выиграли приз');
    }
});

fieldGenerator(5);
