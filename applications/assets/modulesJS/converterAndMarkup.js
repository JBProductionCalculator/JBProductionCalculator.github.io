//наценка на товар
function  productMarkup(price, selectMarkup) {
	let percent = price / 100 * Number(selectMarkup) 
	let newPrice = price + percent

	return newPrice
}


	
// функция которая кидает одну и туже кнопку между бланками для того чтобы не вводить постоянно курс вызывается в файле switchTabs.js
function flyingCurrencyConverter(selectedWindow){
	// console.log(selectedWindow);
	
	let displayCurrencyConverter = selectedWindow.querySelector('.currencyConverterContainer')
	let buttonCurrencyConverter = document.querySelector('.flyingCurrencyConverter')

	displayCurrencyConverter.append(buttonCurrencyConverter)

	currencyConverter(selectedWindow)
}
	


// конвертер валюты из долара в гривну. вызывается в функции flyingCurrencyConverter и в файлах калькуляторов при нажатии копок подсчитать
function currencyConverter(selectedWindow, clickInCount){
	let price = selectedWindow.querySelector('#price')
	let exchangeRates = selectedWindow.querySelector('.currencyConverter input')
	let newPriceContainer =  selectedWindow.querySelector('.newConverterPrice')

	
	if (exchangeRates != null) {
		exchangeRates.addEventListener('input',function(){
			let inputText = this.value
			let newPrice = Number(price.textContent) * inputText
			newPriceContainer.innerHTML = newPrice.toFixed(2)
			
			if (newPriceContainer.innerHTML == "NaN") {
				newPriceContainer.innerHTML = "Ввеите число"
			}
			
		})

		if (clickInCount == true) {
			let inputText = exchangeRates.value
			let newPrice = Number(price.textContent) * inputText
			newPriceContainer.innerHTML = newPrice.toFixed(2) 
			
			if (newPriceContainer.innerHTML == "NaN") {
				newPriceContainer.innerHTML = "Ввеите число"
			}
		}
	}
}

