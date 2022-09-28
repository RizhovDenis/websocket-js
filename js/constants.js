
// for ajax
const currencies = ['BTC/RUB', 'USD/CNY', 'EUR/CNY', 'EUR/RUB', 'USD/RUB', 'CNY/RUB']
const api_key = 'ca5c1b47eee34178b7cfdb3c749ecac4'
const query_params = currencies.join(',')
const number_currencies = currencies.length


// for web socket 
const socket_currencies = ['EUR/USD', 'USD/JPY', 'ETH/BTC', 'BTC/USD']
const socket_symbols = socket_currencies.join(',')
const number_socketCurrencies = socket_currencies.length

const socket_params = {
    "action": "subscribe",
    "params": { "symbols": socket_symbols }
}
const json_params = JSON.stringify(socket_params)