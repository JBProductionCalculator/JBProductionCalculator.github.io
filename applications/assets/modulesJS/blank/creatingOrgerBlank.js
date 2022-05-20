let orderBlank = []


function creatingOrgerBlank(oneRow, arrayParam) {

	orderBlank.push(oneRow)


	let curtainsBlank = []
	let newVerticalBlank = []


	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []
	let additionalCompenentsBlank = []


	creationOneBlank(orderBlank)


	// операции с повторяющимися элементами. добавление количиства, удаление . весь код находиться в файле allOperationsRepeatingElements.js
	curtainsBlank = allOperationsRepeatingElements(curtainsBlank)
	newVerticalBlank = allOperationsRepeatingElements(newVerticalBlank)
	horizontalVenusBlank = allOperationsRepeatingElements(horizontalVenusBlank)
	horizontalStandardBlank = allOperationsRepeatingElements(horizontalStandardBlank)
	mosquitoNetBlank = allOperationsRepeatingElements(mosquitoNetBlank)
	additionalCompenentsBlank = allOperationsRepeatingElements(additionalCompenentsBlank)



	//дабавление общей стоимости в в калькулятор . функция находиться в файле addTotalCost.js
	addTotalCost(curtainsBlank,'curtains')
	addTotalCost(horizontalStandardBlank ,'horizontalStandard')
	addTotalCost(horizontalVenusBlank,'horizontalVenus')
	addTotalCost(newVerticalBlank,'vertical')
	addTotalCost(mosquitoNetBlank, 'mosquito')
	addTotalCost(additionalCompenentsBlank, 'additonalComponents')


 


	//функци добавления информации в doc бланки и бланки которые на экране
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains", "#screen_blanks_roller_curtains", arrayParam ,"#curtainsBlank_download")
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains_day_night", "#screen_blanks_roller_curtains" ,arrayParam ,"#curtainsBlank_download" )
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains_ready", "#screen_blanks_roller_curtains", arrayParam  ,"#curtainsBlank_download")



	// новые вертекальные бланки
	addToWindowBlankInForm(newVerticalBlank, "#new_vertical_89mm", "#secreen_new_vertical_127mm", arrayParam ,"#newVerticalBlank_download")
	addToWindowBlankInForm(newVerticalBlank, "#new_vertical_127mm", "#secreen_new_vertical_127mm",arrayParam , "#newVerticalBlank_download")




	addToWindowBlankInForm(horizontalVenusBlank,"#horizontal_louver_venus", "#screen_horizontal_louver_venus",arrayParam , "#horizontalVenusBlank_download")

	addToWindowBlankInForm(horizontalStandardBlank, "#horizontal_louver_standard", "#screen_horizontal_louver_standard",arrayParam , "#horizontalStandardBlank_download")


	addToWindowBlankInForm(mosquitoNetBlank, "#mosquito_net", "#secreen_mosquito_net", arrayParam , "#mosquitoNetBlank_download")
	
	addToWindowBlankInForm(additionalCompenentsBlank, "#additonal_components", "#screen_blanks_additonal_components", arrayParam , "#additonal_components_download")





	// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			data.forEach(function(oneProduct){

			if(oneProduct.idParent === "roller_curtains" ||
			 	oneProduct.idParent === "roller_curtains_day_night" || 
			 	 oneProduct.idParent === "roller_curtains_ready" ){
					

					curtainsBlank.push(oneProduct)

			}

			if(oneProduct.idParent === "new_vertical_89mm" || oneProduct.idParent === "new_vertical_127mm" ){
				newVerticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_venus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_standard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "mosquito_net" ) {
				mosquitoNetBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "additonal_components" ) {
				additionalCompenentsBlank.push(oneProduct)
			}

		}) 
	}


}		






// экспорт html в doc
function exportHTML(id, nameDocument){
	// addToBlankFun(arrayParam[0],arrayParam[1],arrayParam[2])

	// функция находиться в файле customerData
	let validationCustomer = validationCustomerData()


	newCustomerDataInDownloadBlank(id)
	newDownloadDocBlank(orderBlank)


	if (validationCustomer === true) {
		createDocBlank(id, nameDocument)
	}else{

	}

}


// основная функция которая содает бланк 
function createDocBlank(id, blankName){
	 const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
   const footer = "</body></html>";
   const sourceHTML = header+document.getElementById(id).innerHTML+footer;
   
   const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
   const fileDownload = document.createElement("a");
   document.body.appendChild(fileDownload);
   fileDownload.href = source;
   fileDownload.download = namingBlank(blankName);
   fileDownload.click();
   document.body.removeChild(fileDownload);
}

