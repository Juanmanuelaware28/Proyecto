var form = document.getElementById('form')
form.addEventListener('submit',function (event){
    event.preventDefault()

var username= getElementById('username').value
console.log(username)
var email= getElementById('email')
console.log(email)
var phone_number= getElementById('phonenumber').value
console.log(phone_number)
var subject= getElementById('subject').value
console.log(subject)
var message= getElementById('message').value
console.log(message)

})

const blob = document.getElementById("blob");
window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `$(clientX)px`,
        top: `$(clientY)px`


    }
    {duration: 3000, fill: "forwards"}
);

};

