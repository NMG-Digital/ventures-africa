const header = document.querySelector(".header")

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
