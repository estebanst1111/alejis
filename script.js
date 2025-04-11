const urlSearchParams = new URLSearchParams(window.location.search)
const messageCustom = urlSearchParams.get('message')
if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')
const gifElement = document.querySelector('.gif-inicial')
const audio = document.querySelector('#audio')

btnCloseElement.disabled = true

// 💌 Intro
const introScreen = document.getElementById('intro')
const startButton = document.getElementById('start')
const mainContent = document.getElementById('mainContent')

startButton.addEventListener('click', () => {
  // reproducir canción
  if (audio) audio.play()

  // transición suave
  introScreen.style.opacity = '0'
  introScreen.style.transition = 'opacity 0.8s ease'
  
  setTimeout(() => {
    introScreen.style.display = 'none'
    mainContent.style.display = 'block'
    // aplicar clase visible con transición
    setTimeout(() => {
      mainContent.classList.add('visible')
    }, 50)
  }, 800)
})

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false

  if (gifElement) gifElement.classList.add('hidden')

  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(() => {
    coverElement.style.zIndex = -1

    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  }, 500)
})

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')

  setTimeout(() => {
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'

    if (gifElement) gifElement.classList.remove('hidden')

    // ¡Ya no detenemos la música!
  }, 500)
})
