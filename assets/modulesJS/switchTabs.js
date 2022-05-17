
switchWindowsAndDeleteButtons()
function switchWindowsAndDeleteButtons(){
	let allWindow = document.querySelectorAll('.one_window')
	let allTabs = document.querySelectorAll('#switch_tabs ul li')
	let allDownloadButton = document.querySelectorAll('.download_blank')


	let allBlank = document.querySelectorAll('.screen_blank')
	let customer_data = document.querySelectorAll('.customer_data')



	// функция отвечающая за переключни окон но под функцию так же подвязаны показ веб бланков и показ полей данных клиента 
	allTabs.forEach(function(tab, index) {

		allWindow.forEach(function(oneWindow,ind){
			tab.addEventListener('click',function(){
				// viewButton(this)


				if (index === ind) {
					allWindow.forEach(function(one){
						one.style.display = 'none'
					})


					allTabs.forEach(function(tb){
						tb.classList.remove('click_tab')
					})

					this.classList.add('click_tab')


					oneWindow.style.display = 'flex'
				 	
				 	viewElementInTab(this,oneWindow,'.screen_blank_box', '.screen_blank')
				 	viewElementInTab(this,oneWindow,'.screen_blank_box', '.download_blank')
				 		

				 	flyingCurrencyConverter(oneWindow)
				 	flyingCustomerData(oneWindow)

				}
 
			})
		})
	})	


	// // функция которая перекидывает кнопки скачивания в нужные бланки
	function viewElementInTab(clickTab,windowView,classBox, classFlyElement){
 		let elementBox =  windowView.querySelector(classBox)
 		let allFlypElements = document.querySelectorAll(classFlyElement)


		if (clickTab.dataset.click == elementBox.dataset.flyelement) {
			allFlypElements.forEach(function(oneElement){
				if (oneElement.dataset.viewinblank == elementBox.dataset.flyelement) {
					elementBox.append(oneElement)
				}
			})
		}
	}
}





