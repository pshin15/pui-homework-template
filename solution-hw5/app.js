cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }



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

}

// 4 new Roll objects
let original = new Roll("Original", "Sugar Milk", 1, 2.49); 
let walnut = new Roll("Walnut", "Vanilla Milk", 12, 39.9); 
let raisin = new Roll("Raisin", "Sugar Milk", 3, 8.97);
let apple = new Roll("Apple", "Original", 3, 10.47);


function addtoCart() {
    const rollInstance = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(rollInstance);
    console.log(cart);
}

function displayCart(Roll) {

}