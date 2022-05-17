// shopHeader

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.shopHeader_next',
    prevEl: '.shopHeader_prev',
  },

   pagination: {
    el: '.shopHeader_number',
    type: 'fraction',
  },

});



// deleteSpace('.shopHeader_number')
// function deleteSpace(className) {
// 	let item = document.querySelector(className)
// 	console.log(item.innerText);
// 	let newContent = item.innerText.split(' ').join('')
// 	console.log(newContent);
// 	item.innerText = newContent
// 	console.log(item.innerText);

// }