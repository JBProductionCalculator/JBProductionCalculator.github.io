//изменяется в файле addToBlank.js .важная переменная для подсчета количестав всех добавленых товаров во всех таблицах и добавления уникальных data
// элементов для товаров чтобы их можно было удалять с doc таблицы
// let allAddedProduct = 0


// Используется в : Рулонные шторы, Руллоные шторы день-ночь
// функция добаления стоимости к цвету
function selectedColorSystem(type, colorInputs, parentSection) {
	let price

	colorInputs.forEach(function(radio){
		if (radio.checked && radio.value == 'Кор.') {
			if (type == 'COMPACT' || type == 'ФАЛШ ШТОРЫ' || type == 'MINI' || type == 'STANDART' ) {

				if (parentSection == "#roller_curtains_day_night") {
					price  = 2
				}else{
					console.log(1)
					price = 1
				}

			}else if (type == 'MAXIMUS') {
				price = 0

			}else if (type == 'UNI Плоские Направл.' ){

				if (parentSection == "#roller_curtains_day_night") {
					price  = 3
				}else{
					price = 2

				}

			}else if ( type == 'UNI П-обр Направл.') {

				if (parentSection == "#roller_curtains_day_night") {
					price  = 4
				}else{
					price =  3
				}

			}else{
				price = 0
			}
		}else{
			price = 0
		}
	})

	return price
}

// Используется в : Рулонные шторы, Руллоные шторы день-ночь
// появление раздела выбра размера : СТД иди РГ для определенных типов ткани
function viewSizeSystem(type,sizes, parentSection){
	let sizeParentBlock = sizes[0].closest(parentSection+' .sizeSystem')
		if (type == 'UNI Плоские Направл.') {
			sizeParentBlock.classList.add('none')
		}else{
			sizeParentBlock.classList.remove('none')
		}
	
}

// Используется в : Рулонные шторы, Руллоные шторы день-ночьы И ГОТОВЫЕ
// показывает систему фиксации в нужных местах и возвращает цену
function selectedFixationSystem(type, fixationSystemInputs, parentSection){
	let price = 0
	let fixationSystemParentBlock = fixationSystemInputs[0].closest('.fixationSystem')

	if (type == 'ФАЛШ ШТОРЫ'  || type == 'UNI Плоские Направл.' || type == 'UNI П-обр Направл.') {
		fixationSystemParentBlock.classList.add('none')

	}else{
		fixationSystemParentBlock.classList.remove('none')
	

		

	    fixationSystemInputs.forEach(function(radio){
	    	if (type == 'COMPACT' || type == 'MINI' || type == 'STANDART') {
              	if (radio.value == 'Направляющая струна' ) {	              			
              		radio.value = 'Направляющая леска'	           
					radio.parentNode.querySelector('span').textContent = 'Направляющая леска'	            
              	}	              
	    	}else{

	    		if (radio.value == 'Направляющая леска') {	
              		radio.value = 'Направляющая струна'	           
					radio.parentNode.querySelector('span').textContent = ' Направляющая струна'	            
              	}	
	    	}


	            if(radio.checked){
	            	// первая таблица
	                if (parentSection == "#roller_curtains") {        

	                    if (radio.value == 'Магнитная'){
	                        if (type == 'COMPACT' || type == 'MINI' || type == 'STANDART' || type == 'MAXIMUS') {
	                             price = 0.9     
	                        }

	                    }
	                    if (radio.value == 'Направляющая струна' || radio.value == 'Направляющая леска') {
	                        if (type == 'COMPACT' || type == 'MINI' || type == 'STANDART') {
	                            price = 0.9                        
	                        } if(type == 'MAXIMUS' ){
	                             price = 2.5     
	                        } 

	                    }

	                }
	            	// вторая таблица день-ночь
	                if (parentSection == "#roller_curtains_day_night") {        

	                    if (radio.value == 'Магнитная'){
	                        if (type == 'COMPACT' || type == 'MINI' || type == 'STANDART' || type == 'MAXIMUS') {
	                              price = 0.9     
	                        }

	                    }
	                    if (radio.value == 'Направляющая струна'  || radio.value == 'Направляющая леска') {
	                        if (type == 'COMPACT' || type == 'MINI' || type == 'STANDART') {
	                             price = 1.2                      
	                        }if(type == 'MAXIMUS' ){
	                           price = 3.0 
	                        }   

	                    }


	                }

	                if (parentSection == "#roller_curtains_ready") {

	                	if (radio.value == 'Магнитная'){
	                             price = 0.9     

	                    }
	                    if (radio.value == 'Направляющая струна') {	                 	
	                             price = 2.5     

	                    }
	                }

	            }

	        })

	}

	
	return price

}


