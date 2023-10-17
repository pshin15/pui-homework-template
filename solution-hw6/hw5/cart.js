const cart = [];

let glazingPrices = {
    'original': 0,
    'sugarmilk': 0,
    'vanillamilk': 0.5,
    'doublechocolate': 1.5
}

let packOptions = {
    1: 1, 
    3: 3, 
    6: 5,
    12: 10
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

    calculatePrice(){
        let glazingPrice = glazingPrices[this.glazing];
        let packPrice = packOptions[this.size];

        let final_price = (this.basePrice + glazingPrice) * packPrice;
        console.log(final_price);

        // totalprice.textContent = `$${final_price.toFixed(2)}`;
    }
}



// 4 new Roll objects
let original = new Roll("Original", "Sugar Milk", 1, 2.49); 
let walnut = new Roll("Walnut", "Vanilla Milk", 12, 3.49); 
let raisin = new Roll("Raisin", "Sugar Milk", 3, 2.99);
let apple = new Roll("Apple", "Original", 3, 3.49);

cart.push(original);
cart.push(walnut);
cart.push(raisin);
cart.push(apple);

// console.log(cart);



function createElement(roll){
    let template = document.querySelector(".cart-template");
    let clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".one-cart-item-price-remove");
    // console.log(rollelement);
    // let rollImage = document.querySelector("#shopping-cart-img");

    let rollImage = clone.querySelector("#shopping-cart-img");
    let itemName = clone.querySelector(".item-name");  
    let itemGlazing = clone.querySelector(".item-glazing");
    let itemPackSize = clone.querySelector(".item-pack-size");
    let itemPrice = clone.querySelector(".item-price");
    
    rollImage.src = "../assets/products/" + roll.type.toLowerCase() + "-cinnamon-roll.jpg";

    itemName.innerHTML = roll.type + " Cinnamon Roll";

    // let totalPrice = parseFloat(Roll.calculatePrice());

    let itemRemove = clone.querySelector("#item-remove");
    itemRemove.addEventListener('click', () => {
        deleteItem(roll);
    });

    let cartItems = document.querySelector(".cart-items");
    cartItems.appendChild(clone);

}

function deleteItem(roll) {
    const index = cart.indexOf(roll);
    roll.element.remove();
    cart.splice(index, 1);
}

// For each item in your cart, call your function from Step 4 and display the items on the shopping cart page
for (let roll of cart){
    createElement(roll)
}

function updateTotalPrice() {
    let totalPrice = 0;
    
    for (let roll of cart) {
        totalPrice = totalPrice + roll.calculatePrice();
    }

    const totalprice = document.querySelector(".checkout");
    totalprice.textContent = `$${totalPrice.toFixed(2)}`;
}
