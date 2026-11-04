
let cart = [];


// ADD TO CART

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerText =
        cart.length;

    alert(name + " Added to Cart!");

}


// SHOW CART

function showCart() {

    let items = document.getElementById("cartItems");

    items.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total += item.price;

        items.innerHTML += `
            <div class="cart-item">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;

    document.getElementById("cartSection")
        .scrollIntoView({behavior: "smooth"});

}


// REMOVE ITEM

function removeItem(index) {

    cart.splice(index, 1);

    document.getElementById("cartCount").innerText =
        cart.length;

    showCart();

}


// SEARCH

function searchProducts() {

    let value = document.getElementById("searchInput")
        .value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card) {

        let name = card.querySelector("h3")
            .innerText.toLowerCase();

        card.style.display =
            name.includes(value) ? "block" : "none";

    });

}


// CATEGORY FILTER

function filterCategory(category) {

    let cards = document.querySelectorAll(".product-card");

    let categories = {
        Electronics: [0, 1, 2, 3],
        Fashion: [4, 5],
        Home: [6],
        Books: [7]
    };

    cards.forEach(function(card, index) {

        card.style.display =
            categories[category].includes(index)
            ? "block" : "none";

    });

}


// SHOW HOME

function showHome() {

    document.querySelectorAll(".product-card")
        .forEach(card => card.style.display = "block");

    window.scrollTo(0, 0);

}


// SCROLL TO PRODUCTS

function showProducts() {

    document.getElementById("products")
        .scrollIntoView({behavior: "smooth"});

}


// LOGIN DEMO

function showLogin() {

    let name = prompt("Enter your name");

    if (name) {
        alert("Welcome " + name);
    }

}

