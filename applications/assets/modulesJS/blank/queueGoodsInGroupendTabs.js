// очередь выстраивания товаров в сгруппированых бланках 
// операциии вывода товаров в сгрупированных влкадках а точнее руллонных штор и вертикальных жалюзей по очереди.
// Проще говоря чтобы сперва в бланке будут показываться товары из Рулонных штор после День ночь
// функция вызывается в файле creatingOrderBlank
function queueGoodsInGroupendTabs(data) {


let arrayProducts = data

let arg = arguments


// даю числовые id каждому товару в зависимости от их классов
arrayProducts.forEach(function(product){
	for(let i = 1; i < arg.length; i++){
		if (arg[i] == product.idParent) {

			product.sortId = i - 1
		}
	}
})


// выстраивания товаров по очереди по sortId 
arrayProducts.sort(function(a,b){
	return a.sortId - b.sortId
})


	
}