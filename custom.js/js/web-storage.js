const getInputById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    return inputValue;
}
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}
document.getElementById('btn-add-name').addEventListener('click', () => {
    const name = getInputById('name-field');
    setLocalStorage('name', name);
})
document.getElementById('btn-remove-name').addEventListener('click', () => {
    localStorage.removeItem('name');
})
document.getElementById('btn-age-name').addEventListener('click', () => {
    const age = getInputById('age-field');
    setLocalStorage('age', age);
})
document.getElementById('btn-remove-age').addEventListener('click', () => {
    localStorage.removeItem('age');
})
function clear(){
    localStorage.clear()
}
document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear()
})