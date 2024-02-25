const questionEl = document.getElementsByClassName('question-top')
const upDown = document.querySelector('i')

const nodequestionEl = Array.from(questionEl)

nodequestionEl.forEach(function (acc) {
    acc.addEventListener('click', function () {
        
        if (acc.classList.contains('question-top')) {
            acc.classList.toggle('active')
        }

            const nextElement = this.nextElementSibling;

        if (nextElement.style.maxHeight) {
            nextElement.style.maxHeight = null
        } else {
            nextElement.style.maxHeight = nextElement.scrollHeight + 'px'
        }

    })


})


// 
//         upDown.classList.toggle('rotate')



// const clik = e.target

// console.log(upDown)
// if (clik.classList.contains('question-top')) {
   
// }
