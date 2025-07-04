document.getElementById('btn-id').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("Clicked");
    const phoneNumber = document.getElementById('phone');
    const pinNumber = document.getElementById('pin');
    console.log(phoneNumber.value);
    console.log(pinNumber.value);

    if(phoneNumber.value === '015' && pinNumber.value === '227'){
        console.log('Welcome');
        window.location.href = ('/home.html');
    }
    else{
        console.log('Wrong Phone Number of Pin');
    }
})