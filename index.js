const inputName = variableCreator('inputName');
const inputEmail = variableCreator('inputEmail');
const inputAddress = variableCreator('inputAddress');
const inputCity = variableCreator('inputCity');
const inputZip = variableCreator('inputZip');
const buyerTime = variableCreator('buyer-time');
const formSubmit = variableCreator('form-submit');
const buyerInfo = variableCreator('buyer-details');
const buyerAddressInfo = variableCreator('buyer-address');
const tableBody = variableCreator('table-body');
const inputProductName = variableCreator('product-name');
const inputProductPrice = variableCreator('product-price');
const inputProductQuantity = variableCreator('product-quantity');
const productButton = variableCreator('product-button');
const tax = variableCreator('tax');
const subTotal = variableCreator('sub-total');
const grandTotalId = variableCreator('grand-total');
let grand = 0;
formSubmit.addEventListener('click', function (event) {
    let nameBuyer = myInputValue(inputName);
    let emailBuyer = myInputValue(inputEmail);
    let buyerAddress = myInputValue(inputAddress);
    let buyerCity = myInputValue(inputCity);
    let buyerZip = myInputValue(inputZip);

    // input value   
    if (nameBuyer == '' || emailBuyer == '' || buyerAddress == '' || buyerCity == '' || buyerZip == '') {
        alert('One or more fields are empty');
    } else {
        // time
        let localTime = time();
        let timeParagraph = paragraphElementsCreator();
        timeParagraph.innerText = localTime;
        buyerTime.appendChild(timeParagraph);
        console.log(timeParagraph);
        // time end
        const buyerEmail = paragraphElementsCreator();
        const buyerName = paragraphElementsCreator();
        const buyerCityName = paragraphElementsCreator();
        const buyerZipName = paragraphElementsCreator();
        const buyerAddressName = paragraphElementsCreator();
        buyerEmail.innerText = emailBuyer;
        buyerName.innerText = nameBuyer;
        buyerCityName.innerText = buyerCity;
        buyerZipName.innerText = buyerZip;
        buyerAddressName.innerText = buyerAddress;
        buyerInfo.appendChild(buyerName);
        buyerInfo.appendChild(buyerEmail);
        buyerInfo.appendChild(buyerCityName);
        buyerInfo.appendChild(buyerZipName);
        buyerAddressInfo.appendChild(buyerAddressName);
        disableField(inputName);
        disableField(inputEmail);
        disableField(inputAddress);
        disableField(inputCity);
        disableField(inputZip);
    }
    // input value ends
})
let count = 0;
productButton.addEventListener('click', function (event) {
    let nameProduct = myInputValue(inputProductName);
    let priceProduct = myInputValue(inputProductPrice);
    let quantityProduct = myInputValue(inputProductQuantity);
    let tableRow = document.createElement('tr');
    let productName = tableDataCreator(nameProduct);
    let productPrice = tableDataCreator(priceProduct);
    let productPiecePrice=tableDataCreator(priceProduct);
    let productQuantity = tableDataCreator(quantityProduct);
    if (priceProduct > 0 && quantityProduct > 0) {
        let total = parseFloat(priceProduct) * parseFloat(quantityProduct);
        grand = grand + total;
        let taxAmount = grand * 0.2;      
        let grandTotal = grand + taxAmount;
        subTotal.innerText = grand;
        tax.innerText = taxAmount.toPrecision(2);
        grandTotalId.innerText = grandTotal;
        productPrice.innerText = total;
        ++count;
        let ID = tableDataCreator(count);
        tableRow.appendChild(ID);
        tableRow.appendChild(productName);
        tableRow.appendChild(productPiecePrice);
        tableRow.appendChild(productQuantity);        
        tableRow.appendChild(productPrice);
        tableBody.appendChild(tableRow);
    } else {
        alert('Please enter integer value greater than 0');
    }
})
// FUNCTIONS
// time function
function time() {
    let time = new Date();
    let localTime = time.toLocaleTimeString('en-BD');
    return localTime;
}
// time function end

// paragraph creator
function paragraphElementsCreator() {
    let v = document.createElement('p');
    return v;
}
// paragraph creator end

// elements creator
function variableCreator(parameter) {
    let p = document.getElementById(parameter);
    return p;
}
// elements creator end


// value returner
function myInputValue(parameter) {
    let p = parameter.value;
    parameter.value='';
    return p;
}

function tableDataCreator(parameter) {
    let p = document.createElement('td');
    p.innerText = parameter;
    return p;
}

function disableField(parameter) {
    parameter.setAttribute('disabled', true);
}

// FUNCTIONS END