// функция изминения изминения примечания товаров вызывается в файле addToWindowBlankInForm
// function editRemark(element) {
// 	let remark = element.querySelector('.remark')
// 	createMarkupEditRemark(remark)

// 	let mainText = remark.querySelector('.main_text')
// 	let change = remark.querySelector('.remarkChange')
// 	let save = remark.querySelector('.remarkSave')
// 	let text = remark.querySelector('.remark_text')
// 	let textInput =  remark.querySelector('.remark_text input')


// 	remark.addEventListener('mouseover', function(){
// 		if (text.classList.contains('active')) {
// 			change.classList.add('none')
// 		}else{
// 			change.classList.remove('none')
// 		}
// 	})

// 	remark.addEventListener('mouseout', function(){
// 		change.classList.add('none')
// 	})

// 	change.addEventListener('click', function(){
// 		textInput.value = mainText.textContent

// 		text.classList.remove('none')
// 		text.classList.add('active')
// 		save.classList.remove('none')
// 		change.classList.add('none')
// 	})

// 	save.addEventListener('click', function(){
// 		mainText.textContent = textInput.value

// 		text.classList.add('none')
// 		text.classList.remove('active')
// 		change.classList.add('none')
// 		save.classList.add('none')
// 	})



// }


// function createMarkupEditRemark(remarkContainer){
// 	let mainText = newCreateElement('span', ['main_text'])

// 	let buttonContainer  = newCreateElement('div', ['remark_buttons'])
// 	let change  = newCreateElement('div', ['remarkChange','none'], 'Изменить')
// 	let save  = newCreateElement('div',['remarkSave','none'], 'Сохранить')
	
// 	let textContainer = newCreateElement('div', ['remark_text','none'])
// 	let text = newCreateElement('input', ['remark_text'])

// 	buttonContainer.append(change)
// 	buttonContainer.append(save)
// 	textContainer.append(text)


// 	remarkContainer.append(mainText)
// 	remarkContainer.append(buttonContainer)
// 	remarkContainer.append(textContainer)

// }



// function newCreateElement(tagName,className,tagTaxt){
// 	let item = document.createElement(tagName)

// 	className.forEach(function(oneClass){
// 		item.classList.add(oneClass)
// 	})

// 	item.textContent = tagTaxt

// 	return item
// }
