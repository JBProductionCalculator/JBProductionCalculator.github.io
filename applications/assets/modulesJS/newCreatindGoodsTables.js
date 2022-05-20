
  // ФУНКЦИЯ КОТОРАЯ ПОЛУЧЕТ ДАННЫЕ И КОМАНДЫ , И ПОСЛЕ СОЗДАЕТ ТАБЛИЦУ ПРАЙСА ТОВАРОВ
    function newCreatindGoodsTables(data,amountElements, tableClass, commands){

        let allProducts =  data


        let newCommands = []
        for(let i = 0; i < commands.length;i++){
            let comand = 'oneProduct.'+commands[i]
            newCommands.push(comand)
        }
        
        allProducts.forEach(function(oneProduct){
            creatLibs(oneProduct, amountElements, newCommands, tableClass)   
        })
    }

    // создание ряда с ценами ОДНОГО ТОВАРАааа
    function creatLibs(oneProduct, amountElements, commands, tblClass){
        let ul = document.createElement('ul')
        ul.classList.add('one-row')
        ul.classList.add('create-row')

        let li = createLi(oneProduct, amountElements,commands)
        li.forEach(function(elem){
            ul.append(elem)
         })

        document.querySelector(tblClass).append(ul)
    }

    // создание каждой отдельной колонки с ценой в ряду с ценами
    function createLi(oneProduct, amountElements, commands){
       


        let items = [] 
        for(let i = 0; i < amountElements;i++){
            items.push(document.createElement('li'))

            // console.log(commands)
            if(commands[i] === undefined){
                items[i].innerHTML = ""
            }
            else{
              if( Array.isArray(eval(commands[i]))){
                items[i].innerHTML = eval(commands[i]+'[0]') +' '+eval(commands[i]+'[1]')
              }else{
                items[i].innerHTML = eval(commands[i])
              }                          
            }

        } 

        return items               
    }



// -------------------------------------------------------------------------
// ----------------СОЗДАНИЯ ТАБЛИЦЫ ДЛЯ ДОПОЛНИТЕЛЬЫХ КОМПЛЕКТУЮЩИХ-------

  // ФУНКЦИЯ КОТОРАЯ ПОЛУЧЕТ ДАННЫЕ И КОМАНДЫ , И ПОСЛЕ СОЗДАЕТ ТАБЛИЦУ ПРАЙСА ТОВАРОВ
    function newCreatindGoodsTablesAdditionalConfiguration(data,amountElements, tableClass, commands){

        let allProducts =  data


        let newCommands = []
        for(let i = 0; i < commands.length;i++){
            let comand = 'oneProduct.'+commands[i]
            newCommands.push(comand)
        }
        
        allProducts.forEach(function(oneProduct){
            creatLibsAdditionalConfiguration(oneProduct, amountElements, newCommands, tableClass)   
        })
    }

    // создание ряда с ценами ОДНОГО ТОВАРАааа
    function creatLibsAdditionalConfiguration(oneProduct, amountElements, commands, tblClass){
        let ul = document.createElement('ul')
        ul.classList.add('one-row')
        ul.classList.add('create-row')

        let li = createLiAdditionalConfiguration(oneProduct, amountElements,commands)
        li.forEach(function(elem){
            ul.append(elem)
         })

        document.querySelector(tblClass).append(ul)
    }

    // создание каждой отдельной колонки с ценой в ряду с ценами
    function createLiAdditionalConfiguration(oneProduct, amountElements, commands){
       


        let items = [] 
        for(let i = 0; i < amountElements;i++){
            items.push(document.createElement('li'))

            // console.log(commands)
            if(commands[i] === undefined){
                items[i].innerHTML = ""
            }
            else{
              if( Array.isArray(eval(commands[i]))){
                items[i].innerHTML = eval(commands[i]+'[0]')
              }else{
                items[i].innerHTML = eval(commands[i])
              }                          
            }

        } 

        return items               
    }
