function rollerCurtainsCalculate(data, parentSection, productSelectID, commands ){
        let thisWindow = document.querySelector(parentSection)


 
        //переменные размера
        let width,widthGlass, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        widthGlass = document.querySelector( parentSection +" input#glassWidth")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")


        // блок калькулятора
        let priceСalculationBox = document.querySelector(parentSection + ' .priceСalculation')

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


            // первый вызов прыжков конвертера
            if(thisWindow.id == "roller_curtains"){
                flyingCurrencyConverter(thisWindow)
            }


        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value, this)

                let productArea = areaCalculation()
                // способ управления
                let controlMethod = priceControlMethod(selectType.value,boxControlMethod)
                //допю скотч
                let additionalScotchTape = priceAdditionalScotchTape(selectType.value, additionalScotchTapeInputs, height)

                // selectProductOperations(data,productSelectID,commands)
                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration + controlMethod + additionalScotchTape

                // наценка
                price = productMarkup(price, selectMarkup.value)

                document.querySelector(parentSection+" #price").innerHTML = price.toFixed(2)
                addToBlank.style.visibility = "visible"

                //конвертер валют
                currencyConverter(thisWindow,true)
            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                if(y < 0.7){
                    y = 0.7                    
                    area.value = y
                    return y
                }else{
                    area.value = y
                    return y   
                }
            }
        }

          addToBlank.addEventListener("click", function(){
                this.style.visibility = "hidden"

                let parentBlock = this.parentNode.parentNode
                addToBlankFun(parentBlock, [productSelectID[0], productSelectID[1], productSelectID[2]] , selectType.value)

            })
        
      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')
            selectColorNumber = createSelect('colorNumber')



           
            productSelect.append(createTag('span', 'Система:')) 
            productSelect.append(selectType)

            productSelect.append(createTag('span', 'Ткань:'))
            productSelect.append(selectColor)
            
            // productSelect.append(createTag('span', 'Цвет ткани:'))
            productSelect.append(createTag('span', 'Номер цвета:'))
            productSelect.append(selectColorNumber)


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
                        if (command != 'name' && command != 'colorNumber'  && command != 'maxWidthWarnig' && command != 'maxHeightWarnig') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
                }


                if(colorOrType == 'colorNumber'){
                    findColorNumber()
                   
                    selectColor.addEventListener('change', function(){
                       clearColorNumber()

                       findColorNumber()
                    })

                    select.id = productSelectID[2]
                }


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
                
                calculatorAdditionalConfiguration(color.value)

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
        function calculatorAdditionalConfiguration(type, thisIsSparta){



            let priceExchangeRates, priceSelectMarkup 
            let priceColorSystem,priceControlType, priceFixationSystem, priceChainLoad,priceChainFixing,priceChainFixingUniversal
       
              
            priceColorSystem  =  selectedColorSystem(type ,colorSystem, parentSection)
            priceFixationSystem = selectedFixationSystem(type, fixationSystem, parentSection)
            priceChainLoad = selectedChainLoad(type, chainLoad)
            priceChainFixing = selectedChainFixing(type, chainFixing, parentSection)
            priceChainFixingUniversal = selectedChainFixingUniversal(type, chainFixingUniversal, parentSection)


            viewSizeSystem(type, sizeSystem, parentSection)
            viewControlMethod(type,boxControlMethod, parentSection, thisIsSparta)
            viewEaxtraWidth(type,parentSection)
            viewAdditionalScotchTape(type, parentSection)


            clothSeparatelyShow(type,thisWindow)

            

            // блокировка минимальной ширины и высоты
            minAndMaxlWidth(width.value, thisWindow, [1, 'Реком. мин. шир. 1мм '], [Infinity,'Без ограничений'])
            minAndMaxHeight(height.value, thisWindow, [1, 'Реком. мин. шир. 1мм '], [Infinity,'Без ограничений'])


            // блокировка товаров по типу
            blockMiniStandartCloseSystems(type,width.value,thisWindow)
            blockWidthDifference(type,width.value,widthGlass.value,thisWindow)

            // предупреждения по типам для разных цветов при привышение высоты и ширины
            maxWidthWarning(data,selectColor.value, selectType.value, width.value,thisWindow)
            maxHeightWarning(data,selectColor.value, selectType.value, height.value, thisWindow)
           

            allPricesAdditionalConfiguration = priceColorSystem + priceFixationSystem + priceChainLoad + priceChainFixing + priceChainFixingUniversal

            // console.log(allPricesAdditionalConfiguration)


            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
       
