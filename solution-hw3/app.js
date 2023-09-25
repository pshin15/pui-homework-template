// object for  price adaptations based on glazing option
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

let packOptions = {
    1: {
        price: 1, 
        displayname: "1"
    },
    3: {
        price: 3, 
        displayname: "3"
    },
    6: {
        price: 6, 
        displayname: "6"
    },
    12: {
        price: 12, 
        displayname: "12"
    }
}

// glazingOptions.sugarmilk.price;

let basePrice = 2.49;
let glazingDropdown = document.getElementById("glazing-dropdown");
let packDropdown = document.getElementById("pack-dropdown");

//loop through the object. for every glzing option, we will create an <option> element and add to <select>
const optionarray = Object.entries(glazingOptions);

for (element of optionarray){
    console.log(element[1]);
    let newoption = document.createElement('option');
    let display = document.createTextNode(element[1].displayname);
    newoption.appendChild(display);
    newoption.setAttribute('value', element[0]);
    glazingDropdown.appendChild(newoption);
}

const packarray = Object.entries(packOptions);

for (element of packarray){
    console.log(element[1]);
    let newpackoption = document.createElement('option');
    let display = document.createTextNode(element[1].displayname);
    newpackoption.appendChild(display);
    newpackoption.setAttribute('value', element[0]);
    packDropdown.appendChild(newpackoption);
}


function recompute(){
    console.log("clicked");

}

function calculatePrice(){
    final_price = (basePrice + glazingPrice) * packPrice
}

// add to the UI
// let option = document.createElement('option');
// option.innerHTML = glazingPriceTotal;
// option.text = glazingPriceTotal;
// selectElement.add(option);

// selectElement.addEventListener('change', onSelectValueChange);
