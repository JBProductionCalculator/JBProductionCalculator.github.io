// функции которые используются повсевместно
// открлючение кнопки добавления в бланк
function disableButtonAddToBlank(thisWindow){
	let button = thisWindow.querySelector('#add_to_blank')
	button.setAttribute('disabled', true)
}

// включение кнопки добавления в бланк
function enableButtonAddToBlank(thisWindow){
	let button = thisWindow.querySelector('#add_to_blank')
	button.removeAttribute('disabled')
}

//очистка предупреждений если поля ввода пустые. используется для начального состояния
function clearingWarnings(size, entryField) {
	if (size == '') {
		entryField.textContent = ''
	}
}



//Валидация. проверка на вводи цифр в поля ввода,такие как ширина ,высота и остальные поля.
// функция ставить блок и выводит предупреждение в случае была введена буква или иное число










//дополнительная функция функций орграничителей по ширине и высоте, работет тольок если шрина или выстора в нужном размере или большем
// функция включает и выключает кнопку скачивания бланка
// function whenToEnableDownload(variableSwitches) {
// 	if (variableSwitches == 'work') {
// 		disableButtonAddToBlank(thisWindow)
// 	}else{
// 		enableButtonAddToBlank(thisWindow)
// 	}
// }

let minWidth,minHeight

// функция предупреждения и блокировки при минимальной шинире и только предупреждения при максимальной ширине
function minAndMaxlWidth(size, thisWindow, minSize, maxSize){
	let widthExceeded = thisWindow.querySelector('.widthExceeded')
	
	if (Number(size) < minSize[0]) {
		widthExceeded.textContent = minSize[1]
		disableButtonAddToBlank(thisWindow)
		minWidth = 'work'

	}else{
		if (Number(size) > maxSize[0] ) {
			widthExceeded.textContent = maxSize[1]
			minWidth = 'notWork'

			// whenToEnableDownload(minHeight, thisWindow)
			if (minHeight == 'work') {
				disableButtonAddToBlank(thisWindow)
			}else{
				enableButtonAddToBlank(thisWindow)
			}

		}else{
			widthExceeded.textContent = ' '
			minWidth = 'notWork'	
			
			// whenToEnableDownload(minHeight, thisWindow)
			if (minHeight == 'work') {
				disableButtonAddToBlank(thisWindow)
			}else{
				enableButtonAddToBlank(thisWindow)
			}

		}		
	}

	clearingWarnings(size, widthExceeded)
}



// функция предупреждения и блокировки при минимальной высоте и только предупреждения при максимальной высоте
function minAndMaxHeight(size, thisWindow, minSize, maxSize){
	let heightExceeded = thisWindow.querySelector('.heightExceeded')


	if (Number(size) < minSize[0]) {
		heightExceeded.textContent = minSize[1]
		disableButtonAddToBlank(thisWindow)
		minHeight = 'work'

	}else{
		if (Number(size) > maxSize[0] ) {
			heightExceeded.textContent = maxSize[1]
			minHeight = 'notWork'
			
			// whenToEnableDownload(minWidth,thisWindow)
			if (minWidth == 'work') {
				disableButtonAddToBlank(thisWindow)
			}else{
				enableButtonAddToBlank(thisWindow)
			}
		}else{
			heightExceeded.textContent = ' '
			minHeight = 'notWork'

			// whenToEnableDownload(minWidth,thisWindow)
			if (minWidth == 'work') {
				disableButtonAddToBlank(thisWindow)
			}else{
				enableButtonAddToBlank(thisWindow)
			}
		}		
	}

	clearingWarnings(size, heightExceeded)

}



let minWidthDisMax,minHeightDisMax
//  функция предупреждения и блокировки при минимальной и максимальной ширине
function minAndMaxlWidthDisableMax(size, thisWindow, minSize, maxSize){
	let widthExceeded = thisWindow.querySelector('.widthExceeded')
	

	if (Number(size) < minSize[0]) {
		widthExceeded.textContent = minSize[1]
		disableButtonAddToBlank(thisWindow)
		minWidthDisMax = 'work'

	}else{
		if (Number(size) > maxSize[0] ) {
			widthExceeded.textContent = maxSize[1]
			minWidthDisMax = 'work'	
			
			disableButtonAddToBlank(thisWindow)
		

		}else{
			widthExceeded.textContent = ' '
			minWidthDisMax = 'notWork'	
			
			if (minHeightDisMax == 'work') {
				disableButtonAddToBlank(thisWindow)
			}else{
				enableButtonAddToBlank(thisWindow)
			}

		}		
	}

	clearingWarnings(size, widthExceeded)
}



