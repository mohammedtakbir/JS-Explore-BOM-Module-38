launchAlert = () => {
    alert('testing alert')
}
launchConfirm = () => {
    const decession = confirm('are you there')
    if(decession){
        alert('stay there')
    }else{
        alert('ok')
    }
}
userInfo = () => {
    const info = prompt('Tel us your name')
    if(!! info){
        console.log('welcome ' + info)
    }
}