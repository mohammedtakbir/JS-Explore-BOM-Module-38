const getInputValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quntity-field');
    // console.log(product, quantity)
    displayProduct(product, quantity);
    saveItemToLocalStorage(product, quantity);
    //* set to local storage
    // localStorage.setItem(product, quantity)
}

const getShoppingCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart)
    }return cart;
};
const saveItemToLocalStorage = (product, quantity) => {
    let cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    console.log(cart)
    const stringify = JSON.stringify(cart);
    //* save to local storage
    localStorage.setItem('cart', stringify);
}


const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productContainer.appendChild(li);
}