// функция предупреждения и блокировки при минимальной  минимальной и максимально  высоте
function minAndMaxHeightDisableMax(size, thisWindow, minSize, maxSize){
	let heightExceeded = thisWindow.querySelector('.heightExceeded')


	if (Number(size) < minSize[0]) {
		heightExceeded.textContent = minSize[1]
		disableButtonAddToBlank(thisWindow)
		minHeightDisMax = 'work'

	}else{
		if (Number(size) > maxSize[0] ) {
			heightExceeded.textContent = maxSize[1]
			minHeightDisMax = 'notWork'
			
			disableButtonAddToBlank(thisWindow)
			
		}else{
			heightExceeded.textContent = ' '
			minHeightDisMax = 'notWork'

			if (minWidthDisMax == 'work') {
				disableButtonAddToBlank(thisWindow)
			}else{
				enableButtonAddToBlank(thisWindow)
			}
		}		
	}

	clearingWarnings(size, heightExceeded)

}






// ------------------------------------------------------------
// блоки в руллонных шторах mini, standrt и обе закрытые
function blockMiniStandartCloseSystems(type,width,thisWindow) {
	let widthExceeded = thisWindow.querySelector('.widthExceeded')

	if (type == 'MINI' || type == 'UNI Плоские Направл.' ||type == 'UNI П-обр Направл.') {
		if(Number(width) < 380){
			widthExceeded.textContent = 'Рек. мин. ширина 380мм'
			disableButtonAddToBlank(thisWindow)

		}else{
			widthExceeded.textContent = ' '
			enableButtonAddToBlank(thisWindow)

		}
	
		clearingWarnings(width, widthExceeded)

	}else if (type == 'STANDART' ) {
		if(Number(width) < 450){
			widthExceeded.textContent = 'Рек. мин. ширина 450мм'
			disableButtonAddToBlank(thisWindow)

		}else{
			widthExceeded.textContent = ' '
			enableButtonAddToBlank(thisWindow)

		}

	clearingWarnings(width, widthExceeded)

	}else{
		widthExceeded.textContent = ' '
		enableButtonAddToBlank(thisWindow)
	}
}



//UNI Плоские Направл. если разница в ширине больше 24 выводит предупреждение и ставить блок 
function blockWidthDifference(type,width,widthGlass,thisWindow){
	if (type == 'UNI Плоские Направл.') {
		let wdthDifference = Number(width) - Number(widthGlass)
		let widthExceeded = thisWindow.querySelector('.glassWidthExceeded')

		if (wdthDifference > 24 || wdthDifference < -24) {
			widthExceeded.textContent = 'Разн. в ширн. стек. и ширн. реб. больше 24мм'
			disableButtonAddToBlank(thisWindow)

		}else{
			widthExceeded.textContent = ' '
			enableButtonAddToBlank(thisWindow)

		}

		clearingWarnings(width, widthExceeded)
	}
}

// __________________________________________________________________________________________

// функции ко торые предупреждают о привешение ширины и высоты о для раных цветов
// для разных цветов предуждения в разных размерах
// ограничения берутся из БД

function maxWidthWarning(data,color,type,width,thisWindow){
	let objectMaxWidthWarnig = data.find(prod => prod.name == color).maxWidthWarnig
	let maxWidth = objectMaxWidthWarnig[type]


	let widthExceeded = thisWindow.querySelector('.widthExceeded')
	if (Number(width) > maxWidth) {
		widthExceeded.textContent = `Превышен рекомендуемый размер ${maxWidth}`
	}

}


function maxHeightWarning(data,color,type,height,thisWindow){
	let objectMaxHeightWarnig = data.find(prod => prod.name == color).maxHeightWarnig
	let maxHeight = objectMaxHeightWarnig[type]


	let heightExceeded = thisWindow.querySelector('.heightExceeded')
	if (Number(height) > maxHeight) {
		heightExceeded.textContent = `Превышен рекомендуемый размер ${maxHeight}`
	}


}



