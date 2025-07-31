
const about = () => {
    const content = document.querySelector('#content')

    content.innerHTML = ''
    
    const contactD = document.createElement('div')
    contactD.classList.add('contact')

    const contactTxt = document.createElement('h1')
    contactTxt.textContent = 'BOOKING OR ASKING'
    contactTxt.classList.add('contact-text')

    const name = document.createElement('h3')
    name.textContent = 'Mr. Ba Gao'
    name.classList.add('name')

    const infoUl = document.createElement('ul')
    const title = document.createElement('li')
    title.textContent = 'Restaurant Supervisor'
    const number = document.createElement('li')
    number.textContent = '+84 111343333'
    const email = document.createElement('li')
    email.textContent = 'pleaseDontCallTheNumber@gmail.com'
    infoUl.appendChild(title)
    infoUl.appendChild(number)
    infoUl.appendChild(email)

    contactD.appendChild(contactTxt)
    contactD.appendChild(name)
    contactD.appendChild(infoUl)

    content.appendChild(contactD)
}

export { about }