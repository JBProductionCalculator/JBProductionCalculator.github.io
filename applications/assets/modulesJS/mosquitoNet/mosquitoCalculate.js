function mosquitoNetCalculate(data, parentSection, productSelectID, commands ){
        let thisWindow = document.querySelector(parentSection)

        //переменные размера
        let width, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // длополнительные комплектующие
        let mosquitoSize,bottomCorner
        mosquitoSize = document.querySelectorAll(parentSection + " input[name='mosquitoSize']")
        bottomCorner = document.querySelectorAll(parentSection + " input[name='bottomCorner']")



        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration = 0
                 // priceColorSystem = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()

            // currencyConverter(parentSection)
        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value)

                let productArea = areaCalculation()
  
                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration

                // наценка
                price = productMarkup(price, selectMarkup.value)

               

                document.querySelector(parentSection+" #price").innerHTML = price.toFixed(2)
                addToBlank.style.visibility = "visible"

                //конвертер валют
                currencyConverter(thisWindow,true)

            })

             addToBlank.addEventListener("click", function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, [productSelectID[0], productSelectID[1]] , selectType.value)

                this.style.visibility = "hidden"
            })



            // функция которая вычесляет площадь/ так же к ширине и высоте добавляется по 6см
            function areaCalculation(){
                let x = ( (Number(width.value) + 60) / 1000) * ((Number(height.value) + 60) / 1000)
                let y = Math.round((x) * 100) / 100

                if(y < 1){
                    y = 1                   
                    area.value = y
                    return y
                }else{
                    area.value = y
                    return y   
                }

            }

        }
 

      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')

            productSelect.append(createTag('span', 'Система:')) 
            productSelect.append(selectType)

            productSelect.append(createTag('span', 'Ткань:'))          
            productSelect.append(selectColor)

            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
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
        function searchPrice(color,type){
            data.forEach(function(product){
                if (product.name == color) {

                   commands.forEach(function(command){
                        if (command != "name") {
                            let newCommand = eval('product.'+command)
                         
                            if(type == newCommand[2]){
                                productPrice = newCommand[0]

                            }

                        }
                        
                   })
                }
            })

        }

        // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(color,type){
            
            color.addEventListener('change', function(){

                data.forEach(function(product){
                    if(product.name ==  color.value){

                        commands.forEach(function(command){
                            let newCommand = eval('product.'+command)
                            if (newCommand[2] == type.value) {
                                productPrice = newCommand[0]
                                console.log( productPrice);
                            }

                        })
                    }
                })

                findType(type)
                
            })

            findType(type)

            function findType(clickType){
                clickType.addEventListener('change', function(){

                   calculatorAdditionalConfiguration(clickType.value)

                    // console.log(allPricesAdditionalConfiguration)

                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                }

                            })
                        }
                    })

                })
            }
            

        }

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){       
            let priceMosquitoSize = selectedMosquitoSize(mosquitoSize)
            let pricBottomCorner =  selectedBottomCorner(width.value, bottomCorner)

            if (type == '37') {
                // блокировка минимальной ширины и высоты
                minAndMaxlWidthDisableMax(width.value, thisWindow, [450, 'Реком. мин. шир. 450мм '], [1500,'Рек. макс. шир. 1500мм'],true)
                minAndMaxHeightDisableMax(height.value, thisWindow, [150, 'Реком. мин. выс. 150мм '], [1500,'Рек. макс. шир. 1500мм'],true)
            }else{
                // блокировка минимальной ширины и высоты
                minAndMaxlWidthDisableMax(width.value, thisWindow, [450, 'Реком. мин. шир. 450мм '], [2000,'Рек. макс. шир. 2000мм'],true)
                minAndMaxHeightDisableMax(height.value, thisWindow, [150, 'Реком. мин. выс. 150мм '], [2300,'Рек. макс. шир. 2300мм'],true)
            }
          


            allPricesAdditionalConfiguration = priceMosquitoSize + pricBottomCorner
            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
       
