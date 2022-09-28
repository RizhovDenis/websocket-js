function createDom(currencies, content, idx) {
    const main = document.querySelector('main');
    let title = document.createElement('h2');
    title.textContent = content;
    let container = document.createElement('section');
    container.classList.add('container');
    for (let i = 0; i < currencies.length; i++) {
        let article = document.createElement('div');
        article.classList.add('article');
        let coin = document.createElement('div');
        coin.classList.add('coin');
        coin.classList.add(idx);
        coin.textContent = currencies[i];
        let value = document.createElement('div');
        value.classList.add('value-currency');
        value.classList.add(idx);
        value.textContent = 'NaN';
        article.appendChild(coin);
        article.appendChild(value);
        container.appendChild(article);
    }
    main.appendChild(title);
    main.appendChild(container);
}

createDom(socket_currencies, "WebSocket", "websocket");
createDom(currencies, "Ajax", "ajax");