function rollerCurtainsCalculateReady(data, parentSection, productSelectID, commands ){
        let thisWindow = document.querySelector(parentSection)
    
    
        //переменные размера
        let widthBox, height, area,productSelect 
        widthBox = document.querySelector( parentSection +" #widthBox")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // все элементы которые будут участвовать в изменение цены но будут применятся не ко всем колонкам
        let colorSystem,controlType, fixationSystem,sizeSystem,chainLoad, chainFixing,chainFixingUniversal,boxControlMethod,additionalScotchTapeInputs
        // radio элементы
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")
        controlType = document.querySelectorAll(parentSection + " input[name='controlType']")
        fixationSystem = document.querySelectorAll(parentSection + " input[name='fixationSystem']")
        sizeSystem = document.querySelectorAll(parentSection + " input[name='sizeSystem']")
        chainLoad = document.querySelectorAll(parentSection + " input[name='chainLoad']")
        chainFixing = document.querySelectorAll(parentSection + " input[name='chainFixing']")
        chainFixingUniversal = document.querySelectorAll(parentSection + " input[name='chainFixingUniversal']")
        additionalScotchTapeInputs = document.querySelectorAll(parentSection + " input[name='additionalScotchTape']")

        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType, selectColorNumber


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration
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

 
                let d = productPrice * (selectType.value / 1000)

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

           


            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (selectType.value / 1000) * (height.value / 1000)
                
                let y = Math.round((x) * 100) / 100

                // if(y < 0.7){
                    // y = 0.7                    
                    // area.value = y
                    // return y
                // }else{
                    area.value = y
                    return y   
                // }


               
            }

        }
 
      addToBlank.addEventListener("click", function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, [productSelectID[0], 'fakeProductSystem', productSelectID[2]], selectType.value)

                this.style.visibility = "hidden"
         })
        


      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectType = createSelect('type')
            selectColor = createSelect('color')
            selectColorNumber = createSelect('colorNumber')

            widthBox.append(selectType)

            productSelect.append(createTag('span', 'Ткань:'))
            productSelect.append(selectColor) 


            productSelect.append(createTag('span', 'Номер цвета:'))
            productSelect.append(selectColorNumber)

            // productSelect.append(createTag('span', 'Цвет ткани:'))

            
            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'colorNumber'){
                    findColorNumber()
                   
                    selectColor.addEventListener('change', function(){
                       clearColorNumber()

                       findColorNumber()
                })

                function clearColorNumber(){
                    select.innerHTML = ''
                }

                function findColorNumber(){

                    data.forEach(function(product){
                        if (product.name == selectColor.value) {
                            product.colorNumber.forEach(function(number){

                                let option = createOption(number)
                                select.append(option)
                            })
                        }
                    })
                }

                  

                    select.id = productSelectID[2]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name' && command != 'colorNumber') {
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

            let priceExchangeRates, priceSelectMarkup 
            let priceChainLoad,priceChainFixing,priceFixationSystem
       
              

            priceChainLoad = selectedChainLoad(type, chainLoad)
            priceChainFixing = selectedChainFixing(type, chainFixing, parentSection)
            // priceChainFixingUniversal = selectedChainFixingUniversal(type, chainFixingUniversal, parentSection)
            priceFixationSystem = selectedFixationSystem(type, fixationSystem, parentSection)


   
         
            // блокировка минимальной ширины и высоты
            minAndMaxlWidth(width.value, thisWindow, [1, 'Реком. мин. шир. 1мм '], [Infinity,'Без ограничений'])
            minAndMaxHeight(height.value, thisWindow, [1, 'Реком. мин. шир. 1мм '], [Infinity,'Без ограничений'])
           

            allPricesAdditionalConfiguration =  priceChainLoad + priceChainFixing + priceFixationSystem



            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
       
