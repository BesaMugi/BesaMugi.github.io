const containerEl = document.querySelector('.container')

const passwordGen = document.createElement('input')
passwordGen.classList.add('generate_text')
passwordGen.setAttribute('placeholder', 'Тут будет ваш пароль')
passwordGen.addEventListener('keypress', (e) => {
    e.preventDefault()
})
passwordGen.addEventListener('focus', (e) => {
    navigator.clipboard.writeText(passwordGen.value)
})

const copyButton = document.createElement('button')
copyButton.classList.add('copy-password')
copyButton.innerText = 'Скопировать'
copyButton.addEventListener('click', (e) => {
    passwordGen.select()
    passwordGen.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(passwordGen.value)
})

const generateButton = document.createElement('button')
generateButton.classList.add('generate')
generateButton.innerText = 'Сгенерировать пароль'
generateButton.addEventListener('click', (e) => {
    let password = generatePassword(4)
    passwordGen.value = password
})

containerEl.appendChild(passwordGen)
containerEl.appendChild(copyButton)
containerEl.appendChild(generateButton)

function generatePassword(length){
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*/?@';
    
    let newPassword1 = '';
    let newPassword2 = '';
    let newPassword3 = '';

    for (let i = 0; i < length; i++){

        const randomPassword = alphabet[Math.floor(Math.random() * alphabet.length)]
        newPassword1 += randomPassword
    }
    for (let i = 0; i < length; i++){

        const randomPassword = alphabet[Math.floor(Math.random() * alphabet.length)]
        newPassword2 += randomPassword
    }
    for (let i = 0; i < length; i++){

        const randomPassword = alphabet[Math.floor(Math.random() * alphabet.length)]
        newPassword3 += randomPassword
    }

    return `${newPassword1}-${newPassword2}-${newPassword3}`
}

console.log(generatePassword(4))