 
//выбор вещи на которую  будет наноситься принт
function initialChoice(){
	let choice = document.querySelector('.choice')
	let choiceShowcases =  document.querySelectorAll('.choice_showcase-item img')
	let img = document.querySelector('.picture_Tshirts img')
	
 

	for(let i = 0;i < choiceShowcases.length;i++){

		choiceShowcases[i].addEventListener('click',function(){
			choice.classList.add("choice_show")
			setTimeout(function(){
				choice.classList.add('display_none')
			},800)
			img.src = choiceShowcases[i].src
		})
	}
}

 initialChoice()




function accordion(argument) {
	let editorLi = document.querySelectorAll('.editor_functions > ul > li')
	for(let i = 0;i < editorLi.length - 1; i++){
		let count = 0
		editorLi[i].onclick = function (){
			count++
			if (count % 2) {
				this.children[1].classList.remove('display_none') 
				this.children[1].classList.add('display_block') 
				event.preventDefault()

			}else{
				this.children[1].classList.remove('display_block')				
				this.children[1].classList.add('display_none')				
				event.preventDefault()
			}
		}
	}
	
}



// ВЫБОРИ КАКАЯ ИЗ ФУКЦИЙ : ДОБАВЛЕНИЕ ТЕКСТА , КАРТИНКИ ИЛИ ЭМОДЗИ БУДЕТ ОТРАБАТЫВАТЬ 
function funtionChoice(){
	let buttonChoice = document.querySelectorAll('.button_choice')	
	let boxChoice = document.querySelectorAll('.box_choice')	
	let itemSelection = document.querySelectorAll('.item-selection')

	for(let i = 0; i < buttonChoice.length; i++){
		buttonChoice[i].onclick = function(){
			for(let y = 0; y < boxChoice.length; y++ ){
				boxChoice[y].classList.remove('display_block')		
			}
			boxChoice[i].classList.add('display_block')	
			
			
			for(let y = 0; y < boxChitemSelectionoice.length; y++ ){
				itemSelection[y].classList.remove('display_block')		
			}
			itemSelection[i].classList.add('display_block')	
			

		}
	}
	

}

funtionChoice()






//добавление текста и работа с ним
textManagement()
function textManagement(){

	let textareaText = document.querySelector('.functions_text textarea')
	let inputColor = document.querySelector('.functions_text input[type="color"]')
	let seletSize = document.querySelector('.functions_text select#size-text')
	let registers = document.querySelectorAll('#text_case input')
	let selectFonts = document.querySelectorAll('.functions_text select#font-text ')

	let windowText = document.querySelector('.window_text-item')


	function addText(){
		textareaText.oninput = (event) =>{
			let  text = textareaText.value
			windowText.innerHTML = text

			itemChange(windowText)
		    deletDisplayNone(windowText)
			
		}
	}
	addText()

	function colorText(){
		inputColor.onchange =  () =>{
			windowText.style.color = inputColor.value

		}
	}
	colorText()

	function sizeText(){
		seletSize.onclick = () =>{
			windowText.style.fontSize  = seletSize.value
		}
	}
	sizeText()

	function textCase(){
		for(let i = 0;i < registers.length; i++){

			registers[i].addEventListener('click', () =>{
				windowText.style.textTransform = registers[i].dataset.case
			})
		}
	}
	textCase()

	function textFont(){
		for(let i = 0;i < selectFonts.length;i++){
			selectFonts[i].addEventListener('click', ()=>{
				windowText.style.fontFamily = selectFonts[i].value
			})
		}
	}
	textFont()

}


// добавление картинки и работа с ней
pictureManagement()
function pictureManagement(){
	let input = document.querySelector(".functions_picture input")
	let item = document.querySelector(".window_image-item")
	
	function pictureAdd(){

		input.addEventListener("change", function () {
			
			  if (this.files[0]) {
			    var fr = new FileReader()
				fr.addEventListener("load", function () {
					deletDisplayNone(item)

			    	item.style.backgroundImage = "url(" + fr.result + ")"					    
			    }, false);

		    fr.readAsDataURL(this.files[0])
		  }
		})


	}

	pictureAdd()
	itemChange(item)
	
}





