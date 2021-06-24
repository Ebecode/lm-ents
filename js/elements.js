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

// element list selectors
const elementsUl = document.querySelector('.element-list')

// showcase selectors

const showcaseHead = document.querySelector('.input-heading')
const swipeIcons = document.querySelectorAll('.swipe-icon')
// element block selectors
const displayName = document.querySelector(".elem-name")
const displaySym = document.querySelector(".elem-symbol")
const displayNum = document.querySelector(".elem-number")
const displayWeight = document.querySelector(".elem-weight")


// other global variables i want 
let elementForm//chooses which form to display

// paning functions
// reset edit form

function clearEdit () {
    editFields.forEach(elem => (elem.value = ""))
}
function editReset () {
    editTitle.textContent = "Editar"
    if (elementsList.length > 0) {

        editDelete.classList.remove('btn-collapsed')
    }

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

    if (elementsList.length > 0) {

        editDelete.classList.add('btn-collapsed')
    }
    
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

// Element creation functions
// Empty li
function addEmptyLi () {
    const newLi = document.createElement("li")
    const newInput = document.createElement("input")
    const newLabel = document.createElement("label")
    const newContent = document.createTextNode("Sin elementos")
    
    newLi.className = "element"
    newInput.type = "radio"

    newLabel.appendChild(newContent)
    
    newLi.appendChild(newInput)
    newLi.appendChild(newLabel)


    elementsUl.appendChild(newLi)
}

//populate element block
function populateBlock (obj) {
    displayName.textContent = obj.name
    displaySym.textContent = obj.sym
    displayWeight.textContent = obj.weight
    displayNum.textContent = obj.num
}
//populate showcase heading
function populateShowHead (obj) {
    showcaseHead.value = obj.name
}
// show / hide swipe buttons
function hideSwipe () {
    swipeIcons.forEach(x => x.classList.add('btn-collapsed'))
}
function showSwipe () {
    swipeIcons.forEach(x => x.classList.remove('btn.collapsed'))
}


// When page loads

//frontend element object stuff

class Element {
    constructor(name, sym, num, weight) {
        this.name = name;
        this.sym = sym;
        this.num = num;
        this.weight = weight;
    }
}

//create dummy element
const dummy = new Element("Elemento", "?", "0", "0.00")
const elementsList = []
let displayElement = dummy

if (elementsList.length < 1){
    populateBlock(dummy)
    populateShowHead(dummy)
    hideSwipe()
    addEmptyLi()
    editDelete.classList.add('btn-collapsed')//to smooth things out for elementForm load
    elementForm = showAddElement
}



// Event listeners
// paning event listeners 

menuIcon.addEventListener('click', showList)

// editIcon.addEventListener('click', showEdit) //gonna try conditional if elem list empty
editIcon.addEventListener('click', elementForm)

closeIcon.addEventListener('click', showShowcase)

backIcon.addEventListener('click', showShowcase)

addElem.addEventListener('click', showAddElement)



