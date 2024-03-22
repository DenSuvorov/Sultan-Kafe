var modal = document.getElementById('myModal-1')
var openModal = document.getElementById('openModal-1')
var closeBtn = document.getElementsByClassName('close-1')[0]

openModal.onclick = function () {
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden'
}

closeBtn.onclick = function () {
	modal.style.display = 'none'
	document.body.style.overflow = 'auto'
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
		document.body.style.overflow = 'auto'
	}
}

let currentSlide = 1
const totalSlides = 4 // Общее количество слайдов
const interval = 6000 // Интервал смены слайдов (в миллисекундах)

function showNextSlide() {
	currentSlide = (currentSlide % totalSlides) + 1
	document.getElementById('r' + currentSlide).checked = true
}

setInterval(showNextSlide, interval)

let cart = {}

function showPrice(productId) {
	// Your code to display product price
}

var accordions = document.getElementsByClassName('accordion')
var i

for (i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener('click', function () {
		this.classList.toggle('active')
		var panel = this.nextElementSibling
		if (panel.style.display === 'block') {
			panel.style.display = 'none'
		} else {
			panel.style.display = 'block'
		}
	})
}

function addToCart(productId) {
	const price = parseFloat(
		document
			.getElementById('price' + productId)
			.textContent.replace(/\./g, '')
			.replace(',', '.')
	)
	const productName = document
		.getElementById('product' + productId)
		.getElementsByTagName('h2')[0]
		.innerText.split(' - ')[0]
		.trim()

	if (cart[productName]) {
		cart[productName].quantity++
	} else {
		cart[productName] = {
			name: productName,
			price: price,
			quantity: 1,
		}
	}
	updateCartDisplay()
	moveCartButtonToLeft()
}

function decrementQuantity(productName) {
	if (cart[productName] && cart[productName].quantity > 1) {
		cart[productName].quantity--
		updateCartDisplay()
	}
}

function incrementQuantity(productName) {
	if (cart[productName]) {
		cart[productName].quantity++
		updateCartDisplay()
	}
}

function removeFromCart(productName) {
	delete cart[productName]
	updateCartDisplay()
}

function updateCartDisplay() {
	const cartItemsDiv = document.getElementById('cartItems')
	cartItemsDiv.innerHTML = ''
	let totalQuantity = 0
	let totalPrice = 0

	Object.values(cart).forEach(item => {
		totalQuantity += item.quantity
		totalPrice += item.price * item.quantity
		const itemDiv = document.createElement('div')
		itemDiv.innerHTML = `
            <p class="product-title">${
							item.name
						} - ${item.price.toLocaleString()}</p>
            <div class="basket-text"><button class="decrement-button" onclick="decrementQuantity('${
							item.name
						}')">-</button>${
			item.quantity
		}<button class="increment-button" onclick="incrementQuantity('${
			item.name
		}')">+</button>
            <p class="second-price">${(
							item.price * item.quantity
						).toLocaleString()}</p>
            <button class="remove-button" onclick="removeFromCart('${
							item.name
						}')">o'chirish</button></p></div>`
		cartItemsDiv.appendChild(itemDiv)
	})

	const deliveryCost = totalPrice * 0.1
	const totalCost = totalPrice + deliveryCost

	const totalDiv = document.createElement('div')
	totalDiv.innerHTML = `
        <div class="basket-count">
         <p class="price">To'lov: ${totalPrice.toLocaleString()}</p>
        <p class="delivery">Xizmat xakki (10%): ${deliveryCost.toLocaleString()}</p>
        <p class="total-price">Umumiy to'lov: ${totalCost.toLocaleString()}</p>
        </div>
    `
	cartItemsDiv.appendChild(totalDiv)

	document.getElementById('cartItemCount').textContent = totalQuantity

	const cartButton = document.getElementById('cartButton')

	if (totalQuantity === 0) {
		moveCartButtonToOriginalPosition()
	}
}

function openCart() {
	const modal = document.getElementById('cartModal')
	modal.style.display = 'block'
	window.addEventListener('click', outsideClickHandler)
}

function closeModal() {
	const modal = document.getElementById('cartModal')
	modal.style.display = 'none'
	window.removeEventListener('click', outsideClickHandler)
}

function outsideClickHandler(event) {
	const modal = document.getElementById('cartModal')
	if (event.target === modal) {
		modal.style.display = 'none'
		window.removeEventListener('click', outsideClickHandler)
	}
}

function moveCartButtonToLeft() {
	const cartButton = document.getElementById('cartButton')
	cartButton.style.transition = 'transform 0.5s ease-in-out'
	cartButton.style.transform = 'translateX(-110px)'
}

function moveCartButtonToOriginalPosition() {
	const cartButton = document.getElementById('cartButton')
	cartButton.style.transition = 'transform 0.5s ease-in-out'
	cartButton.style.transform = 'translateX(0)'
}

// Add showPrice() function calls after page load
window.onload = function () {
	showPrice(1)
	showPrice(2)
	showPrice(3)
	showPrice(4)
	showPrice(5)
	showPrice(6)
	showPrice(7)
	showPrice(8)
	showPrice(9)
	showPrice(10)
	showPrice(11)
	showPrice(12)
	showPrice(13)
	showPrice(14)
	showPrice(15)
	showPrice(16)
	showPrice(17)
	showPrice(18)
	showPrice(19)
	showPrice(20)
	showPrice(21)
	showPrice(22)
	showPrice(23)
	showPrice(24)
	showPrice(25)
	showPrice(26)
	showPrice(27)
	showPrice(28)
	showPrice(29)
	showPrice(30)
	showPrice(31)
	showPrice(32)
	showPrice(33)
	showPrice(34)
	showPrice(35)
	showPrice(36)
	showPrice(37)
	showPrice(38)
	showPrice(39)
	showPrice(40)
	showPrice(41)
	showPrice(42)
	showPrice(43)
	showPrice(44)
	showPrice(45)
	showPrice(46)
	showPrice(47)
	showPrice(48)
	showPrice(49)
	showPrice(50)
	showPrice(51)
	showPrice(52)
	showPrice(53)
	showPrice(54)
	showPrice(55)
	showPrice(56)
	showPrice(57)
	showPrice(58)
	showPrice(59)
	showPrice(60)
	showPrice(61)
	showPrice(62)
	showPrice(63)
	showPrice(64)
	showPrice(65)
	showPrice(66)
	showPrice(67)
	showPrice(68)
	showPrice(69)
	showPrice(70)
	showPrice(71)
	showPrice(72)
}
