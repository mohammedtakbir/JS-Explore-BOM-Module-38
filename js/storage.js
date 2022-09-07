document.getElementById('btn-add-name').addEventListener('click', () => {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    setToStorage('Name', nameValue)
})
document.getElementById('btn-add-age').addEventListener('click', () => {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    setToStorage('Age', ageValue)
})
setToStorage = (key, value) => {
    localStorage.setItem(key, value);
}
document.getElementById('btn-remove-name').addEventListener('click', () => {
    localStorage.removeItem('Name')
})
document.getElementById('btn-remove-age').addEventListener('click', () => {
    localStorage.removeItem('Age');
})

document.getElementById('btn-clear-ls').addEventListener('click', () => {
    localStorage.clear()
})