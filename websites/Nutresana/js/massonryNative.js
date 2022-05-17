
massonryNative('.pageBlog','.pageBlog_item')
function massonryNative(className, classNameItems) {
	let parent = document.querySelector(className)
	let items = document.querySelectorAll(classNameItems)

	let containerOne = document.createElement('div')
	let containerTwo = document.createElement('div')

	items.forEach((item, index) => {
		if (index % 2) {
			containerTwo.append(item)
		}else{
			containerOne.append(item)

		}
	})

	parent.append(containerOne)
	parent.append(containerTwo)

}