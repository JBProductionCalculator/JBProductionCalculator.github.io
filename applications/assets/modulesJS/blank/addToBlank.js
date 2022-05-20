
let countArrayElementOrderBlank = 0
// let numberInArrayOrderBlank = 0
function addToBlankFun(parentBlock, allSelectArray ,selectType) {

	let arrayParameters = [parentBlock, allSelectArray[0], allSelectArray[1]]


	// allAddedProduct++

	// console.log(parentBlock)

	let price = parentBlock.querySelector("#price").textContent

	let idParent = parentBlock.parentNode.id
	let viewWebnBlank = parentBlock.parentNode.querySelector('[data-viewInBlank]').dataset.viewinblank
	let widht = parentBlock.querySelector("#width")
	let widhtBox = parentBlock.querySelector("#widthBox select")
 	let height = parentBlock.querySelector("#height")
    let productColor = parentBlock.querySelector('#'+allSelectArray[0]).value
    let productSystem = parentBlock.querySelector('#'+allSelectArray[1]).value

	let valueColorNumber 
	let porductColorNumber

	if (allSelectArray[2] != undefined) {
		valueColorNumber = parentBlock.querySelector('#'+allSelectArray[2]).value
	}
	
    if (allSelectArray[2] != undefined && valueColorNumber != "Без номеров") {
  		porductColorNumber = parentBlock.querySelector('#'+allSelectArray[2]).value
    }



    // let addRemark = parentBlock.querySelector('.add_remark textarea').value

 	
 	//рулонные шторы
 	let colorSystem =  parentBlock.querySelectorAll("input[name='colorSystem']")
 	let controlType = parentBlock.querySelectorAll("input[name='controlType']")
 	let fixationSystem = parentBlock.querySelectorAll("input[name='fixationSystem']")
 	let sizeSystem = parentBlock.querySelectorAll("input[name='sizeSystem']")
 	let chainLoad = parentBlock.querySelectorAll("input[name='chainLoad']")
 	let chainFixing = parentBlock.querySelectorAll("input[name='chainFixing']")
 	let chainFixingUniversal = parentBlock.querySelectorAll("input[name='chainFixingUniversal']")
 	let additionalScotchTape = parentBlock.querySelectorAll("input[name='additionalScotchTape']")
 	let glassWidth = parentBlock.querySelector(".glass_width input")

 	// Способ управления
 	let controlMethod = parentBlock.querySelector('.controlMethod')
 	let controlMethodChanel = parentBlock.querySelector('.controlMethodChanel select')
 	let quantityRemotes = parentBlock.querySelector('.quantityRemotes select')
	let chargingRemotes = parentBlock.querySelector('.chargingRemotes select')


 	// горизонтальные жалюзи 
 	let plasticRetainer = parentBlock.querySelectorAll("input[name='plasticRetainer']")
 	let guideString = parentBlock.querySelectorAll("input[name='guideString']")
 	let brakeMechanism = parentBlock.querySelectorAll("input[name='brakeMechanism']")
    let glazingBeadDepth = parentBlock.querySelector("input#glazingBeadDepth")



 	// // ветрикальные жалюзи
 	let fasteningSelected = parentBlock.querySelectorAll("input[name='fastening_selected']")
 	let amountFastening = parentBlock.querySelector(".amountFastening")


 	// москитные сетки
 	let mosquitoSize = parentBlock.querySelectorAll("input[name='mosquitoSize']")
 	bottomCorner = parentBlock.querySelectorAll("input[name='bottomCorner']")


 	let allRadioElements = [colorSystem,controlType,fixationSystem,sizeSystem,chainLoad,chainFixing,chainFixingUniversal,plasticRetainer,guideString,fasteningSelected]





 	let oneItem
 	 if(productSystem == 'COMPACT'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor} ${porductColorNumber}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,
	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'price' : price,
	 		// 'remark' : addRemark,
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 		
	 	}

 	}else if(productSystem == 'ФАЛШ ШТОРЫ'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor} `,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'price' : price,
	 		// 'remark' : addRemark,
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}
 	}else if(productSystem == 'MINI'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		// 'controlMethod' : addToBlankForEach(controlMethod,'Цепь'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value , quantityRemotes.value ,chargingRemotes.value),
	 		'price' : price,	
	 		// 'remark' : addRemark,
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if(productSystem == 'STANDART'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,


	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value, quantityRemotes.value ,chargingRemotes.value),
	 		
	 		'price' : price,	 	
	 		 		
			// 'remark' : addRemark,
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,	
	 	}

 	}else if (productSystem == "MAXIMUS") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} 'Бел.' ${productColor}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 	
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : 'Бел.',		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),

	 		'price' : price,	 
			// 'remark' : addRemark,		
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "UNI Плоскю Направл") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor} `,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : `${widht.value} / ${glassWidth.value}`,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'additionalScotchTape' : addToBlankForEach(additionalScotchTape,'Без скотча'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value, quantityRemotes.value ,chargingRemotes.value),
	 		
	 		'price' : price,
			// 'remark' : addRemark,			 		
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "UNI П-обрю Направл") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 
	 		"porductColorNumber" : porductColorNumber,

	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value, quantityRemotes.value ,chargingRemotes.value),
	 		'price' : price,
			// 'remark' : addRemark,			 		
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "ТКАНЬ ОТДЕЛЬНО") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		// "productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,
	 		// 'price' : price,	
	 		// 'remark' : addRemark, 		
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productColor == "ТКАНЬ ОТДЕЛЬНО") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"productSystem" : productSystem,	 		
	 		// "productColor" : productColor,	 		
	 		"verticalCalculatorType" : verticalCalculatorTypeFun(idParent),
	 		"width" : widht.value,
	 		"height" : height.value,
	 		"numberRepetitons" : 1,
	 				
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else{
 		oneItem = {
	 		"idParent" : idParent,
	 		"viewWebnBlank" : viewWebnBlank,
	 		"systemAndColor" : `${productSystem} ${addToBlankForEach(colorSystem)} ${productColor}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,
	 		"porductColorNumber" : excludeUndefined(porductColorNumber),
	 		"colorSystem" : addToBlankForEach(colorSystem),	 		
	 		"width" : `${excludeNull(widht)} ${excludeNull(widhtBox)}`,
	 		"height" :`${excludeNull(height)}`,
	 		"numberRepetitons" : 1,
	 		"verticalCalculatorType" : verticalCalculatorTypeFun(idParent),

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),

	 		'plasticRetainer' : addToBlankForEach(plasticRetainer,'Без фиксатора'),
	 		'guideString' : addToBlankForEach(guideString, 'Без струны'),
	 		'fasteningSelected' : `${addToBlankForEach(fasteningSelected)} ${excludeNull(amountFastening,'шт.')}`,
	 		'brakeMechanism' : addToBlankForEach(brakeMechanism, 'Без механизма'),
	 		'glazingBeadDepth' : excludeNull(glazingBeadDepth),

	 		'mosquitoSize' :  `${addToBlankForEach(mosquitoSize)}`,
	 		'bottomCorner' :  addToBlankForEach(bottomCorner, 'Без уголока'),

	 		
	 		'price' : price,
	 		// 'remark' : addRemark,	 		
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
 		}

 	}




 	// console.log(glazingBeadDepth)

 	creatingOrgerBlank(oneItem, arrayParameters)

 	resetRadioElements(allRadioElements,selectType)

 

 	function resetRadioElements(data,selectType){
 		// console.log(selectType)

 		data.forEach(function(arrayRadio){
 			if (arrayRadio.length != 0) {

 				// console.log(arrayRadio[0])
 			}
 		})
 	}


 	function verticalCalculatorTypeFun(virticalId){
 		let verticalNumber
 		if (virticalId == 'new_vertical_127mm') {
 			verticalNumber = 127
 		}

 		if (virticalId == 'new_vertical_89mm') {
 			verticalNumber = 89
 		}


 		return verticalNumber
 	}


 	function addToBlankForEach(data,exception){
 		// console.log(data[0])
		let text
		data.forEach(function(oneRadio){
			if (oneRadio.checked == true ) {
				text = oneRadio.value
			}  	
		})


 		if(text == undefined){
 			return " "

 		}else if(text == exception){
 			return " "	

 		}else{
			return text

 		}
	}


	function choiceControlMethod(method, channel, quantityRemotes ,charging){
		if (method != 'Цепь') {
			if (charging != 'Нет') {
				return `${method} ${channel} ${quantityRemotes}шт. ${charging}шт.`
			}else{
				return `${method} ${channel} ${quantityRemotes}шт. `
			}
			
		}
	}


	function excludeNull(input, twoParam){
		if (input != null) {
			if (twoParam) {
				return input.value + twoParam
			}else{
				return input.value 
			}
			
		}else{
			return ' '
		}
	}



	function excludeUndefined(paran){
		if (paran != undefined) {
			return paran
		}else{
			return ''
		}
	}



}




