const inputName= variableCreator('inputName');
const inputEmail= variableCreator('inputEmail');
const inputAddress= variableCreator('inputAddress');
const inputCity= variableCreator('inputCity');
const inputZip= variableCreator('inputZip');
const buyerTime= variableCreator('buyer-time');
const formSubmit= variableCreator('form-submit');
const buyerInfo= variableCreator('buyer-details');
const buyerAddressInfo= variableCreator('buyer-address');
const tableBody= variableCreator('table-body');
const inputProductName= variableCreator('product-name');
const inputProductPrice= variableCreator('product-price');
const inputProductQuantity= variableCreator('product-quantity');
const productButton= variableCreator('product-button');
const tax=variableCreator('tax');
const subTotal= variableCreator('sub-total');
const grandTotalId= variableCreator('grand-total');
let grand=0;
formSubmit.addEventListener('click',function(event){
    // time
let localTime=time();
let timeParagraph= paragraphElementsCreator();
timeParagraph.innerText=localTime;
buyerTime.appendChild(timeParagraph);
console.log(timeParagraph); 
// time end

// input value
let nameBuyer= myInputValue(inputName);
let emailBuyer= myInputValue(inputEmail);
let buyerAddress= myInputValue(inputAddress);
let buyerCity= myInputValue(inputCity);
let buyerZip= myInputValue(inputZip);
const buyerEmail= paragraphElementsCreator();
const buyerName= paragraphElementsCreator();
const buyerCityName= paragraphElementsCreator();
const buyerZipName= paragraphElementsCreator();
const buyerAddressName= paragraphElementsCreator();
buyerEmail.innerText= emailBuyer;
buyerName.innerText=  nameBuyer;
buyerCityName.innerText= buyerCity;
buyerZipName.innerText= buyerZip;
buyerAddressName.innerText= buyerAddress;
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
})
let count=0;
productButton.addEventListener('click',function(event){
    let nameProduct= myInputValue(inputProductName);
    let priceProduct= myInputValue(inputProductPrice);
    let quantityProduct= myInputValue(inputProductQuantity);
    let tableRow= document.createElement('tr');
    let productName= tableDataCreator(nameProduct);
    let productPrice= tableDataCreator(priceProduct);    
    let productQuantity= tableDataCreator(quantityProduct);
    let total = parseFloat(priceProduct)*parseFloat(quantityProduct);
    grand= grand+total;
    let taxAmount= grand*0.2;
    let grandTotal= grand+taxAmount;
    subTotal.innerText= grand;
    tax.innerText=taxAmount;
    grandTotalId.innerText= grandTotal;
    console.log(grand);
    productPrice.innerText=total;
    ++count;
    let ID= tableDataCreator(count);
    tableRow.appendChild(ID);
    tableRow.appendChild(productName);
    tableRow.appendChild(productQuantity);
    tableRow.appendChild(productPrice);
    tableBody.appendChild(tableRow);
})
// FUNCTIONS
// time function
function time(){
    let time= new Date();
    let localTime=time.toLocaleTimeString('en-BD');
    return localTime;
}
// time function end

// paragraph creator
function paragraphElementsCreator(){
    let v= document.createElement('p');
    return v;
}
// paragraph creator end

// elements creator
function variableCreator(parameter){
    let p=document.getElementById(parameter);
    return p;
}
// elements creator end


// value returner
function myInputValue(parameter){
    let p= parameter.value;
    return p;
}
function tableDataCreator(parameter){
    let p= document.createElement('td');
    p.className='my-table-data';
    console.log(document.getElementsByClassName('my-table-data'));
    p.innerText= parameter;
    return p;
}
function disableField(parameter){
    parameter.setAttribute('disabled',true);
}

// FUNCTIONS END

