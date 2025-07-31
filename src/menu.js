
const menu = () => {
    const content = document.querySelector('#content')

    content.innerHTML = ''

    // food
    const foodD = document.createElement('div')
    foodD.classList.add('food')
    
    const foodTxt = document.createElement('h1')
    foodTxt.textContent = 'FOOD'
    foodTxt.classList.add('food-text')

    const foodul = document.createElement('ul')
    const banhmi = document.createElement('li')
    banhmi.textContent = 'Banh Mi'
    const pho  = document.createElement('li')
    pho.textContent = 'Pho'
    const bun = document.createElement('li')
    bun.textContent = 'Bun'
    const mien = document.createElement('li')
    mien.textContent = 'Mien'
    foodul.appendChild(banhmi)
    foodul.appendChild(pho)
    foodul.appendChild(bun)
    foodul.appendChild(mien)

    foodD.appendChild(foodTxt)
    foodD.appendChild(foodul)

    // beverage
    const beverageD = document.createElement ('div')
    beverageD.classList.add('beverage')

    const bvrTxt = document.createElement('h1')
    bvrTxt.textContent = 'BEVERAGE'
    bvrTxt.classList.add('beverage-text')

    const bvrUl = document.createElement('ul')
    const mia = document.createElement('li')
    mia.textContent = 'Mia Da'
    const dua = document.createElement('li')
    dua.textContent = 'Dua Suong Sa'
    bvrUl.appendChild(mia)
    bvrUl.appendChild(dua)

    beverageD.appendChild(bvrTxt)
    beverageD.appendChild(bvrUl)

    content.appendChild(foodD)
    content.appendChild(beverageD)
}

export { menu }