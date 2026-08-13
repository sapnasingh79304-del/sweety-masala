// ===============================
// SWEETY MASALA CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("sweetyCart")) || [];


// ===============================
// ADD TO CART
// ===============================

function addToCart(productName, price, button) {

    const card = button.closest(".product-card");

    const sizeSelect = card.querySelector(".product-size");

    const size = sizeSelect.value;


    const existingProduct = cart.find(
        item =>
            item.name === productName &&
            item.size === size
    );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            name: productName,

            price: price,

            size: size,

            quantity: 1

        });

    }


    saveCart();

    alert(
        productName +
        " (" +
        size +
        ") cart me add ho gaya! 🛒"
    );

}


// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        "sweetyCart",
        JSON.stringify(cart)
    );

}


// ===============================
// GET CART
// ===============================

function getCart() {

    return JSON.parse(
        localStorage.getItem("sweetyCart")
    ) || [];

}


// ===============================
// REMOVE PRODUCT
// ===============================

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();

}


// ===============================
// CHANGE QUANTITY
// ===============================

function changeQuantity(index, change) {

    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart();

    displayCart();

}


// ===============================
// CART TOTAL
// ===============================

function getCartTotal() {

    return cart.reduce(

        (total, item) => {

            return total +
                (item.price * item.quantity);

        },

        0

    );

}


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    const cartContainer =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    if (!cartContainer) {

        return;

    }


    cart = getCart();


    if (cart.length === 0) {

        cartContainer.innerHTML = `
        
            <div class="empty-cart">

                <h2>🛒 Cart खाली है</h2>

                <p>
                    Products page से product add करें।
                </p>

                <a
                    href="products.html"
                    class="btn primary-btn">

                    Products देखें

                </a>

            </div>

        `;


        if (cartTotal) {

            cartTotal.textContent = "₹0";

        }

        return;

    }


    cartContainer.innerHTML = "";


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-product-info">

                <h3>${item.name}</h3>

                <p>
                    Size: <strong>${item.size}</strong>
                </p>

                <p>
                    Price: ₹${item.price}
                </p>

            </div>


            <div class="cart-quantity">

                <button
                    onclick="changeQuantity(${index}, -1)">

                    −

                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="changeQuantity(${index}, 1)">

                    +

                </button>

            </div>


            <div class="cart-item-total">

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>


            <button
                class="remove-cart"
                onclick="removeFromCart(${index})">

                ❌ Remove

            </button>

        `;


        cartContainer.appendChild(cartItem);

    });


    if (cartTotal) {

        cartTotal.textContent =
            "₹" + getCartTotal();

    }

}


// ===============================
// CART COUNT
// ===============================

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");


    if (!cartCount) {

        return;

    }


    const totalItems =
        cart.reduce(

            (total, item) =>
                total + item.quantity,

            0

        );


    cartCount.textContent =
        totalItems;

}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        cart = getCart();

        displayCart();

        updateCartCount();

    }
);
