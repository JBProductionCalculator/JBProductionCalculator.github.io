$('.marquee').marquee({
	// //duration in milliseconds of the marquee
	duration: 10000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	// true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true
});


// scrollBlock('.aboutMe','.home_scroll')
// function scrollBlock(block,button){
// 	let home = document.querySelector(block)
// 	let btn = document.querySelector(button)

// 	function ddd(){
// 		home.scrollIntoView({
// 		   behavior: "smooth",
// 		   block:    "start" 
// 		});
// 	}
// 	btn.addEventListener('click', ddd)
// }



// onBuySection()
function onBuySection(){
	let buy = document.querySelector('.buy')


	let fired = false

	window.addEventListener('scroll', () => {
		if (buy.offsetTop - 600 <= pageYOffset && fired == false) {
			buySection()
			fired = true
		}
	})


}



function buySection(){
	let buttons = document.querySelectorAll('.buy_navigation-item')
	let slides = document.querySelectorAll('.slide')


	buttons.forEach((but, item) => {
		const active = but.querySelector('circle')
		buyProgressBar(active, 0,true)
	})


	buyProgressBarAutomaticSwitching(buttons,slides,1)

	startPositions()
	function startPositions(){
		buttons[0].classList.add('active_nav')
		const active = buttons[0].querySelector('circle')
		buyProgressBar(active, 100)	
	}

	buttons.forEach((but, item) => {



		but.addEventListener('click', () => {


			buttons.forEach(button => {
				button.classList.remove('active_nav')
				const active = button.querySelector('circle')
				buyProgressBar(active, 0)

			})

			but.classList.add('active_nav')
			const active = but.querySelector('circle')
			buyProgressBar(active, 100)

			slides.forEach(slide => {
				slide.classList.remove('show_slide')
				if (but.dataset.navigation === slide.dataset.slide) {
					slide.classList.add('show_slide')
				}
			})

		})
	})
}


function buyProgressBarAutomaticSwitching(buttons, slides, selectBut){
	let selectedButton = selectBut

		

	setInterval(() => {
		nextButton()
	},15000)


	function nextButton(){
		buttons.forEach(but => {
			if (but.classList.contains('active_nav')) {
				selectedButton = but.dataset.navigation
				but.classList.remove('active_nav')

				const active = but.querySelector('circle')
				buyProgressBar(active, 0)	
			}
		})

		slides.forEach(slide => {
			slide.classList.remove('show_slide')
		})

		if (selectedButton < buttons.length){
			selectedButton + 1
			buttons[selectedButton].classList.add('active_nav')
			slides[selectedButton].classList.add('show_slide')

			const active = buttons[selectedButton].querySelector('circle')
			buyProgressBar(active, 100)		
		}else{
			selectedButton = 0
			buttons[selectedButton].classList.add('active_nav')
			slides[selectedButton].classList.add('show_slide')


			const active = buttons[selectedButton].querySelector('circle')
			buyProgressBar(active, 100)	

		}

		
	}
}



function buyProgressBar(element, procent, first){
		const circle = element
		const radiusText = window.getComputedStyle(circle,null).r
		const radius = Number(radiusText.replace('px',''))
		const circuference = 2 * Math.PI * radius



		if (first !== true) {
			circle.style.transition = "stroke-dashoffset 15s linear"
		}

		circle.style.strokeDasharray = `${circuference} ${circuference}`
		circle.style.strokeDashoffset = circuference


		setProgres(procent)

		function setProgres(percent){
			const offset = circuference - percent / 100 * circuference

			circle.style.strokeDashoffset = offset
		}
	
}





mediaQuery()
function mediaQuery(){
	if (window.matchMedia("(max-width: 768px)").matches) {
		let radiusPictures = document.querySelector('#round_item')
		radiusPictures.setAttribute('stdDeviation', '25')
		// -------------------------------------------------------
		buySLideHeight()
		function buySLideHeight(){
			let buySlides = document.querySelectorAll('.slide ')
			let height = buySlides[0].clientHeight
			let padding = parseInt(getComputedStyle(buySlides[0],true).paddingTop)
			let finishHeigt = height - (padding * 2)

			buySlides.forEach((slide,index) => {
				
				slide.style.height = finishHeigt + 'px'
			})	
		}

		ideaSLideHeight()
		function ideaSLideHeight(){
			let radiusPictures = document.querySelector('#idea_round_item')
			radiusPictures.setAttribute('stdDeviation', '25')
		}
		



	} 

}