// добавление эмоджи и работа с ними
emojiManagment()
function emojiManagment(){

	let functions_emoji =  document.querySelector('.functions_emoji') 
	let emojiImages = document.querySelectorAll('.all_emoji-item img')
	let window_emoji = document.querySelector('.window_emoji-item')

	let W_Em = document.querySelector('.window_emoji')


	function  emojiHover(){
		functions_emoji.onmouseover = function(){
			this.children[1].style.display = 'flex'

			functions_emoji.onmouseout = function(){
				this.children[1].style.display = 'none'

			}
		}
	}
	emojiHover()

	function emojiAdd(){
		let srcImage
		for(let i = 0;i < emojiImages.length; i++){
			emojiImages[i].onclick = function(){
				deletDisplayNone(window_emoji)
				itemChange(window_emoji)
				
				srcImage = emojiImages[i].src
				window_emoji.style.backgroundImage = "url(" + srcImage + ")"
			}
			
		}
	}
	emojiAdd()

	
}




// функция перетаскывания картинок , эмоджи и других элементов
function dragAndDrop(element,elemWidth,elemHeight){
	let elem = document.querySelector(element)
    let marginX 
	let marginY

	 elem.addEventListener('dragstart', function(event){
	 	  marginX = event.offsetX
	 	  marginY = event.offsetY

	 })

	 elem.addEventListener('dragend', function(event){
		 	document.body.append(this)
		 	this.classList.add('emojiDrop')
		 	this.style.left =  (event.pageX - marginX) + 'px'
		 	this.style.top = (event.pageY - marginY) + 'px'
	 })

	 elem.addEventListener('contextmenu', function(){
		this.classList.remove('display_block')
	 	this.classList.add('display_none')
	 })

}

dragAndDrop(".window_text-item")
dragAndDrop(".window_emoji-item")
dragAndDrop(".window_image-item")




// --------ВЫБОР ВЕЩИ ДЛЯ ПРИНТА-----
function viborOuterwear(){
	function allOuterwear(parOuterwear){
		let mainImg = document.querySelector('.picture_Tshirts img')
		for(let i = 0;i < parOuterwear.length; i++){
			parOuterwear[i].addEventListener('click',function(){
				mainImg.src =  this.getAttribute('data-outerwear')
			})
		}	

	}

	let outerwears = document.querySelectorAll('.outerwear')
	let outerwearsTwo = document.querySelectorAll('.all_outerwear-list > li')

	allOuterwear(outerwears)	
	allOuterwear(outerwearsTwo)


	function hoverAllOuterwear(elem){


		elem.addEventListener('mouseover', function(){
			this.children[1].classList.remove('off')
			this.children[1].classList.add('on')
		})
	

		elem.addEventListener('mouseout', function(){
			this.children[1].classList.remove('on')
			this.children[1].classList.add('off')
			
		})
	
	}

	let listOuterwear = document.querySelector('.all_outerwear')
	hoverAllOuterwear(listOuterwear)


}

viborOuterwear()




// ВСПОМОГАТЕЛЬНЫЙЕ ФУНКЦИИ 
function deletDisplayNone(element){
	element.classList.remove('display_none')
	element.classList.add('display_block')
}




// закрытие добавленного элемента 
function itemChange(element){
	function closeElement(){
		let div = document.createElement('div')
		div.classList.add('item_change')
		
		element.addEventListener('mouseover', function(){		
			this.append(div)	
			this.classList.add('border')

			div.classList.remove('display_none')
			div.classList.add('display_block')	
			
		
		})

		element.addEventListener('mouseout', function(){
			this.classList.remove('border')

			div.classList.add('display_none')	
			div.classList.remove('display_block')				
		
		})

		div.addEventListener('click', function(){
			element.classList.remove('display_block')
			element.classList.add('display_none')

		})
	

	}
	closeElement()


}



// изменение размера добавляемых элементов
function resizeItem(){
	
	
	  if($(window).width() < 900)
	  {
			$( function() {
				$( ".window_emoji-item" ).resizable({
					maxWidth: 160,
					maxHeight:160,
					minWidth:50,
					minHeight:50
				});
			
				$( " .window_image-item" ).resizable({
					maxWidth: 160,
					maxHeight:180,
					minWidth:50,
					minHeight:50
				});
			} );
	  } else {
		$( function() {
			

			$( ".window_emoji-item" ).resizable({
				maxWidth: 250,
				maxHeight:250,
				minWidth:80,
				minHeight:80
			});
		
			$( " .window_image-item" ).resizable({
				maxWidth: 250,
				maxHeight:300,
				minWidth:80,
				minHeight:80
			});
		  } );
	  }
	
}

resizeItem()


 