function changeCurrencies(value, el) {
    value.textContent = Math.ceil(el['price'] * 100) / 100
}


async function ResponseHandler(query_params, api_key, currencies) {
    const result = await fetch(`https://api.twelvedata.com/price?symbol=${query_params}&apikey=${api_key}`)
    const data = await result.json()
    const prices = Object.values(data)
    const coins = document.querySelectorAll('.article .coin.ajax')
    const values = document.querySelectorAll('.article .value-currency.ajax')
    prices.forEach((el, idx, arr) => changeCurrencies(values[idx], el))
}


document.addEventListener('DOMContentLoaded', () => {
    ResponseHandler(query_params, api_key, currencies)
})
