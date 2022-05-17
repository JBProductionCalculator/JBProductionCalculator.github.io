
menu()
function menu() {
	let menu = document.querySelector('.menu')
	let open = document.querySelector('.open')
	let close = document.querySelector('.close')


	open.addEventListener('click', () => {
		menuOpen()
	})

	close.addEventListener('click', () => {
		menuClose()
	})

	function menuOpen(){
		menu.style.right = 0 + 'vw'
		close.classList.remove('none')
		open.classList.add('none')
	}


	function menuClose (){
		menu.style.right = -100 + 'vw'
		close.classList.add('none')
		open.classList.remove('none')
	}


	let allItem = document.querySelectorAll('.menu li')

	scrollBlock('.upper','.link_upper')
	scrollBlock('.information','.link_stats')
	scrollBlock('.mission','.link_mission')
	scrollBlock('.contat','.link_contact')

	function scrollBlock(block,button){

		let home = document.querySelector(block)
		let btn = document.querySelector(`${button} `)

		

		function ddd(){
			home.scrollIntoView({
			   behavior: "smooth",
			   block:    "start" 
			});
		}

		btn.addEventListener('click', (e) => {
			
			allItem.forEach(item => {
				console.log(item)
				item.classList.remove('menu_active')
			})

			btn.classList.add('menu_active')



			menuClose()

			ddd()
		})
	}


}





