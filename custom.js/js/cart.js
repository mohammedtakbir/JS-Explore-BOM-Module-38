getInputValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quntity-field');
    displayProductOnUi(product, quantity);
    setItemToLocalStorage(product, quantity)
}
const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart;
}
const setItemToLocalStorage = (product, quantity) => {
    const cart = getCartFromLocalStorage();
    cart[product] = quantity;
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}

const displayProductOnUi = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}
const displayAllProduct = () => {
    const cart = getCartFromLocalStorage();
    console.log(cart)
    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity)
        displayProductOnUi(product, quantity)
    }
}
displayAllProduct();