// Используется в : Рулонные шторы, Руллоные шторы день-ночь, Готовые рулонные шторы
// показывает Груз цепи при выборе нужных типов штор
function selectedChainLoad(type, chainLoad){
	let price = 0
	let chainLoadParentBlock =  chainLoad[0].closest('.chainLoad')

		if (type == 'ФАЛШ ШТОРЫ' ) {
			chainLoadParentBlock.classList.add('none')
			price = 0
		}else{
			chainLoadParentBlock.classList.remove('none')
			
			chainLoad.forEach(function(radio){
				if(radio.checked && radio.value == 'Груз цепи'){
					price = 0.2					
				}else{
					price = 0
				}
			})	
		}	
		
	return price
}


// Используется в : Рулонные шторы, Руллоные шторы день-ночь, Готовые рулонные шторы
// показывает Фиксация цепи при выборе нужных типов штор
function selectedChainFixing(type, chainLoad){
	let price = 0
	let chainFixingParentBlock =  chainLoad[0].closest('.chainFixing')

		if (type == 'ФАЛШ ШТОРЫ' || type == 'STANDART' || type == 'MAXIMUS'   ) {
			chainFixingParentBlock.classList.add('none')
			price = 0

		}else{
			chainFixingParentBlock.classList.remove('none')

			chainLoad.forEach(function(radio){
				if(radio.checked && radio.value == 'Фикс. цепи'){
					price = 0.2					
				}else{
					price = 0
				}
			})	
		}

	return price
}

// Используется в : Рулонные шторы, Руллоные шторы день-ночь, Готовые рулонные шторы
// показывает Фиксацич цепи универсальная при выборе нужных типов штор
function selectedChainFixingUniversal(type, chainLoad){
	let price = 0
	let chainFixingUniversaParentBlock =  chainLoad[0].closest('.chainFixingUniversal')

		if ( type == 'COMPACT' || type == 'ФАЛШ ШТОРЫ' || type == 'MINI' || type == 'UNI Плоские Направл.' || type == 'UNI П-обр Направл.'   ) {
			chainFixingUniversaParentBlock.classList.add('none')

		}else{
			chainFixingUniversaParentBlock.classList.remove('none')

			chainLoad.forEach(function(radio){
				if(radio.checked && radio.value == 'Фикс. цепи универс.'){
					price = 0.2					
				}else{
					price = 0
				}
			})	
		}

	return price
}


// Используется в : Рулонные шторы, Руллоные шторы день-ночь
// Функция 1 Сособ Управления .для  STANDARD другие расценки
function viewControlMethod(type, boxControlMethod, parentSection, thisIsSparta){
	let controlMethod = document.querySelector(parentSection+' .controlMethod')
	let controlMethodChanel = document.querySelector(parentSection+' .controlMethodChanel')
	let quantityRemotes = document.querySelector(parentSection+' .quantityRemotes')
	let chargingRemotes = document.querySelector(parentSection+' .chargingRemotes')

	// let textControlMethodChanel = document.querySelector(parentSection+' .textControlMethodChanel')


	if (type == 'MINI' || type == 'UNI Плоские Направл.'|| type == 'UNI П-обр Направл.') {
		boxControlMethod.classList.remove('none')
		// priceControlMethodChanel(24,26,30)
		viewChanelControlMethod(controlMethod,controlMethodChanel, quantityRemotes,chargingRemotes , parentSection, thisIsSparta)

	}else if(type == 'STANDART'){
		boxControlMethod.classList.remove('none')
		viewChanelControlMethod(controlMethod,controlMethodChanel, quantityRemotes,chargingRemotes ,parentSection, thisIsSparta)

	}else{
		boxControlMethod.classList.add('none')
		let proxy  = 0
	}
	
}

// Используется в : Рулонные шторы, Руллоные шторы день-ночь
// Функция 2 Сособ Управления
function viewChanelControlMethod(controlMethod, chanels, remotes, charging ,parent,thisIsSparta){
	if (thisIsSparta == undefined) {
		$(parent +' .controlMethod option:eq(0)').prop('selected',true)
		$(parent +' .controlMethodChanel option:eq(0)').prop('selected',true)
		chanels.classList.add('none')
	}
	

	controlMethod.addEventListener('change', function(){
		if(controlMethod.value == 'Мот.'){
			chanels.classList.remove('none')
			remotes.classList.remove('none')
			charging.classList.remove('none')
		}else{
			chanels.classList.add('none')
			remotes.classList.add('none')
			charging.classList.add('none')

		}
	})
	
}


