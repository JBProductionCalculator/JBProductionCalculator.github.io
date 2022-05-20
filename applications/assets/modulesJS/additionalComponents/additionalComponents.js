function additonalComponentsCalculate(data, parentSection, productSelectID, commands ){
        let thisWindow = document.querySelector(parentSection)
        // блок калькулятора
        let priceСalculationBox = document.querySelector(parentSection + ' .priceСalculation')

        let selectColor,selectType

        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")

         //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // длополнительные комплектующие
        let colorSystem 
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")

 		let productSelect
        productSelect = document.querySelector(parentSection + " .productSelect")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()


            searchPrice(selectType.value)

            findPriceOnClick(selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()


        }


        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value)

          		searchPrice(selectType.value)

              
                price =  productPrice + allPricesAdditionalConfiguration

                price = productMarkup(price, selectMarkup.value)




                document.querySelector(parentSection+" #price").innerHTML = price
                addToBlank.style.visibility = "visible"

                //конвертер валют
                currencyConverter(thisWindow,true)
            })

        }


        addToBlank.addEventListener("click", function(){
            this.style.visibility = "hidden"

            let parentBlock = this.parentNode.parentNode


            addToBlankFun(parentBlock, [productSelectID[0], productSelectID[1]] , selectType.value)

        })
        



// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')


            productSelect.append(createTag('span', 'Категория:'))
            productSelect.append(selectColor)
            
            productSelect.append(createTag('span', 'Доп. компликтующие:'))
            productSelect.append(selectType)
   

            function createSelect(colorOrType){
                let select = document.createElement('select')


                let categoryArray = data.map(itemFind => itemFind.category)
                let onlyCategory = categoryArray.filter((item, index) => {
                    return categoryArray.indexOf(item) === index
                })

                if(colorOrType == 'color'){
                    onlyCategory.forEach(function(product){
                       let option = createOption(product)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                } 


                if(colorOrType == 'type'){
                    finedComponents(selectColor.value)
                    selectColor.addEventListener('change',function(){
                        clearFinedComponents()
                        finedComponents(selectColor.value)
                    })

                    select.id = productSelectID[1]
                }

                function clearFinedComponents(){
                    select.innerHTML = ''
                }

                function finedComponents(category){
                    
                    data.forEach(function(product){
                        if (category === product.category) {
                           let option = createOption(product.name)
                           select.append(option) 
                        }
                    })
                }


                function createOption(text){
                    let option = document.createElement('option')
                    option.innerHTML = text
                    
                    return option
                }

                return select
            }

        }



        // поиск цены товара. функция принимает в параметры значения выбранных option. функция отдает цену на продукт
        function searchPrice(type){

            data.forEach(function(product){
                if (product.name == type) {
                        productPrice = product.price[0]

                	
                }
            })

        }

        // // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(type){
            
            type.addEventListener('change', function(){
                calculatorAdditionalConfiguration(selectType.value)
                
            	data.forEach(function(product){
                if (product.name == type) {
                        productPrice = product.price[0]
	                }
	            })
                
            })

        }


        // ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){     
            colorSystemCmpontents(data,type,colorSystem)


            allPricesAdditionalConfiguration = 0
            return allPricesAdditionalConfiguration


        }


}