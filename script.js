const control = document.querySelectorAll('.control');
let currentItem = 0
const item = document.querySelectorAll('.item');
const maxItem = item.length

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('left')
        if(isLeft) {
            currentItem -= 2
        } else {
            currentItem += 2
        }

        if (currentItem >= maxItem) {
            currentItem = 0
        } else if (currentItem < 0) {
            currentItem = maxItem - 1
        }

        item.forEach(item => item.classList.remove('current-item'))

        item[currentItem].scrollIntoView({
            block: "nearest",
            inline: "start",
            behaviour: "smooth",
        })

        item[currentItem].classList.add('current-item');
        item[currentItem+1].classList.add('current-item');
    })
})