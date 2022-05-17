openBlock('.menu', '.menu_open', '.menu_close')
openBlock('.cart', '.cart_open', '.cart_close')
function openBlock(containerClass, openClass, closeClass) {
	let container = document.querySelector(containerClass)
	let open = document.querySelector(openClass)
	let close = document.querySelector(closeClass)

	let count = 0

	open.addEventListener('click', () => {
		count++
		if (count % 2) {
			container.classList.remove('none')
		}else{
			container.classList.add('none')
		}
	})

	if (close) {
		close.addEventListener('click', () => {
			count++
			container.classList.add('none')
		})
	}
	
	window.addEventListener('click', (e) => {

		let elem = e ? e.target : window.event.srcElement

		if (!elem.closest(containerClass) && !elem.closest(openClass)) {
			count++
			container.classList.add('none')
		}
			
	})
}
