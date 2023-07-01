var email = document.getElementById("email")
var pass = document.getElementById("pass")
var loginbutton = document.getElementById("btn1")


//add event listner to signup button
loginbutton.addEventListener("click", verififunction)

function verififunction(event) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
     {
        if (pass.value != "")
         {
            users = JSON.parse(localStorage.getItem("usersdata"))
           // console.log(users[email.value])

           if(users[email.value]!=undefined)
           {
            if(email.value==users[email.value].email && pass.value==users[email.value].pass)
            {

                var currentloggedin={}
                currentloggedin=users[email.value]
                console.log(currentloggedin)
                currentloggedin
                localStorage.setItem("currentloggedin", JSON.stringify(currentloggedin))
                console.log("match found")
                message.innerText = ""
                message.innerText = "Welcome..."
                message.style.color = "green"
                console.log(JSON.parse(localStorage.getItem("currentloggedin")))
                setTimeout(()=>{window.open('../shop/index.html','_self');},1000)
            }
            else
            {
                message.innerText = ""
                message.innerText = "Invalid Email-id or Password."
                message.style.color = "red"
            }
        }
        else{
            message.innerText = ""
                message.innerText = "Invalid Email-id or Password."
                message.style.color = "red"
        }
        }
    }
}