// Используется в : Рулонные шторы, Руллоные шторы день-ночь
//// Функция 3 Сособ Управления .эта функция в вызывается прямо в каклькуляторе. она отдат цену
function priceControlMethod(type, boxControlMethod){
	let controlMethod = boxControlMethod.querySelector('.controlMethod ')
	let controlMethodChanel = boxControlMethod.querySelector('.controlMethodChanel select')
	let quantityRemotes = boxControlMethod.querySelector(' .quantityRemotes select')
	let chargingRemotes = boxControlMethod.querySelector(' .chargingRemotes select')

	let motorPrice = 85
	let price = 0

	if (type == 'MINI' || type == 'UNI Плоские Направл.'|| type == 'UNI П-обр Направл.') {
		// price += chanelsPrices(24,26,30)
		// price += quantityRemotesPrices(2)
		// price += charginPrices(2)

		price =+ chanelsPrices(0,0,0)
		price += quantityRemotesPrices(1)
		price += charginPrices(1)

	}else if(type == 'STANDART'){
		// price += chanelsPrices(50,60,70)
		// price += quantityRemotesPrices(2)
		// price += charginPrices(2)

		price = chanelsPrices(0,0,0)
		price += quantityRemotesPrices(1)
		price += charginPrices(1)

	}else{
		price = 0
	}


	function chanelsPrices(fistPice, twoPrice, fivePrice){
		if(controlMethod.value == 'Мот.'){

			if (controlMethodChanel.value == '1 кан.') {
				return motorPrice + fistPice
			}

			if (controlMethodChanel.value == '2 кан.') {
				return motorPrice +  twoPrice
			}

			if (controlMethodChanel.value == '5 кан.') {
				return motorPrice + fivePrice
			}



		}else{

			return 0
		}
	}


	// let quantityRemotes = document.querySelector(parentSection+' .quantityRemotes')
	// let chargingRemotes = document.querySelector(parentSection+' .chargingRemotes')
	function quantityRemotesPrices(priceOneJoke){
		let amount = quantityRemotes.value
		if(controlMethod.value == 'Мот.'){
			return priceOneJoke * Number(amount)

		}else{
			return 0
		}
	}

	function charginPrices(priceOneJoke){
		let amount = chargingRemotes.value
		if(controlMethod.value == 'Мот.' && amount != 'Нет'){
			return priceOneJoke * Number(amount)

		}else{
			return 0
		}
	}



	return price


}	



// Используется в : Рулонные шторы, Руллоные шторы день-ночь
// добавление второй ширины для UNI Плоские Направл.ю
function viewEaxtraWidth(type,parentSection){
	let mainWidthText = document.querySelector(parentSection+' .main_width span')
	let glassWidth = document.querySelector(parentSection+' .glass_width')


	if (type == "UNI Плоские Направл.") {
		glassWidth.classList.remove('none')
		mainWidthText.textContent = 'Ширина ребра, мм'
	}else{
		glassWidth.classList.add('none')
		mainWidthText.textContent = 'Ширина, мм'
	}

}

// Используется в : Рулонные шторы, Руллоные шторы день-ночь
//функуия 1 Доп. скотч . показ дополнительного скотча для типа UNI Плоские Направл.
function viewAdditionalScotchTape(type, parentSection){
	let additionalScotchTape = document.querySelector(parentSection + ' .additionalScotchTape')

	if (type == "UNI Плоские Направл.") {
		additionalScotchTape.classList.remove('none')
	}else{
		additionalScotchTape.classList.add('none')
	}

}

// Используется в : Рулонные шторы, Руллоные шторы день-ночь
//функуия 2 Доп сктч . эта функция в вызывается прямо в каклькуляторе. она отдат цену
function priceAdditionalScotchTape(type, inputs, height){
	
	let price = 0
	if (type == "UNI Плоские Направл.") {
		inputs.forEach(function(radio){
			if (radio.checked && radio.value == 'Доп. скотч') {
				let converterToMeters = Number(height.value) / 1000
				price = Math.ceil(converterToMeters) * 1.6
			}
		})
		
	}else{
		price = 0
	}
	return price
}
	


// Используется в : Горизонтальные жалюзи СТАНДАРТ
// Пластиковые фикстаторы
function selectedPlasticRetainer(plasticRetainer,parentSection ){
	let price = 0
	if(parentSection == "#horizontal_louver_standard" ){
		plasticRetainer.forEach(function(radio){
			if (radio.checked){
				if(radio.value == 'Пласт. Фиксатор') {
					price = 0.3
				}
				if(radio.value == 'Напр. струна') {
					price = 0.6
				}
			} 
		})
	}

	return price
}


