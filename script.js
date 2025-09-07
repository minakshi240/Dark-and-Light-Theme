const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')


fullDarkModeCheckbox.addEventListener('change', (e) => {
  if(fullDarkModeCheckedbox.checked) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked
  if (containedDarkModeCheckbox.checked) {
    container.classList.add('dark')
  } else {
    container.classList.remove('dark')
  }
})

function changeContainedDarkMode() {
  if(containedDarkModeCheckbox.checked) {
    


 containedDarkModeCheckbox.addEventListener('change', () => {
  if(containedDarkModeCheckbox.checked) {
    container.classList.add('dark')
  } else {
    container.classList.remove('dark')
  }
})


