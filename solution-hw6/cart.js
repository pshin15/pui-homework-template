// object for price adaptations based on glazing option
let glazingOptions = {
    original: {
        price: 0,
        displayname: "Keep original"
    },
    sugarmilk: {
        price: 0,
        displayname: "Sugar milk"
    },
    vanillamilk: {
        price: 0.5,
        displayname: "Vanilla milk"
    },
    doublechocolate: {
        price: 1.5,
        displayname: "Double chocolate"
    }
}
// object for price adaptations based on pack sizes option
let packOptions = {
    1: {
        priceadapt: 1, 
        displayname: "1"
    },
    3: {
        priceadapt: 3, 
        displayname: "3"
    },
    6: {
        priceadapt: 5, 
        displayname: "6"
    },
    12: {
        priceadapt: 10, 
        displayname: "12"
    }
}

let basePrice = 2.49;
let selectedGlazingOption = document.getElementById("glazing-dropdown");
let selectedPackSizeOption = document.getElementById("pack-dropdown");

let totalprice = document.querySelector(".checkout");

//loop through the object. for every glzing option, we will create an <option> element and add to <select>
const optionarray = Object.entries(glazingOptions);

for (element of optionarray){
    // console.log(element[1]);
    let newoption = document.createElement('option');
    let display = document.createTextNode(element[1].displayname);
    newoption.appendChild(display);
    newoption.setAttribute('value', element[0]);
    selectedGlazingOption.appendChild(newoption);
}

const packarray = Object.entries(packOptions);

for (element of packarray){
    // console.log(element[1]);
    let newpackoption = document.createElement('option');
    let display = document.createTextNode(element[1].displayname);
    newpackoption.appendChild(display);
    newpackoption.setAttribute('value', element[0]);
    selectedPackSizeOption.appendChild(newpackoption);
}

let glazingoptionprice = glazingOptions[selectedGlazingOption];
let packsizemultiplier = packOptions[selectedPackSizeOption];


function calculatePrice(){
    let selectedGlazing = selectedGlazingOption.value;
    let selectedPackSize = selectedPackSizeOption.value;

    let glazingPrice = glazingOptions[selectedGlazing];
    let packSize = packOptions[selectedPackSize];

    console.log("clicked");
    final_price = (basePrice + glazingPrice.price) * packSize.priceadapt;
    console.log(final_price);

    totalprice.textContent = `$${final_price.toFixed(2)}`;
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get(`roll`);

// shows respective heading for each product page
let heading = document.querySelector('#heading-title');
heading.textContent = rolls[rollType].name;
console.log(heading);

// shows respective image for each product page
let rollImage = rolls[rollType].imageFile;
let productImage = document.querySelector('.product-detail-img');
productImage.src = '../assets/products/' + rollImage;
console.log(productImage.src); 

// shows respective price for each product page
let productPrice = document.querySelector('.checkout');
productPrice.textContent = rolls[rollType].basePrice;
console.log(productPrice);


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

    calculatePrice(){
        let glazingPrice = glazingOptions[this.glazing];
        let packPrice = packOptions[this.size];

        let final_price = (this.basePrice + glazingPrice) * packPrice;
        return final_price;
        // console.log(final_price);

        // totalprice.textContent = `$${final_price.toFixed(2)}`;
    }
}

// empty array
const cart = [];
// new Roll instance
const chosenItem = new Roll(rollType, rollGlazing, packSize, basePrice);

cart.push(chosenItem);
console.log(cart);


function saveToLocalStorage() {  
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedItems', cartString);
    const savedCartJSON = localStorage.getItem('storedItems');
    const savedCart = JSON.parse(savedCartJSON);
    console.log(savedCart);
}

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('storedItem');
    const cartArray = JSON.parse(cartString);
    console.log(cartArray);
}

if (localStorage.getItem('storedItem') != null) {
    retrieveFromLocalStorage();
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


function deleteItem(roll) {
    // Assuming `roll` is the item to be removed
    const index = cart.indexOf(roll);
    if (index !== -1) {
        cart.splice(index, 1);
        // Optionally, you can also remove the item from the DOM
        roll.element.remove();
        // Update the total price
        updateTotalPrice();
    }
}


function createElement(roll){
    let template = document.querySelector(".cart-template");
    let clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".one-cart-item-price-remove");

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

    let cartItems = clone.querySelector(".cart-items");
    cartItems.appendChild(clone);
}

function populateCart() {
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.innerHTML = '';

    // For each item in your cart, call your function from Step 4 and display the items on the shopping cart page
    for (let roll of cart) {
        createElement(roll);
    }
}
  

function updateTotalPrice() {
    let totalPrice = 0;
    
    for (let roll of cart) {
        totalPrice = totalPrice + roll.calculatePrice();
    }

    const totalprice = document.querySelector(".checkout");
    totalprice.textContent = `$${totalPrice.toFixed(2)}`;
}

function addtoCart() {

    let rollGlazing = selectedGlazingOption.options[selectedGlazingOption.selectedIndex].text;
    let packSize = selectedPackSizeOption.options[selectedPackSizeOption.selectedIndex].text;
    const rollInstance = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(rollInstance);
    console.log(cart);

    // populateCart();
    // updateTotalPrice();
}
