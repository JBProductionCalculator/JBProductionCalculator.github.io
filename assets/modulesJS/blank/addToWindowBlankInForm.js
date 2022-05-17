//функция вызывается в файле creatingOrderBlank.js/ в ней прописан функционал для добавления новых товаров в бланк под каждой таблицей
function addToWindowBlankInForm(products, idTables, idAddBlank ,arrayParam,idButton) {


	// console.log(products, idTables, idAddBlank ,arrayParam,idButton)
	


	addButtonAmoutProduct(products, idButton)

	let buttonAddToBlank = document.querySelector(idTables+" #add_to_blank")

	let screnBlank = document.querySelector(idAddBlank)



	
	let numberRepeatingProduct

	let resultRepeatElement = {};
	deleteRepeatingElement(products)


	let allProduct = screnBlank.querySelectorAll('ul')

	allProduct.forEach(function(prod,index){
		if (index != 0) {
			prod.remove()
		}
	})



	products.forEach(function(prod,index){

		if(prod.viewWebnBlank == buttonAddToBlank.dataset.addtowindowblank){
			screnBlank.classList.remove('none')
			
			let newProduct = createWindowBlank(prod, index, resultRepeatElement)
			
			// функция в файле editRemark
			// editRemark(newProduct)
			
			screnBlank.append(newProduct)
			
		}
	})



	function createWindowBlank(product, countProduct, repeatObject){
			

		let ul = document.createElement('ul')


		let maiConfiguration 			
			
				// console.log(idTables)
			if (idTables == '#new_vertical_89mm') {
				maiConfiguration = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.verticalCalculatorType)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} 
																											${excludeUndefined(product.productSystem)} ${excludeUndefined(product.sizeSystem)}
																											 ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)}
																											  ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.plasticRetainer)}
																											   ${excludeUndefined(product.guideString)} `)	


			}else if(idTables == "#new_vertical_127mm"){ 

				maiConfiguration = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.verticalCalculatorType)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)}
																							 ${excludeUndefined(product.productSystem)} ${excludeUndefined(product.sizeSystem)}
																							  ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)}
																							   ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.plasticRetainer)}
																							    ${excludeUndefined(product.guideString)}`)	

			}else if (idTables == "#horizontal_louver_standard" || idTables == "#horizontal_louver_venus") {
				let withoutNumber = excludeUndefined(product.porductColorNumber)
				if (withoutNumber === 'Без номеров') {
					maiConfiguration = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.productSystem)}
																						${excludeUndefined(product.productColor)}`)
				}else{
					maiConfiguration = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.productSystem)}
																						${excludeUndefined(product.porductColorNumber)}`)
				}
			
			}else if(idTables == "#additonal_components"){ 

				maiConfiguration = createWindowElement('li', 'maiConfiguration', ` ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)} ${excludeUndefined(product.colorSystem)}`)	

			}


			else {
				maiConfiguration  = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.productSystem)} ${excludeUndefined(product.colorSystem)}
																					 ${excludeUndefined(product.productColor)} ${excludeUndefined(product.porductColorNumber)} 
																					 ${excludeUndefined(product.sizeSystem)}
																					  ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)}
																					   ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.plasticRetainer)} 
																					   	${excludeUndefined(product.guideString)} ${excludeUndefined(product.controlMethod)} `)	
		
			}




		let num = createWindowElement('li','number_of_blanks', countProduct+1)
		let width =	createWindowElement('li', 'width',  product.width)	
		let height = createWindowElement('li', 'height',product.height )
		let quantity = createWindowElement('li', 'quantity', product.numberRepetitons)
		let control = createWindowElement('li', 'control' ,product.controlType )

		let fastening = createWindowElement('li','fastening' ,`${excludeUndefined(product.fixationSystem)} ${excludeUndefined(product.brakeMechanism)} ${excludeUndefined(product.fasteningSelected)}`)
	
		let remark = createWindowElement('li','remark' ,`${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.glazingBeadDepth)} ${excludeUndefined(product.mosquitoSize)} ${excludeUndefined(product.bottomCorner)} ${excludeUndefined(product.remark)}`)

		let buttonDelete =  createWindowElement('div', 'delenteElement')



		ul.append(num)
		// ul.append(systemAndColor)
		ul.append(maiConfiguration)
		ul.append(width)
		ul.append(height)
		ul.append(control)
		ul.append(quantity)


		ul.append(fastening)
		ul.append(remark)


		ul.append(buttonDelete)	


		deleteWindowElement(ul,product, countProduct)

		return ul	

	}



	function createWindowElement(tagN, classN, text){
		let li = document.createElement(tagN)
		li.classList.add(classN)

		if (classN == 'remark') {
			li.innerHTML = `<span class="main_text">${text}</span>`
		}else{
			li.textContent = text

		}


		return li
	}


	function deleteWindowElement(removedItem,removedProduct, numberProduct){

		let buttonDelete = removedItem.querySelector('.delenteElement')
		buttonDelete.addEventListener('click', function(){
			


			removedItem.remove()

			orderBlank.splice(removedProduct.numberInArrayOrderBlank,1,1) 

			orderBlank.forEach(function(product){
				if (product.arrayElementClass === removedProduct.arrayElementClass) {
					orderBlank.splice(product.numberInArrayOrderBlank,1,1) 
				}
			})


			deleteButtonAmoutProduct( idButton)

			//функция находиться в файле totalCosts.js
			decreaseInTotalCost(orderBlank)
 	

		})
	}



	//дополнительная функция
	function excludeUndefined(text){
		if (text != undefined) {
		// console.log(text)

			return text
		}else{
			return ' '
		}
	}




	//Добавление количества товаров в кнопку
	function addButtonAmoutProduct(data,idButton){
		let downloadCount = document.querySelector(idButton+' .amount_goods')

		data.forEach(function(one,index){
			downloadCount.textContent = index+1
		})
	}

	
	//удаление количесва товаров из кнопи
	function deleteButtonAmoutProduct(idButton){
		let downloadButton = document.querySelector(idButton)
		let countDownloadButton = downloadButton.querySelector('.amount_goods')
		let screenBlanks =  document.querySelectorAll('.screen_blank ')
	

		let allProductCount = []
		screenBlanks.forEach(function(blank){
			
			if (blank.dataset.viewinblank ==  downloadButton.dataset.view ) {

			

				let products = blank.querySelectorAll('ul')

				products.forEach(function(product,index){
					if (index !=0 ) {
						allProductCount.push(product)

					}
				})

			
			}

			// downloadButton.textContent = allProductCount.length


		})

		if(allProductCount.length != 0){
			countDownloadButton.textContent = allProductCount.length
		}else{
			countDownloadButton.textContent = ' '
		}




	

	}



	// //дополнительная функция
	// function additionalText(idTables){
	// 	if(idTables == '#new_vertical_89mm') {
	// 		return 89
	// 	}else if(idTables == '#new_vertical_127mm'){
	// 		return 127

	// 	}else{
	// 		return ' '
	// 	}
	// }
	


}