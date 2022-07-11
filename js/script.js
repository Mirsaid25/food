let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

let timer = setInterval(() => {
    seconds.innerHTML--
    
    if(seconds.innerHTML == -1) {
        seconds.innerHTML = 59

        minutes.innerHTML--

        if(minutes.innerHTML == -1) {
            minutes.innerHTML = 59

            hours.innerHTML-- 

            if(hours.innerHTML == -1) {
                hours.innerHTML = 23

                days.innerHTML-- 

                if(days.innerHTML == -1) {
                    clearInterval(timer)

                    days.innerHTML = 0
                    hours.innerHTML = 0
                    minutes.innerHTML = 0
                    seconds.innerHTML = 0

                }

            }

        }

    }
    

}, 1000);




let genderParent = document.querySelector('#gender')
let gender = genderParent.querySelectorAll('.calculating__choose-item')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let age = document.querySelector('#age')
let activeBtns = document.querySelectorAll('[data-active]')
let result = document.querySelector('.calculating__result').firstChild.nextSibling


let user = {
    gender: '',
    height: 0,
    weight: 0,
    age: 0,
    activities: 1.2
}

gender.forEach(item => {
    item.onclick = () => {
        gender.forEach(a => a.classList.remove('calculating__choose-item_active'))  

        item.classList.add('calculating__choose-item_active')

        let gen = item.getAttribute('data-gen')

        user.gender = gen
    }
})


height.onkeyup = () => {
    user.height = height.value
    user.height = +user.height
}
weight.onkeyup = () => {
    user.weight = weight.value
    user.weight = +user.weight
}
age.onkeyup = () => {
   user.age = age.value 
   user.age = +user.age
}

activeBtns.forEach(item => {
    item.onclick = () => {
        activeBtns.forEach(a => a.classList.remove('calculating__choose-item_active'))

        item.classList.add('calculating__choose-item_active')
        
        let active = item.getAttribute('data-active')

        user.activities = +active

        calculate(user)
    }
})


// Для женщин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) – 161;
// Для мужчин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) + 5.

let calculate = (data) => {
    if(data.gender === 'man') {
        let calc = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5 
        calc = calc * data.activities

        result.innerHTML = Math.round(calc)
    } else {
        let calc = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) - 161 
        calc = calc * data.activities

        result.innerHTML = Math.round(calc)
    } 

}

// -----------------------------------------------------------------

let choose_food = document.querySelectorAll(".tabheader__item")
let tabcontent = document.querySelectorAll(".tabcontent")


tabcontent.forEach(item =>{
    item.style.display = "none"
})
tabcontent[0].style.display = "block"

for( let i= 0 ; i <choose_food.length ; i++){
    choose_food[i].onclick=() =>{
    choose_food.forEach(item =>{
        item.classList.remove("tabheader__item_active")
    })
    choose_food[i].classList.add("tabheader__item_active");

    tabcontent.forEach(item =>{
        item.style.display = "none"
    })
    tabcontent[i].style.display = "block"
}
}

// -------------------- modal ------------------------------------

let modal = document.querySelector(".modal")
let btn = document.querySelector(".btn_white")
let modal__close = document.querySelector(".modal__close")

btn.onclick= ()=>{
    modal.style.display = "block"
}
modal__close.onclick= ()=>{
    modal.style.display = "none"
}

// --------------------- -------------------------------------

let offer__slider_prev = document.querySelector(".offer__slider-prev")
let offer__slider_next = document.querySelector(".offer__slider-next")

let current = document.querySelector("#current")

let offer__slide = document.querySelectorAll(".offer__slide")

offer__slide.forEach(item =>{
    item.style.display = "none"
})
 
offer__slide[2].style.display = "block"

    for(let i= 1; i < offer__slide.length +1;i++){
        current.innerHTML = `0${i}`
        offer__slider_prev.onclick= () =>{
            i--
            offer__slide.forEach(item =>{
                item.style.display = "none"
            })
            
            if(i>0){
                current.innerHTML = `0${i}`
                offer__slide[i].style.display = "block"
            }
            
            console.log(i);
        }
        
        offer__slider_next.onclick= () =>{
            i++
            offer__slide.forEach(item =>{
                item.style.display = "none"
            })
            
            if(i>0){
                current.innerHTML = `0${i}`
                offer__slide[i].style.display = "block"
            }
            
            console.log(i);
        }
    }


