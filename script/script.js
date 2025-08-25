// Form Functionalities 
document.getElementById('form-btn').addEventListener('click',function(e)
{
    e.preventDefault();
    const mNumber= '01867970376';
    const mPin= '1234';
    const uNumber = document.getElementById('mobileNumber').value;
    const uPin = document.getElementById('uPin').value;
    if(mNumber == uNumber && mPin == uPin)
    {
        window.location.href="./home.html";
    }
    else{
       alert("Invalid Pin or Mobile Number"); 
    }
})