function namingBlank(blankName){
	let todayDate = creationTodayDate()
	let dealer = document.querySelector('.customer_info li:last-child input').value

	return `${todayDate},${dealer},${blankName}.doc`
}

// получение сегодняшней даты
function creationTodayDate(){
	let today = new Date().toLocaleDateString()

	return today
}



//добавление Данных клиента в нужные бланки
// ----------------------------------------
function newCustomerDataInDownloadBlank(idDocBlank){
	let webCustomerInfo = document.querySelector('.customer_data')
	let docCustomerInfo = document.querySelector(`#${idDocBlank} #customer-information`)
	let docCustomerInfoInBottom = document.querySelector(`#${idDocBlank} #customer-information-bottom`)



	let cellsCustomerStyle = [
		[30 ,  "white-space:normal; max-width:30px;padding: 5px 20px;box-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;" ],
	 	[190 , "white-space:normal; max-width:190px;padding: 5px 20px;box-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;" ],
	 	[400 , "white-space:normal; max-width:400px;padding: 5px 20px;box-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;"],
	]


	let webAllRow = webCustomerInfo.querySelectorAll('ul')
	let docAllRow = docCustomerInfo.querySelectorAll('tr')
	let docAllRowInBottom = docCustomerInfoInBottom.querySelectorAll('tr')

	deleteCustomerData(docAllRow)
	deleteCustomerData(docAllRowInBottom)
	createAndAddCustomerData(docCustomerInfo)
	createAndAddCustomerData(docCustomerInfoInBottom)


	// функция удаления нужна чтобы информация клиента добавлялась в бланк только один(последний) раз
	function deleteCustomerData(allRow){
		allRow.forEach(function(tr){
			tr.remove()
		})

	}


	function createAndAddCustomerData(boxCustomerBlank){

			let readyRowsBlank = []

			webAllRow.forEach(function(row){
				let allColumn = row.querySelectorAll('li')
				readyRowsBlank.push(createOneRow(allColumn))
			})

			readyRowsBlank.forEach(function(row){
				boxCustomerBlank.append(row)				
			})

			function createOneRow(customerArray){
				let tr = document.createElement('tr')

				customerArray.forEach(function(li,index){
					let td = document.createElement('td')
					if (li.firstChild.tagName == "INPUT") {
						td.textContent = li.firstChild.value

					}else if(li.className == "delivery_services") {
						let deliveryMethod = document.querySelector('.delivery_method').value
						let textBranchNumber = document.querySelector('.branch_number input').value
						let textBrancCargohNumber = document.querySelector('.branch_cargo_number input').value
						let textAppraisal = document.querySelector('.appraisal input').value

						td.textContent = `${deliveryMethod} ${textBranchNumber} / ${textBrancCargohNumber} ${textAppraisal}`

					}else{
						td.textContent = li.textContent
					}

					td.width = cellsCustomerStyle[index][0]
					td.style = cellsCustomerStyle[index][1]

					tr.append(td)
				})

				return tr
			}
	}	
	
}





// создание doc бланка со всеми товарами
// -------------------------------------
function newDownloadDocBlank(data){
	let curtainsBlank = []
	let newVerticalBlank = []
	

	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []
	let additonalСomponentsBlank = []



	creationOneBlank(orderBlank)


	// операции с повторяющимися элементами. добавление количиства, удаление . весь код находиться в файле allOperationsRepeatingElements.js
	curtainsBlank = allOperationsRepeatingElements(curtainsBlank)
	newVerticalBlank = allOperationsRepeatingElements(newVerticalBlank)
	horizontalVenusBlank = allOperationsRepeatingElements(horizontalVenusBlank)
	horizontalStandardBlank = allOperationsRepeatingElements(horizontalStandardBlank)
	mosquitoNetBlank = allOperationsRepeatingElements(mosquitoNetBlank)
	additonalСomponentsBlank = allOperationsRepeatingElements(additonalСomponentsBlank)


	// функция в файле queueGoodsInGroupendTabs. очередо выстраивания товаров в сгруппированых бланках  . относиться к руллоным и вертикальным шторам
	queueGoodsInGroupendTabs(curtainsBlank,'roller_curtains','roller_curtains_day_night','roller_curtains_ready')
	queueGoodsInGroupendTabs(newVerticalBlank,"new_vertical_127mm", "new_vertical_89mm")

	addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download", "curtainsInfo")
	addToHTMLBlankInform(newVerticalBlank, "#nweVerticalBlank", "#newVerticalBlank_download")
	addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download", "horizontalVenusInfo")
	addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download", "horizontalStandardInfo")
	addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#mosquitoNetBlank_download", "mosquitoInfo")
	addToHTMLBlankInform(additonalСomponentsBlank, "#additonalComponentsBlank", "#additonal_components_download", "additonalСomponents")





	// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			data.forEach(function(oneProduct){

			if(oneProduct.idParent === "roller_curtains" ||
			 	oneProduct.idParent === "roller_curtains_day_night" || 
			 	 oneProduct.idParent === "roller_curtains_ready" ){
					

					curtainsBlank.push(oneProduct)

			}

			if(oneProduct.idParent === "new_vertical_89mm" || oneProduct.idParent === "new_vertical_127mm" ){
				newVerticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_venus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_standard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "mosquito_net" ) {
				mosquitoNetBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "additonal_components" ) {
				additonalСomponentsBlank.push(oneProduct)
			}

		}) 
	}

}



