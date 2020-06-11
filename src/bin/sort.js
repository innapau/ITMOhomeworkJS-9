let books = [{
    img: 'horde1.jpg',
    title: 'World of Warcraft: Рождение Орды',
    art: 'CGW-001',
    author: 'Кристи Голден',
    desription: 'Хотя молодой вождь Тралл и покончил с проклятием демона, которое многие поколения оскверняло его народ, орки все еще пытаются побороть грехи своего кровавого прошлого. Будучи неистовой Ордой, они провели несколько разрушительных войн со своим извечным врагом — Альянсом. Ярость и кровожадность, заставлявшие орков уничтожать все на своем пути, почти полностью поглотили их.'
}, {
    img: 'horde2.jpg',
    title: 'World of Warcraft: Последний Страж',
    art: 'GGW-001',
    author: 'Джефф Грабб',
    desription: 'В окутанном туманом прошлом, задолго до времен, описанных в первых летописях, существовал мир, зовущийся Азеротом. Всевозможные волшебные существа делили эти земли с племенами людей, и повсюду царил мир. Но однажды ужасные демоны Пылающего Легиона вместе со своим губительным повелителем Саргерасом, темным богом магии хаоса, вторглись в Азерот. Под влиянием сил зла, драконы, дворфы, эльфы, гоблины, люди и орки вступили в борьбу за власть над разрозненными королевствами.'
}, {
    img: 'horde3.jpg',
    title: 'World of Warcraft: Повелитель кланов',
    art: 'CGW-002',
    author: 'Кристи Голден',
    desription: 'В окутанном туманом прошлом мир, зовущийся Азеротом, изобиловал всевозможными удивительными созданиями. Загадочные эльфы и выносливые дворфы делили эти земли с племенами людей, и повсюду царили мир и гармония, но прибытие демонической армии, известной как Пылающий Легион, навсегда лишило Азерот покоя. Под влиянием сил зла орки, драконы, гоблины и тролли вступили в борьбу за власть над разрозненными королевствами. Раб. Гладиатор. Шаман. Военный вождь. Таинственный орк по имени Тралл был каждым из них. Взращенный с младенчества жестокими людьми, желающими превратить его в свою идеальную пешку, со свирепостью в сердце и перенятой от своих хозяев хитростью он идет навстречу судьбе, которую только начинает понимать: порвать рабские цепи и заново открыть древние традиции своего народа. Пришла пора поведать вам историю его бурной жизни — сагу о чести, ненависти и надежде...'
}, {
    img: 'horde4.jpg',
    title: 'World of Warcraft. Иллидан',
    art: 'WKW-001',
    author: 'Уильям Кинг',
    desription: 'Иллидан Ярость Бури. Великий чародей. Великий воин. Великий предатель. Десять тысяч лет, проведенных в тюрьме, когда лишь ненависть и жажда мести позволяют сохранить рассудок… И позволяют ли? Долгожданная свобода. Новый мир, новая армия, новые планы. Еще более амбициозные и непонятные для всех прочих. Что это — жажда реванша или стремление к безграничной власти? И какова будет цена победы? Ведь все больше врагов стягивают кольцо вокруг владыки Запределья, а от союзников в любой момент можно ждать удара в спину. Слишком многие хотят видеть Иллидана в цепях… или в могиле!'
}, ];


function tableBooks(arr) {
    let tagBooks = document.getElementById('books');
    let table = document.createElement('table');
    table.classList.add('table');
    let tr = document.createElement('tr');

    for(let prop in arr[0]) {
        let th = document.createElement('th');
        th.classList.add('table-cell');
        if (prop === 'img') {
            th.innerHTML = '<h4>Изображение</h4>';
            th.dataset.index = 1;
            tr.appendChild(th);
        } else if (prop === 'title') {
            th.innerHTML = '<h4>Название</h4>';
            th.dataset.index = 2;
            tr.appendChild(th);
        } else if (prop === 'art') {
            th.innerHTML = '<h4>Артикул</h4>';
            th.dataset.index = 3;
            tr.appendChild(th);
        } else if (prop === 'author') {
            th.innerHTML = '<h4>Автор</h4>';
            th.dataset.index = 4;
            tr.appendChild(th);
        } else if (prop === 'desription') {
            th.innerHTML = '<h4>Аннотация</h4>';
            th.dataset.index = 5;
            tr.appendChild(th);
        }
        table.appendChild(tr);
        tr.setAttribute('id', 'headers');
    }

    for (let i = 0; i < arr.length; i++) {
        tr = document.createElement('tr');

        for (let key in arr[i]) {
            let td = document.createElement('td');
            td.classList.add('table-cell');
            if (key == 'img') {
                let image = document.createElement('img');
                image.setAttribute('src', '../img/books/' + arr[i][key]);
                image.style.maxWidth = '120px';
                td.appendChild(image);
                tr.appendChild(td);
            } else {
                td.innerHTML = arr[i][key];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    tagBooks.appendChild(table);
};

tableBooks(books);

function sortTable(arr, dataIndex) {
    let resArr = [];
    if (dataIndex == 1) {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let b = arr[i + 1];
            resArr =arr.sort((a, b) => a.img.localeCompare(b.img));
        }
    } else if (dataIndex == 2) {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let b = arr[i + 1];
            resArr = arr.sort((a, b) => a.title.localeCompare(b.title));
        }
    } else if (dataIndex == 3) {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let b = arr[i + 1];
            resArr = arr.sort((a, b) => a.art.localeCompare(b.art));
        }
    } else if (dataIndex == 4) {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let b = arr[i + 1];
            resArr = arr.sort((a, b) => a.author.localeCompare(b.author));
        }
    } else if (dataIndex == 5) {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let b = arr[i + 1];
            resArr = arr.sort((a, b) => a.desription.localeCompare(b.desription));
        }
    }
    return resArr;
}

var headers = document.getElementById('headers');
headers.addEventListener('click', run);

function run(e) {
    let tagBooks = document.getElementById('books');
    let element = e.target;
    let value = element.dataset.index;
    let res = [];
    if (element.tagName === 'TH') {
        res = sortTable(books, value);
        tagBooks.innerHTML = '';
        return tableBooks(res);
    } else if (element.parentNode.tagName === 'TH') {
        value = element.parentNode.dataset.index;
        res = sortTable(books, value);
        tagBooks.innerHTML = '';
        return tableBooks(res);
    }
}
