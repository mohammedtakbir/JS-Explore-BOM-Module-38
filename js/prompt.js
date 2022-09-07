// console.log('prompt connected')
function showAlert(){
    // alert('what is up guys')
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        alert('bigger than 5')
    }
}
askSomething = () => {
    const decession =  confirm('are you coming');
    if(decession === true){
        alert('send me 500tk in bkash')
    }else{
        console.log('DGM!')
    }
}

getUserInfo = () => {
    const userInfo = prompt('tel us your name', 500) //? here 500 is initial value
    console.log(userInfo)
    if(!! userInfo){
        console.log('welcome here ' + userInfo)
    }
}