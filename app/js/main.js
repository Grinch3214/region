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
	const links = document.querySelectorAll('.header__link')

	const toggleClassOnClick = (selector, nameclass) => {
		selector.classList.toggle(`${nameclass}`)
	}

	const closeMenu = () => {
    toggleClassOnClick(burgerMenu, 'active')
    toggleClassOnClick(navigation, 'active')
    toggleClassOnClick(html, 'lock')
    toggleClassOnClick(header, 'show')
  }

	burgerMenu.addEventListener('click', () => {
		closeMenu()
	})


	links.forEach(item => {
		item.addEventListener('click', (event) => {
			if(burgerMenu.classList.contains('active') && navigation.classList.contains('active')) {
				closeMenu()
			}
		})
	})
	
})();

(() => {
	const accordion = document.querySelector('.tournament__accordion')
	const accordionHeader = document.querySelectorAll('.tournament__accordion-title')
	// const accordionContent = document.querySelectorAll('.tournament__accordion-content')

	if(accordion) {
		accordionHeader.forEach((elem, id) => {
			elem.addEventListener("click", function (event) {
					let list = this.nextElementSibling;
					if (!list.style.maxHeight) {
						elem.classList.add('active');
						list.style.maxHeight = list.scrollHeight + "px";
					} else {
						elem.classList.remove('active');
						list.style.maxHeight = null;
					}
					removeActiveAccordion(id)
			});
		});
	
		function removeActiveAccordion(inx) {
			accordionHeader.forEach((element, index) => {
				if(inx != index) {
					let lst = element.nextElementSibling;
					element.classList.remove('active');
					lst.style.maxHeight = null;
				}
			})
		}
	}
})();

// ?TABS

(() => {
	const tabItem = document.querySelectorAll('.tables__tabs-item')
	const tabContent = document.querySelectorAll('.tables__tabs-content')

	tabItem.forEach((tab, index) => {
		tab.addEventListener('click', (e) => {
			tabContent.forEach(content => {
				content.classList.remove('active')
			})
			tabItem.forEach(tab => {
				tab.classList.remove('active')
			})
			tabItem[index].classList.add('active')
			tabContent[index].classList.add('active')
		})
	})
})();
