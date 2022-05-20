
function verticalCreateTable(data,classTable) {
	let tablePrice = document.querySelector(classTable)

	data.forEach(function(oneProduct){
		tablePrice.append(createUl(oneProduct))
	})

	function createUl(oneProduct){
		let ul = document.createElement('ul')
		ul.classList.add('one-row')

		ul.append(createLi(oneProduct.name))
		ul.append(createLi(oneProduct.colorCodesName[0]))
		ul.append(createLi(oneProduct.price[0]))

		return ul
	}

	function createLi(text){
		let li = document.createElement('li')
		li.textContent = text

		return li
	}
}