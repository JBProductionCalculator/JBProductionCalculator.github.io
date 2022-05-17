let toDoForm = document.querySelector('#add-form')
let addText = document.querySelector('#add-text')
let taskContainer = document.querySelector('#todo-container')


toDoForm.addEventListener('submit', addTask)

function addTask(event){
    event.preventDefault()
    
    let newTask = createTaskMarkup(addText.value)
    addText.value = ''
    
    taskContainer.appendChild(newTask)

}


// function createTask(text){

//     let taskMarkup =  createTaskMarkup(text)
//     addText.value = ''
 
//     return taskMarkup

// }
 

function createTaskMarkup(text){
    const checked = document.createElement('input')
    checked.type = 'checkbox'
    checked.className = 'checked'

    const noteText = document.createElement('p')
    noteText.className = 'note-text'
    noteText.innerText = text

    const changeText = document.createElement('input')
    changeText.type = 'text'
    changeText.className = 'change-text d-none'

    const changeNote = document.createElement('button')
    changeNote.className = 'change-note'
    changeNote.innerText = 'Изменить'

    const deleteNote = document.createElement('button')
    deleteNote.className = 'delete-note'
    deleteNote.innerText = 'Удалить'



    const oneNote = document.createElement('li')
    oneNote.className = 'todo-note'

    oneNote.appendChild(checked)
    oneNote.appendChild(noteText)
    oneNote.appendChild(changeText)
    oneNote.appendChild(changeNote)
    oneNote.appendChild(deleteNote)


    taskDone(checked)

    changeTask(oneNote)

    deleteTask(oneNote)

    return oneNote
}


function taskDone(element){
    element.addEventListener('change', function(event){
        if (this.checked) {
            this.parentNode.children[1].classList.add('completed')
        }else{
            this.parentNode.children[1].classList.remove('completed')
        }
    })
}


function changeTask(element){
    let c = element.children
    let noteText = c[1]
    let changeText = c[2]

    console.log(c)
    c[3].addEventListener('click', function(){
        if (changeText.classList.contains('d-none')) {
            changeText.value = noteText.innerText 
            noteText.innerText = ''
            this.innerText = 'Сохранить'
        }else{
            noteText.innerText = changeText.value
            this.innerText = 'Изменить'
        }

        noteText.classList.toggle('d-none')
        changeText.classList.toggle('d-none')

    })
}


function deleteTask(element){
       element.children[4].addEventListener('click',function(){
        console.log(element)
        element.remove()
    })
}

