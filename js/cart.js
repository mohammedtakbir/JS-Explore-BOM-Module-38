getInputValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quntity-field');
    console.log(product, quantity);

    //* display product on UI
    addProductToDisplay(product, quantity);
    saveItemToLocalStorage(product, quantity);
    //* set to local storage
    //* simple way
    // localStorage.setItem(product, quantity)
}

getshoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart;
}
saveItemToLocalStorage = (product, quantity) => {
    let cart = getshoppingCartFromLocalStorage();
    //* add product to the object as property
    cart[product] = quantity;
    // console.log(cart)
    const cartStringify = JSON.stringify(cart);
    //* save to local storage
    localStorage.setItem('cart', cartStringify);
}
//* display product and quantity to the UI
const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getshoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product]
        console.log(product, quantity)
        addProductToDisplay(product, quantity)
    }
}
displayStoredProducts()