let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

    calculatePrice(){
        let selectedGlazing = selectedGlazingOption.value;
        let selectedPackSize = selectedPackSizeOption.value;

        let glazingPrice = glazingOptions[selectedGlazing];
        let packSize = packOptions[selectedPackSize];

        console.log("clicked");
        final_price = (basePrice + glazingPrice.price) * packSize.priceadapt;
        console.log(final_price);

        totalprice.textContent = `$${final_price.toFixed(2)}`;
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

console.log(cart);


// function addtoCart() {
//     const rollInstance = new Roll(rollType, rollGlazing, packSize, basePrice);
//     cart.push(rollInstance);
//     console.log(cart);
// }

// let cartItems = document.querySelector(".cart-items");

function createElement(roll){
    let template = document.querySelector(".cart-template");
 
    let clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".one-cart-item-price-remove")

    // let rollImage = document.querySelector("#shopping-cart-img");

    let itemName = document.querySelector(".item-name");
    console.log(itemName);
    
    let itemGlazing = document.querySelector(".item-glazing");
    let itemPackSize = document.querySelector(".item-pack-size");
    let itemPrice = document.querySelector(".item-price");

    // rollImage.src = "../assets/products/" + roll.type.toLowerCase() + "-cinnamon-roll.jpg";

    itemName.innerHTML = roll.type + " Cinnamon Roll";
    console.log(itemName);
}

createElement(original);

for (let roll in cart){
    createElement(roll)
}