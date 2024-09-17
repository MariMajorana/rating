
function pageIndex(){

    const buttons = document.querySelectorAll('.button')

    let choice = 1

    localStorage.setItem('choice', JSON.stringify(choice))

    buttons.forEach((button,index) => {
        button.addEventListener('click',() => {
            let buttonActive = document.querySelector('.active')
            buttonActive.classList.remove('active')

            button.classList.add('active')

            buttonActive = document.querySelector('.active')

            choice = buttonActive.textContent

            localStorage.setItem('choice', JSON.stringify(choice))
            
        })
    })
}

function pageThanks(){
    
    const textSelected = document.querySelector('.selected')

    let index = JSON.parse(localStorage.getItem('choice'))

    textSelected.innerHTML = "You selected "  + [index] + " out of 5"
}