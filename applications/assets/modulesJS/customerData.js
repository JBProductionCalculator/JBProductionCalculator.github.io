
//функция отвечающая за прыжки Информации Клиента между вкладками. вызывкается в файле switchTabs.js
function flyingCustomerData(selectedWindow){	
	let displayConverterContainer = selectedWindow.querySelector('.customer_data_box')
	let flyingBox = document.querySelector('.flyingCustomerData')

	displayConverterContainer.append(flyingBox)

}


// функция выбора типа доставки
selectedDeliveryMethod()
function selectedDeliveryMethod(){
	let deliveryMethod = document.querySelector('.delivery_method')
	let branchNumber = document.querySelector('.branch_number')
	let appraisal = document.querySelector('.appraisal')


	deliveryMethod.addEventListener('change', function(){
		if (this.value == 'Самовывоз') {
			branchNumber.classList.add('none')
			appraisal.classList.add('none')
		}else{
			branchNumber.classList.remove('none')
			appraisal.classList.remove('none')
		}
	})
}



// валидация полей данных клиента. всплывающие подсказки и блокировка кнопки
function validationCustomerData(){
	let inputs = document.querySelectorAll('.customer_data input')
	let errorButtons = document.querySelectorAll('.blank_error')
	let arrayValue = []

	inputs.forEach(function(input){
		arrayValue.push(input.value)

		if(input.classList.contains('branch_valid')){
			let branchInputs = document.querySelectorAll('.branch_valid')

			if (branchInputs[0].value == '' && branchInputs[1].value != '') {
				branchInputs[0].value = '-'
			}else if (branchInputs[1].value == '' && branchInputs[0].value != '') {
				branchInputs[1].value = '-'
			}else if (branchInputs[0].value == '' && branchInputs[1].value == '') {
				input.placeholder = 'Поле не заполнено'
			}else{
				
			}
			
			
		}else{
			if(input.value === ''){
				input.placeholder = 'Поле не заполнено'
			}
		}
		
	})


	let work = arrayValue.every( 
	  function checkNumber( currentValue ) {
	    return currentValue != '';
	  } 
	)


	if (work == true) {
		errorButtons.forEach(function(error){
			error.classList.add('none')
		})

	}else{
		errorButtons.forEach(function(error){
			error.classList.remove('none')
		})
	}

	return work
}



