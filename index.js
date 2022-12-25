const articles = [{
        title: 'Title 1',
        description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
        content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
    },
    {
        title: 'Title 2',
        description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
        content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
    },
    {
        title: 'Title 3',
        description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
        content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
    },
    {
        title: 'Title 4',
        description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
        content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
    }
];

const saveStorage = (param1) => {
    localStorage.setItem('history', JSON.stringify(param1));
};


const loadStorage = () => {
    let history = localStorage.getItem('history') || '';
    return JSON.parse(history);
};

window.addEventListener('load', () => {
    articles.forEach(article => {
        const a = document.createElement('article');

        const title = document.createElement('h5');
        title.innerText = article.title;
        a.appendChild(title);

        const description = document.createElement('span');
        description.innerText = article.description;
        a.appendChild(description);

        const content = document.createElement('span');
        content.innerText = article.content;
        a.appendChild(content);

        const container = document.getElementById('container');
        container.appendChild(a);
    });
});

function Create_article() {
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let content = document.getElementById('content');
    let articl = document.createElement('article');
    articl.className = 'myArticle';

    let h5 = document.createElement('h5');
    h5.innerText = title.value;
    articl.appendChild(h5);

    let span = document.createElement('p');
    span.innerText = description.value;
    articl.appendChild(span);

    let span2 = document.createElement('p');
    span2.innerText = content.value;
    articl.appendChild(span2);

    let container = document.getElementById('container');
    container.appendChild(articl);

    saveStorage(container.innerHTML);

    articl.addEventListener('click', function () {
        articl.remove();
        saveStorage(container.innerHTML);
    })
}

window.onload = function (e) {

    let container = document.getElementById('container');
    container.innerHTML = loadStorage();
    setlistener_click();
}

function setlistener_click() {
    let articles2 = container.getElementsByClassName('myArticle');
    for (let i = 0; i < articles2.length; i++) {
        articles2[i].addEventListener('click', function () {
            articles2[i].remove();
            saveStorage(container.innerHTML);
        })
    }
}