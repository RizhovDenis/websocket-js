function setAnimation(currencyValue, current_values) {
    setTimeout(() => currencyValue.classList.add('transition'), 100)
    currencyValue.classList.add('drop-value')
    currencyValue.textContent = Math.ceil(current_values['price'] * 1000) / 1000
    setTimeout(() => {
        currencyValue.classList.remove('drop-value')
        currencyValue.classList.remove('transition')
    }, 1000)
}


function socketHabdler(api_key, json_params) {
    let socket = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?&apikey=${api_key}`)
    socket.onopen = (m) => socket.send(json_params)
    socket.onmessage = (event) => {
        if (event) {
            const current_values = JSON.parse(event.data)
            const coins = document.querySelectorAll('.article .coin.websocket')
            const values = document.querySelectorAll('.article .value-currency.websocket')
            coins.forEach((el, idx, arr) => {
                if ((el.textContent === current_values['symbol']) && current_values['price']) {
                    setAnimation(values[idx], current_values)
                }
            })
        }
    }
    socket.onmessage()
}


document.addEventListener('DOMContentLoaded', () => {
    socketHabdler(api_key, json_params)
})