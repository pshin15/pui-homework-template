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

// calculatePrice();


// add to the UI
// let option = document.createElement('option');
// option.innerHTML = glazingPriceTotal;
// option.text = glazingPriceTotal;
// selectElement.add(option);

// selectElement.addEventListener('change', onSelectValueChange);
