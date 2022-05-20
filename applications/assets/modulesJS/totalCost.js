//дабавление общей стоимости в в калькулятор . функция находиться в файле creatingOrderBlank.js
function addTotalCost(products,totalCostId, deleteOperation) {


	let price = 0
	if (products.length !=0) {
		products.forEach(function(prod,index){
			if (prod.numberRepetitons > 1) {
				if (deleteOperation != true) {
					price += Number(prod.price) * prod.numberRepetitons
				}else{
					price += Number(prod.price)
				}

			}else{
				price += Number(prod.price)
			}		
		})

		if (price != 0) {
			viewTotalCostInDisplay(price,totalCostId)
		}

	}else{
		viewTotalCostInDisplay(0,totalCostId)
	}		
}



//функция понижения общей стоимости при удаление товаров. Вызывается в файле addWindowBlankFrom.js
function decreaseInTotalCost(allProducts){
	let curtainsProducts = []
	let horizontalStandardProducts = []
	let horizontalVenusProducts = []
	let verticalProducts = []
	let mosquitoProducts = []

	allProducts.forEach(function(prod){

			if(prod.idParent === "roller_curtains" ||prod.idParent === "roller_curtains_day_night" ||  prod.idParent === "roller_curtains_ready" ){	
				curtainsProducts.push(prod)
			}

			if (prod.idParent === "horizontal_louver_standard" ) {
				horizontalStandardProducts.push(prod)
			}
			
			if (prod.idParent === "horizontal_louver_venus" ) {
				horizontalVenusProducts.push(prod)
			}

			

			if(prod.idParent === "new_vertical_89mm" || prod.idParent === "new_vertical_127mm" ){
				verticalProducts.push(prod)
			}


			if (prod.idParent === "mosquito_net" ) {
				mosquitoProducts.push(prod)				
			}

	})


	
	addTotalCost(curtainsProducts ,'curtains', true)
	addTotalCost( horizontalStandardProducts,'horizontalStandard', true)
	addTotalCost(horizontalVenusProducts,'horizontalVenus', true)
	addTotalCost(verticalProducts,'vertical', true)
	addTotalCost(mosquitoProducts,'mosquito', true)



}


// функция для вывода общей стоимости в нужные места
function viewTotalCostInDisplay(totalCost, id){	
	let dollarRate = document.querySelector('#exchangeRates').value
	let allDisplayElement = document.querySelectorAll("[data-totalCost]")
	let allDisplayElementHryvnia = document.querySelectorAll("[data-totalCostHryvnia]")

	allDisplayElement.forEach(function(span, index){
		if (span.dataset.totalcost == id ) {
			span.textContent = `${totalCost.toFixed(2)} $ / ` 
		}		
	})

	allDisplayElementHryvnia.forEach(function(span, index){
		if (span.dataset.totalcosthryvnia == id ) {
			let priceInHryvnia = totalCost * Number(dollarRate)
			span.textContent = `${priceInHryvnia.toFixed(2) } грн` 
		}
	})
}

