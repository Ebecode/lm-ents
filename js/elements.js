// selectors

// paning selectors 
const showcase = document.querySelector('.showcase-screen');
const menuIcon = document.querySelector('.show-list');
const editIcon = document.querySelector('.show-edit');
const closeIcon = document.querySelector('.hide-list');
const backIcon = document.querySelector('.hide-edit');
const addElem = document.querySelector('.add-element');

// edit form selectors 
const editTitle = document.querySelector('.edit-container .form-title');
const editFields = document.querySelectorAll('.edit-container form input[type="text"]');
const editDelete = document.querySelector('.form-submit.delete');
const btnSave = document.querySelector('.save-element');

// paning functions

// reset edit form

function clearEdit () {
    editFields.forEach(elem => (elem.value = ""))
}
function editReset () {
    editTitle.textContent = "Editar"
    editDelete.classList.remove('btn-collapsed')

    clearEdit()
}

// show list pane 
function showList(event) {
    showcase.classList.add('tolist')
    showcase.classList.remove('toedit')
    closeIcon.classList.remove('icon-hide')

    backIcon.classList.add('icon-hide');
    editIcon.classList.add('icon-hide');
    menuIcon.classList.add('icon-hide');

    editDelete.classList.add('btn-collapsed')
    
    //editReset()

    event.stopImmediatePropagation()
}

// show showcase, hide list and edit panes
function showShowcase(event) {
    showcase.classList.remove('tolist')
    showcase.classList.remove('toedit')

    closeIcon.classList.add('icon-hide')
    backIcon.classList.add('icon-hide')

    menuIcon.classList.remove('icon-hide')
    editIcon.classList.remove('icon-hide')

    editReset()

    event.stopImmediatePropagation()
}

// show edit pane 
function showEdit (event) {
    editReset()//maybe I should remove this

    showcase.classList.remove('tolist')
    showcase.classList.add('toedit')
    backIcon.classList.remove('icon-hide')

    closeIcon.classList.add('icon-hide')
    menuIcon.classList.add('icon-hide')
    editIcon.classList.add('icon-hide')

    event.stopImmediatePropagation()
}

function showAddElement (event) {
    event.preventDefault()

    //modifies edit pane
    //editDelete.classList.add('btn-collapsed')
    editTitle.textContent = "Nuevo elemento"

    clearEdit()

    showcase.classList.remove('tolist')
    showcase.classList.add('toedit')
    backIcon.classList.remove('icon-hide')

    closeIcon.classList.add('icon-hide')
    menuIcon.classList.add('icon-hide')
    editIcon.classList.add('icon-hide')

    event.stopImmediatePropagation();
}


// paning event listeners 

menuIcon.addEventListener('click', showList)

editIcon.addEventListener('click', showEdit)

closeIcon.addEventListener('click', showShowcase)

backIcon.addEventListener('click', showShowcase)

addElem.addEventListener('click', showAddElement)



//frontend element object stuff
const elementsList = [];
class Element {
    constructor(name, sym, num, weight) {
        this.name = name;
        this.sym = sym;
        this.num = num;
        this.weight = weight;
    }
}