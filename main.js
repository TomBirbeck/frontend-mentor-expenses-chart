const chart = document.querySelector('.chart')
const bars = document.querySelectorAll('.chart-bar')
const amount = document.querySelectorAll('.chart-bar-total')
const res = await fetch ('./data.json')
const data = await res.json()
const date = new Date().getDay()


const createBars = (item) => {
    for (let i = 0; i < data.length; i++) {
        const height = Math.round((item[i].amount/100) * 12)
        if (date === i + 1){
            bars[i].classList.add('today')
        }
        bars[i].style.height = `${height}rem`
        amount[i].textContent = '$'+ data[i].amount
        bars[i].addEventListener('mouseenter', () => {amount[i].classList.remove('hidden')})
        bars[i].addEventListener('mouseleave', () => {amount[i].classList.add('hidden')})
   }
}

createBars(data)
