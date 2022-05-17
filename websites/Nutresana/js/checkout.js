
paymentCheck()
function paymentCheck() {
	let allPaymentSystems = document.querySelectorAll('.payment_systems li')
	allPaymentSystems.forEach(system => {

		system.addEventListener('click', () => {
			allPaymentSystems.forEach(systemTwo => {
				systemTwo.classList.remove('payment_systems-active')
			})

			system.classList.add('payment_systems-active')
		})
	})
}