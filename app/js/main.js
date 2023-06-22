// on scroll header
(() => {
	let scrollPos = window.scrollY
	const header = document.querySelector('.header')
	const scrollChange = 10

	const addClassOnScroll = () => header.classList.add('active')
	const removeClassOnScroll = () => header.classList.remove('active')

	window.addEventListener('scroll', () => {
		scrollPos = window.scrollY

		if (scrollPos >= scrollChange) {
			addClassOnScroll()
		} else {
			removeClassOnScroll()
		}
	})
})();

// burger menu
(() => {
	const html = document.querySelector('html')
	const burgerMenu = document.querySelector('.header__burger')
	const header = document.querySelector('.header')
	const navigation = document.querySelector('.header__nav')

	const toggleClassOnClick = (selector, nameclass) => {
		selector.classList.toggle(`${nameclass}`)
	}

	burgerMenu.addEventListener('click', () => {
		toggleClassOnClick(html, 'lock')
		toggleClassOnClick(burgerMenu, 'active')
		toggleClassOnClick(header, 'show')
		toggleClassOnClick(navigation, 'active')
	})
})();