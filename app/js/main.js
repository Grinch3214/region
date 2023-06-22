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