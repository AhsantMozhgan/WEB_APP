let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
// console.log(backdrop)
// backdrop.style.display = "block"

let selectPlanBtn = document.querySelectorAll('.plan button')

// console.log(selectPlanBtn)

for (let i = 0; i < selectPlanBtn.length; i++) {
    // selectPlanBtn[i].addEventListener('click', function() {
    selectPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}