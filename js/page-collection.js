class Carousel {

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisibles : 1,
            loop: false,
        }, options)
        let children = [].slice.call(element.children)
        this.isMobile = true,
        this.currentItem = 0
        this.moveCallbacks = []

        // modification du DOM
        this.root = this.createDivWithClass('caroussel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.setAttribute('tabindex', '0') // pour l'accesibilité pour ceux qui n'ont pas de souris
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
       
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)  
            return item         
        })
        this.setStyle()
        this.createNavigation()
        
        // Evenements :
        this.moveCallbacks.forEach(callback => callback(0))
        this.onWindowResize ()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.root.addEventListener('keyup', e => {
            if(e.key === 'ArrowRight' ||  e.key === 'Right') {
                this.next()
            } else if (e.key === 'ArrowLeft' ||  e.key === 'Left') {
                this.prev()
            }
        })
    }

    // applique les bonnes dimensions aux éléments du carousel 
    setStyle () {
        let ratio = this.items.length / this.slidesVisibles
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisibles) / ratio) + "%") 
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true) {
            return
        }
        this.onMove (index => {
            if(index === 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.items[this.currentItem + this.slidesVisibles] === undefined) {
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
            }
        })
    }

    next () {
       this.goToItem( this.currentItem + this.slidesToScroll)
    }

    prev () {
        this.goToItem( this.currentItem - this.slidesToScroll)
    }


    // méthode qui permet de déplacer le carousel vers l'élément ciblé
    goToItem (index) {
        if (index < 0) {
            if (this.options.loop) {
               index = this.items.length - this.slidesVisibles 
            } else {
                return
            }
        } else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisibles] === undefined && index > this.currentItem)) {
            if (this.options.loop) {
                index = 0
             } else {
                 return
             }
            
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d( '+ translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(callback => callback(index));
    }

    onMove (callback) {
        this.moveCallbacks.push(callback)
    }

    onWindowResize () {
        let mobile = window.innerWidth < 800
        if(mobile !== this.mobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(callback => callback(this.currentItem))
        }
    }

    // réorganisation du html
    createDivWithClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    // pour le responsive du nombre de slide à scroller
    get slidesToScroll () {
       return this.isMobile ? 1 : this.options.slidesToScroll
    }
    // pour le responsive du nombre de slide visible
    get slidesVisibles () {
        return this.isMobile ? 1 : this.options.slidesVisibles
     }

}



new Carousel(document.querySelector('.un'), {
    slidesVisibles : 4,
    slidesToScroll: 1,
    loop: false,
})
new Carousel(document.querySelector('.deux'), {
    slidesVisibles : 4,
    slidesToScroll: 1,
    loop: false,
})
new Carousel(document.querySelector('.trois'), {
    slidesVisibles : 4,
    slidesToScroll: 1,
    loop: false,
})
new Carousel(document.querySelector('.quatre'), {
    slidesVisibles : 4,
    slidesToScroll: 1,
    loop: false,
})
new Carousel(document.querySelector('.cinq'), {
    slidesVisibles : 4,
    slidesToScroll: 1,
    loop: false,
})
new Carousel(document.querySelector('.six'), {
    slidesVisibles : 4,
    slidesToScroll: 1,
    loop: false,
})
