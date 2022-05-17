
function veticalCalculation(data, idCalculate,parentSelect, objectID ) {
        let thisWindow = document.querySelector(idCalculate)

	    let width, height, area, productSelect, productPrice, parentSection,lamellas
        width = document.querySelector( idCalculate +' input#width')
        height = document.querySelector(idCalculate + ' input#height')
        area = document.querySelector( idCalculate + ' input#area')
        productSelect = document.querySelector(parentSelect)
        lamellas = document.querySelector(idCalculate + ' input#number_of_lamellas')


        let fastening, amountFastening
        fastening = document.querySelectorAll(idCalculate + " .fastening_selected input")
        amountFastening = document.querySelector(idCalculate + " .amountFastening")


        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( idCalculate + " input#exchangeRates")
        selectMarkup = document.querySelector(idCalculate + ' .selectMarkup')


        let selectName ,selectColor
        


        let allPricesAdditionalConfiguration


        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        let cout =  document.querySelector(idCalculate+' input#count')
        let addToBlank = document.querySelector(idCalculate+ ' input#add_to_blank')

        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){
            priceСalculation()

            selectCreate(data, objectID)


            calculatorAdditionalConfiguration(selectName.value)

        }


        function priceСalculation(){ 
 

          cout.addEventListener('click', function (){
                calculatorAdditionalConfiguration(selectName.value)

                let productArea = areaCalculation()
                let price 
                price = productArea * productPrice + allPricesAdditionalConfiguration
                

                // наценка
                price = productMarkup(price, selectMarkup.value)

                document.querySelector(idCalculate+' #price').innerHTML = price.toFixed(2)

                addToBlank.style.visibility = 'visible'

                
                //конвертер валют
                currencyConverter(thisWindow,true)
            })

            addToBlank.addEventListener('click', function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, [objectID[0], objectID[1]], selectType.value)

                this.style.visibility = 'hidden'

            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x 

                if (width.value <= 1000 && height.value <= 1500) {
                    x = (1000 / 1000) * (1500 / 1000)
                   
                }else if(width.value <= 1000 && height.value >= 1500){
                    x = (1000 / 1000) * (height.value / 1000)

                }else if (width.value >= 1000 && height.value <= 1500) {
                   x = (width.value / 1000) * (1500 / 1000)

                }else{
                    x = (width.value / 1000) * (height.value / 1000)
                }


                let y = Math.round((x) * 100) / 100

                area.value = y
                return y
            }

          

        }
        

        function selectCreate(data, idSelects){

        	selectName = createSelect(objectID[0])
        	selectColor = createSelect(objectID[1])
            

        

        	// вывод значений в select типов ткани
        	let firstProductName = data[0].name
        	

        	data.forEach(function(oneProduct){
        		let productName = createOption(oneProduct.name)
        		selectName.append(productName)




        		
        		if (oneProduct.name == firstProductName ) {
        			let colorCodes = oneProduct.colorСode
        			finedProductPrice(data, firstProductName, colorCodes[0])

        			console.log();
	        			colorCodes.forEach(function(oneColor,index){
		        			let productColor =	createOption(oneColor)
		        			selectColor.append(productColor)
		        		})
        		}
       			 
        	
        	})

        	// подмеа цветов в select цветов при выборе ткани
        	selectName.addEventListener('change', function(){
        		let prosuctName = this.value
        		

                calculatorAdditionalConfiguration(selectName.value)
                
     

        		data.forEach(function(oneProduct){
        			if(prosuctName == oneProduct.name){
        				// Очищение select от старых цветов
        				selectColor.innerHTML = ""

        				// добавлние цветов во второй select
        				let colorCodes = oneProduct.colorСode

        				colorCodes.forEach(function(oneColor){
        					let colors = createOption(oneColor)
        					selectColor.append(colors)

        					productSelect.append(selectColor)

        				})



        				finedProductPrice(data,prosuctName, selectColor.value)


        			}
        		})
        	})


        	selectColor.addEventListener('change',function(){
        		finedProductPrice(data,selectName.value, this.value)
        	})




            productSelect.append(createTag('span', 'Ткань:'))            
            productSelect.append(selectName)

            productSelect.append(createTag('span', 'Цвет ткани:')) 
            productSelect.append(selectColor)


            // productSelect.append(createTag('span', 'Цвет ткани:'))


        	 function createSelect(id){
	        	let select = document.createElement('select')
	        	select.id = id 

	        	return select
	        }

	        function createOption(text){
	        	let option = document.createElement('option')
	        	option.textContent = text 
	        	return option
	        }


        }

       

        // функция которая ищет в обекте нужную цену и возращает 
       	function finedProductPrice(data,checkedTypeFabric, checkedColor){
       		data.forEach(function(oneProduct){
       			if (oneProduct.name == checkedTypeFabric ) {
       				productPrice = oneProduct.price[0]
       			}
       		})
       	}

        
        //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){


            let priceFastening  = selectedFastening(width.value ,fastening, amountFastening,idCalculate)
            let priceLamella = calculatingPriceOfLamellas(type,productPrice,lamellas, height.value)



            clothSeparatelyShow(type,thisWindow)

            // блокировка ширин
            minAndMaxlWidth(width.value, thisWindow, [1, 'Реком. мин. шир. 1мм '], [2500,'Реком. макс. шир. 2500мм '])
            minAndMaxHeight(height.value, thisWindow, [1, 'Реком. мин. шир. 1мм '], [5000,'Реком. макс. выс. 5000мм '])


            allPricesAdditionalConfiguration = priceFastening + priceLamella



            return allPricesAdditionalConfiguration
        }
}

