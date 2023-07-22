const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const allNavLinks = document.querySelectorAll('.nav__link')

const toggleActive = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

allNavLinks.forEach(item => item.addEventListener('click', () => navMobile.classList.remove('nav-mobile--active')))
allNavLinks.forEach(item => item.addEventListener('click', () => burgerBtn.classList.remove('is-active')))

burgerBtn.addEventListener('click', toggleActive)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
