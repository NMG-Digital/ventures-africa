const header = document.querySelector(".header")
const mobileMenu = document.querySelector("#mobile-menu")
const body = document.querySelector("body")
const scrollLinks = document.querySelectorAll(".navigation-list li a")

function scrollHeader() {
    const headerHeight = header.getBoundingClientRect().height

    document.addEventListener("scroll", function (event) {
        const initialScrollPos = window.pageYOffset
        
        header.classList.remove("scrolled-header")
        
        if (initialScrollPos >= headerHeight) {
            header.classList.add("scrolled-header")
        }
    })
}

scrollHeader()

mobileMenu.addEventListener("click", function (event) {
    body.classList.toggle("menu-open")
})

//navigation
if (scrollLinks) {
    scrollLinks.forEach((link) => {
		link.addEventListener("click", function (event) {
			event.preventDefault()
			const id = event.currentTarget.getAttribute("href").slice(1)
			const element = document.getElementById(id);
			
			const headerHeight = header.getBoundingClientRect().height;
            console.log("hi")
			
			let position = element.offsetTop - headerHeight;

			window.scrollTo({
				left: 0,
                top: position,
                behavior: 'smooth'
            });

            body.classList.remove("menu-open")
        })
     
	})
}

