import { renderAll, myClock } from "./utility.js"
import todoFunctions from "./todo.js"



setInterval(myClock, 1000)
todoFunctions()

fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature`)
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url( ${data.urls.regular} )`
    document.getElementById('autor').textContent =  `Wallpaper By: ${data.user.name}`  
})
.catch( err => {
    document.body.style.backgroundImage = `url(img/alt-img1.jpg)`
})
renderAll()

navigator.geolocation.getCurrentPosition( position => {
    fetch(`
        https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial
    `)
    .then(res => {
        if(!res.ok ) {
            throw Error('location data not found')
        }
        return res.json()
    })
    .then(data => {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.querySelector('.weather-con').innerHTML = `
            <div class="weather-icon-con">
                <img src=${iconUrl} />
                <span>${Math.floor(data.main.temp)}º</span>
            </div>
            <div class="weather-name">   
                <span>${data.name},</span>
                <span>${data.sys.country}</span>
            </div>    

        `
    })
    .catch(err => console.error(err))
})

document.querySelector('.todo').addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'block'
})

document.querySelector('.close-todo').addEventListener('click', () => {
    document.querySelector('.overlay').style.display = ''
})