function addToHTMLBlankInform(data,id,idButton, customersInfoId){


	let blank = document.querySelector(id+" #all-product tbody")
	let allCells = {
		'count_blank':  ['count_blank', 20 , 'max-width:20px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
		'system_and_color':  ['system_and_color',188 , 'max-width:188px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'width' : ['width',60 , 'max-width:60px;padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'height' : ['height',60, 'max-width:60px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'control_type' : ['control_type',50 , 'max-width:50px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'amount' : ['amount',50 , 'max-width:50px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'fixation_system': ['fixation_system',60, 'max-width:60px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'notes' : ['notes',100 , 'max-width:100px; padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
	}



	createTablesProducts()


 
 	function createTablesProducts(){

		blank.querySelectorAll('tr').forEach(function(tr,index){
			if (index == 0 	) {
			
			}else{
				tr.remove()
			}
		})

		data.forEach(function(product,index){
			let tr = document.createElement('tr')
			
			for(let key in allCells){
				let td = document.createElement('td')
				td.id = allCells[key][0]
				td.width = allCells[key][1]
				td.style.cssText =  allCells[key][2]
				tr.append(td)					
			}
			

			// let maiConfiguration 			

			if (product.idParent == 'new_vertical_89mm') {
				tr.querySelector('#system_and_color').textContent =  `${89} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} 
																				${excludeUndefined(product.productSystem)} ${excludeUndefined(product.sizeSystem)}
																				 ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)}
																				  ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)}
																				   ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} `
			}
			else if(product.idParent == "new_vertical_127mm"){ 
				tr.querySelector('#system_and_color').textContent =  `${127} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)}
																				 ${excludeUndefined(product.productSystem)} ${excludeUndefined(product.sizeSystem)}
																				  ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)}
																				   ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)}
																				    ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} `
			}else if(product.idParent == "additonal_components"){ 

				tr.querySelector('#system_and_color').textContent = ` ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)} ${excludeUndefined(product.colorSystem)}`

			}
			else {
				tr.querySelector('#system_and_color').textContent =  `${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)}
																		 ${excludeUndefined(product.productColor)} ${excludeUndefined(product.porductColorNumber)} 
																		 ${excludeUndefined(product.sizeSystem)}
																		  ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)}
																		   ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)}
																		    ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)}
																		     ${excludeUndefined(product.controlMethod)} `
			}


			// console.log(product.mosquitoSize)
				
			tr.querySelector('#count_blank').textContent = index+1
			tr.querySelector('#width').textContent = product.width
			tr.querySelector('#height').textContent = product.height
			tr.querySelector('#control_type').textContent = product.controlType
			tr.querySelector('#amount').textContent = product.numberRepetitons

			tr.querySelector('#fixation_system').textContent = `${excludeUndefined(product.brakeMechanism)} ${excludeUndefined(product.fixationSystem)} ${excludeUndefined(product.fasteningSelected)}`
			tr.querySelector('#notes').textContent = `${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.glazingBeadDepth)} ${excludeUndefined(product.mosquitoSize)} ${excludeUndefined(product.bottomCorner)} ${excludeUndefined(product.remark)}`


			blank.append(tr)
		})

	}
}



//дополнительная функция
function excludeUndefined(text){
	if (text != undefined) {
		return text
	}else{
		return ' '
	}
}