// Тормозной механизм
function selectedBrakeMechanism(brakeMechanism,parentSection ){
	let price = 0
	if(parentSection == "#horizontal_louver_venus" ){
		brakeMechanism.forEach(function(radio){
			if (radio.checked){
				if(radio.value == 'Тормозн. механ.') {
					price = 0.6
				}
			
			} 
		})
	}

	return price
}


// Используется в : Горизонтальные жалюзи СТАНДАРТ
//функция вызывается в калькуляторе. Добавление направляющей струны
function selectedGuideString(area,guideString, parentSection){
	let price = 0
	if(parentSection == '#horizontal_louver_standard'){
		guideString.forEach(function(radio){
			if (radio.checked && radio.value == 'Напр. струна') {
				price = Math.ceil(area) * 2.5
			}
		})
	}

	return price
}



function selectedFastening(width,fastening,amountFastening,idCalculate){
	let price = 0


	
	fastening.forEach(function(radio){
		// console.log(radio)
		if (radio.checked) {
			if (radio.value=='Потолочные') {
				price += 0
				price += priceAmountFastening(amountFastening.value, 1)
			}
			if (radio.value=='Стеновые') {
				price += addMount(width, 0.3)
				price += priceAmountFastening(amountFastening.value, 1)
				
			}

			if (radio.value == 'Стеновые с удленителем') {
				price += addMount(width, 0.6)
				price += priceAmountFastening(amountFastening.value, 1)
				
			}
		}
		

	})
	// console.log(price)
	return price


	function addMount(width,oneFastening){
		let priceFastening = 0

		if (width < 1700 ) {
			priceFastening = oneFastening * 2
		}else if(width >= 1700 && width < 2500){
			priceFastening = oneFastening * 3
		}else if(width >= 2500){
			priceFastening = oneFastening * 4
		}

		return priceFastening
	}

	function priceAmountFastening(amount, priceOneJoke){
		return Number(amount) * priceOneJoke
	}	
}




// размер в москитных сетках. так добаляется стоимость +6 сантиметров ширины и высоты
function selectedMosquitoSize(mosquitoSize ){
	let price
	mosquitoSize.forEach(function(radio){
		if (radio.checked) {
			if (radio.value == 'Сет. прой.') {
				price = 0
			}

			if (radio.value == 'Габ. разм.'){
				price = 0
			}
		}
		
	})

	return price
}

//Нижний уголок в москитных сетках
function selectedBottomCorner(width, bottomCorner){
	let price = 0

	bottomCorner.forEach(function(radio){
		if (radio.checked) {
			if (radio.value != 'Без уголока') {		
				let newWidth = Math.ceil(Number(width) /1000)
				price = newWidth * 2.5
			}
		}
	})
	
	return price
}



// функция создания тегов . используется во всех калькуляторах
function createTag(tagName,text){
	let tag = document.createElement(tagName)
	tag.textContent = text

	return tag
}



// функция которая удаляет из экрана комплектующие если выбран пункт ТКАНЬ ОТДЕЛЬНО
function clothSeparatelyShow(type,thisWindow){

	let configurations = thisWindow.querySelector('.configurations')

	if (type == "ТКАНЬ ОТДЕЛЬНО") {
		configurations.classList.add('none')
	}else{
		configurations.classList.remove('none')
	}
}





// функци для вертикальнх жалюзей. Добавляет цену за ламелии при выборе БЕЗ ТКАНИ
function calculatingPriceOfLamellas(type,price,lamellas, height){
	let finalPrice = 0
	let boxLamellas = lamellas.parentElement
	if (type == "ТКАНЬ ОТДЕЛЬНО") {
		boxLamellas.classList.remove('none')
		let sizeOneLamella = 3
		let overallWidth = sizeOneLamella * lamellas.value
		let square = overallWidth * height

		finalPrice = (square * price) - (overallWidth * 3)

		return finalPrice

	}else{
		boxLamellas.classList.add('none')

	}

	return finalPrice
	
}





function colorSystemCmpontents(data,productName,colorSystem){
	let colorSystemBox = colorSystem[0].parentElement.parentElement

	data.forEach(function(product){
		if (product.name === productName ) {
			if(product.color[0] === true){
				colorSystemBox.classList.remove('none')
				colorSystem[0].value = 'Бел.'
				colorSystem[1].value = 'Кор.'
			}else{
				colorSystemBox.classList.add('none')
				colorSystem.forEach(item => item.value = '')
			}
		}
	})

}