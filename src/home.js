import hero from "../hero.jpg"

const home = () => {
    const content = document.getElementById('content')
        
    content.innerHTML = ''

    const homeD = document.createElement('div')
    homeD.classList.add('home')

    const img = document.createElement('img')
    img.src = hero
    img.classList.add('hero')
    homeD.appendChild(img)

    const homeTxt = document.createElement('div')
    homeTxt.classList.add('info')

    const h1 = document.createElement('h1')
    h1.textContent = 'Have A Vietnamese Dine Restaurant'
    homeTxt.appendChild(h1)

    const p = document.createElement('p')
    p.textContent = `Looking for a place that make all those local 
                    Vietnamese food that you see often? Yes! It will be served here. 
                    By our experienced chefs that only make Vietnamese food for 
                    Vietnamese through out their lifetime. You get to be a local for a meal, 
                    dive in the taste that the world crave for. Exceptional, delicious and loving.`
    homeTxt.appendChild(p)
    homeD.appendChild(homeTxt)
    

    const hourD = document.createElement('div')
    hourD.classList.add('info')
    
    const timeh1 = document.createElement('h1')
    timeh1.textContent = 'Time and Location'
    hourD.appendChild(timeh1)

    const timep = document.createElement('p')
    timep.textContent = `7am - 1pm`
    hourD.appendChild(timep)

    const locationp = document.createElement('p')
    locationp.textContent = `22 Pho Co Ha Noi`
    hourD.appendChild(locationp)

    homeD.appendChild(hourD)


    content.appendChild(homeD)
}

export { home }
