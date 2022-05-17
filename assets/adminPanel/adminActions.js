
//===================================================================
//Функции добавления ,удаления и изменения товаров



// let  productColor, productType, productPrice
// productColor = parrentId.querySelector(".product_color")
// productType = parrentId.querySelector(".product_type")
// productPrice = parrentId.querySelector(".product_price")


function adminActions(id, whyPlus) {
	let parrentId = document.querySelector(id)
	let productList = parrentId.querySelector('.product_list')
	let addColor, addType, addPrice, addPlus
	addColor = parrentId.querySelector(".add_color input")
	addType  = parrentId.querySelector(".add_type select")
	addPrice = parrentId.querySelector(".add_price input")
	addPlus  = parrentId.querySelector('.add_plus input')


	parrentId.querySelector('#create_button').addEventListener('click', addProduct)

	// Добвление товара в список
	function addProduct(){
		let product = document.createElement('ul')
		product.classList.add('product')
		// валидация формы добавления товаров
		if(whyPlus){
			if (!addColor.value) {
				addColor.parentNode.querySelector('p').classList.remove('none')
			}
			else if (!addPrice.value){
				addPrice.parentNode.querySelector('p').classList.remove('none')	
			}else if(!addPlus.value){
				addPlus.parentNode.querySelector('p').classList.remove('none')	
			}
			else{

	 			product.append( createProduct('product_color', 'Изменить цвет', addColor.value))
	 			product.append( createProduct('product_type', '', addType.value, ["Compact и фалш шторы","MINI","STANDART","MAXIMUS","UNI Плоскю Направл","UNI П-обрю Направл."]))
	 			product.append( createProduct('product_price', 'Изменить цену', addPrice.value))
 				if(whyPlus){
 					product.append( createProduct('product_plus', 'Изменить доб', addPlus.value))
 				}
	 			product.append( createActions('element_actions'))

	 			hoverActions(product)

	 			changeProduct(product)

	 			deleteProduct(product)

	 			productList.append(product)

				adminSave(id)


			}
		}
		else{
			if (!addColor.value) {
				addColor.parentNode.querySelector('p').classList.remove('none')
			}else if(!addPrice.value){
					addPrice.parentNode.querySelector('p').classList.remove('none')	
			}
			else{
	 			product.append( createProduct('product_color', 'Изменить цвет', addColor.value))
	 			product.append( createProduct('product_type', '', addType.value, ["Compact и фалш шторы","MINI","STANDART","MAXIMUS","UNI Плоскю Направл","UNI П-обрю Направл."]))
	 			product.append( createProduct('product_price', 'Изменить цену', addPrice.value))
	 			product.append( createActions('element_actions'))

	 			hoverActions(product)

	 			changeProduct(product)

	 			deleteProduct(product)

	 			productList.append(product)

			}
		}
		
		
	}

	// создание товара
	function createProduct(liClass, inputText,pText,selectOptions){
		let element = createItem('li', liClass)
		let elementInput
			if (inputText) {
				elementInput = createItem('input', 'none', inputText)
				element.append(elementInput)
			}
		let elementSelect
			if(selectOptions){
				elementSelect = createSelectOptions(selectOptions,'none')
				element.append(elementSelect)
			}
		let elementP = createItem('p', '', '', pText)
		element.append(elementP)

		return element
	}


	function createItem(tagItem, classItem, placeholderItem, textItem){
		let item = document.createElement(tagItem)
		if(classItem) item.classList.add(classItem)
		if(placeholderItem) item.placeholder = placeholderItem
		if(textItem) item.textContent = textItem

		return item
	}



	// создание кнопок для изменения и удаления
	function createActions(liClass){
		let element = createItem('li', liClass)

		element.classList.add('none')

		let change = createItem('button', 'change')
			change.textContent = 'Изменить'

		let save = createItem('button', 'save')
			save.textContent = 'Сохранить'
			save.classList.add('none')

		let del = createItem('button', 'delete')
			del.textContent = 'Удалить'

			element.append(change)
			element.append(save)
			element.append(del)


		return element
	}


	function createSelectOptions(options, selectClass){
		let select = document.createElement('select')
		select.classList.add(selectClass)
		options.forEach(function(textOption){
			let option = document.createElement('option')
			option.textContent = textOption
			select.append(option)
		})

		return select
	}


	// ============================================
	// изменения товара
	function changeProduct(product){
		let productColorIpnut = product.querySelector('.product_color input')
		let productColorP = product.querySelector('.product_color p ')

		let productTypeSelect = product.querySelector('.product_type select')
		let productTypeP = product.querySelector('.product_type p')

		let productPriceInput = product.querySelector('.product_price input')
		let productPriceP = product.querySelector('.product_price p')

		let productPlusInput = product.querySelector('.product_plus input')
		let productPlusP = product.querySelector('.product_plus p')

		let changeButton = product.querySelector('.element_actions .change')
		let saveButton = product.querySelector('.element_actions .save')

		changeButton.addEventListener('click', function(){
			if (saveButton.classList.contains('none')) {
				saveButton.classList.remove('none')
				changeButton.classList.add('none')
			}
				productColorIpnut.value = productColorP.textContent
				productColorP.classList.add('none')
				productColorIpnut.classList.remove('none')

				productTypeSelect.value = productTypeP.textContent
				productTypeP.classList.add('none')
				productTypeSelect.classList.remove('none')

				productPriceInput.value = productPriceP.textContent
				productPriceP.classList.add('none')
				productPriceInput.classList.remove('none')

				if(whyPlus){
					productPlusInput.value = productPlusP.textContent
					productPlusP.classList.add('none')
					productPlusInput.classList.remove('none')
				}
		
		})


		saveButton.addEventListener('click', function(){
			if (changeButton.classList.contains('none')) {
				saveButton.classList.add('none')
				changeButton.classList.remove('none')
			}

				productColorP.textContent = productColorIpnut.value
				productColorIpnut.classList.add('none')
				productColorP.classList.remove('none')

				productTypeP.textContent = productTypeSelect.value
				productTypeSelect.classList.add('none')
				productTypeP.classList.remove('none')

				productPriceP.textContent = productPriceInput.value
				productPriceInput.classList.add('none')
				productPriceP.classList.remove('none')

				if(whyPlus){
					productPlusP.textContent = productPlusInput.value
					productPlusInput.classList.add('none')
					productPlusP.classList.remove('none')
				}
		})
	}


	function hoverActions(product){
		product.addEventListener('mouseover', function(){
			this.querySelector('.element_actions').classList.remove('none')
		})

		product.addEventListener('mouseout', function(){
			this.querySelector('.element_actions').classList.add('none')
		})
	}


	// удаление товара
	function deleteProduct(product){
		product.querySelector('.delete').addEventListener('click', function(){
			product.remove()
		})
		
	}


}

