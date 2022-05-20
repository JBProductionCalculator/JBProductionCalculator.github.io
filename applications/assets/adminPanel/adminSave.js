
function adminSave(id) {
	// console.log(allGoods.rollerBlinds)
	let allTables = document.querySelectorAll(id+' .product_list .product')
	console.log("-----------");
	let allProduct = []
	allTables.forEach(function(product, index){
		if(index != 0){
			let color = product.querySelector('.product_color p').textContent
			let type = product.querySelector('.product_type p').textContent
			let price = product.querySelector('.product_price p').textContent
			let plus = product.querySelector('.product_plus p').textContent

			let oneProduct = {
			  "name": color,
			  "openType" : {
			    "copact" :[ ],
			    "mini" :[ ],
			    "standard" :[  ],
			    "maximus" : [ ] 
			  },
			  "closedType" : {
			     "uniFlat" : [ ] ,
			     "uniFullTurn" : [],
			  }
			}
			

			oneProduct.name = color

			if (type == "Compact и фалш шторы") {
				oneProduct.openType.copact.push(Number(price), plus, type)
			}


			allProduct.push(oneProduct)


		}
		
	})


	console.log(allProduct)



}


// {
//   "name": color,
//   "openType" : {
//     "copact" :[ 8.3  ,"+1", "Compact и фалш шторы"],
//     "mini" :[ 9.3 ,"+1" , "MINI"],
//     "standard" :[ 11.0 ,"+1" , "STANDART"],
//     "maximus" : [17.0,  "" , "MAXIMUS"] 
//   },
//   "closedType" : {
//      "uniFlat" : [17.0 , "+2" , "UNI Плоскю Направл"] ,
//      "uniFullTurn" : [23.0 , "+3" , "UNI П-обрю Направл."],
//   }
// }
// 			