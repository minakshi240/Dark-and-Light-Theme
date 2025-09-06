const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')

fullDarkModeCheckbox.addEventListener('change', (e) => {
  if(fullDarkModeCheckedbox.checked) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})
