// console.log('Hello word')
let backdrop = document.querySelector('.backdrop')
// console.log(backdrop)
let modal = document.querySelector('.modal')

let selectPlanBtn = document.querySelectorAll('.plan button')
// console.log(selectPlanBtn)
let modalClosBtn = document.querySelector('.modal__action—-negative')


// for (let i = 0; i < selectPlanBtn.length; i++) {
//     selectPlanBtn[i].addEventListener('click', function() {

//     })
// }

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
    })
}

backdrop.addEventListener('click', closeModel)
modalClosBtn.addEventListener('click', closeModel)
function closeModel() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}