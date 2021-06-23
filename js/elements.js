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

 


// paning event listeners 
menuIcon.addEventListener('click', function(event) {
    showcase.classList.toggle('tolist');
    showcase.classList.remove('toedit');
    menuIcon.classList.toggle('icon-hide');
    editIcon.classList.toggle('icon-hide');
    closeIcon.classList.toggle('icon-hide');
    editDelete.classList.toggle('btn-collapsed');
});

editIcon.addEventListener('click', function(event) {
    showcase.classList.toggle('toedit');
    showcase.classList.remove('tolist');
    menuIcon.classList.toggle('icon-hide');
    editIcon.classList.toggle('icon-hide');
    backIcon.classList.toggle('icon-hide');
});

closeIcon.addEventListener('click', function(event) {
    showcase.classList.toggle('tolist');
    showcase.classList.remove('toedit');
    menuIcon.classList.toggle('icon-hide');
    editIcon.classList.toggle('icon-hide');
    closeIcon.classList.toggle('icon-hide');
});

backIcon.addEventListener('click', function(event) {
    showcase.classList.toggle('toedit');
    showcase.classList.remove('tolist');
    menuIcon.classList.toggle('icon-hide');
    editIcon.classList.toggle('icon-hide');
    backIcon.classList.toggle('icon-hide');

    //clear fields due to cancel
    editFields.forEach(x=>(x.value = ''));

    //if within add element functionality
    if (editTitle.textContent == "Nuevo Elemento"){
        editTitle.textContent = "Editar";
        editDelete.classList.toggle('btn-collapsed');
    }
});

// adding elements option 
addElem.addEventListener('click', function(event){
    editTitle.textContent = "Nuevo Elemento";
    
    editFields.forEach(x=>(x.value = ''));
    
    showcase.classList.toggle('toedit');
    showcase.classList.remove('tolist');
    closeIcon.classList.toggle('icon-hide');
    backIcon.classList.toggle('icon-hide');

    event.preventDefault();
    event.stopImmediatePropagation();
});

// submiting data within the add/edit form 
// btnSave.addEventListener('click', function(event) {
//     const filled = editFields
//     const reducer = (accumulator, current) => (accumulator && current);
// })