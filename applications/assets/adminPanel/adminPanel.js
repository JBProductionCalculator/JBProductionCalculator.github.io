// переключение между таблицами
navigation()
function navigation(argument) {
	let elelmentsMenu = document.querySelectorAll('#menu li')
	let productWindows = document.querySelectorAll('#adding_goods section')


	elelmentsMenu.forEach(function(element,index){
		element.addEventListener('click', function(){
			productWindows.forEach(function(window,ind){
				window.style.display = 'none'
				if (index === ind) {
					window.style.display = 'block'					
				}
				
			})
		})
	})
}





adminActions("#rolle_blinds", true)


