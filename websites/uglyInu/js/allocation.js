
allocation()
function allocation(){
	let hover = document.querySelectorAll('.circle_hover')

	hover.forEach(hov => {
		let windowOpen = hov.querySelector('.info_window')
		hov.addEventListener('mouseover', () => {
			windowOpen.classList.remove('none')
		})

		hov.addEventListener('mouseout', () => {
			windowOpen.classList.add('none')
		})
	})
	
}