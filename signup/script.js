var signupbutton = document.getElementById("btn1")
var fname1 = document.getElementById("fname")
var lname1 = document.getElementById("lname")
var email = document.getElementById("email")
var pass = document.getElementById("pass")
var cpass = document.getElementById("cpass")
var message = document.getElementById("message")

var users = {}
localStorage.setItem("usersdata", JSON.stringify({}))

//add event listner to signup button
signupbutton.addEventListener("click", verififunction)

function verififunction(event) {    

    event.preventDefault();
    if (fname1.value != ""&&lname1.value != "") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            if (pass.value === cpass.value && pass.value != "") {
                message.innerText = ""
                message.innerText = "Successfully Signed Up!"
                message.style.color = "green"

                //function call to add new user data into users array of objects stored in local data
                adduser(fname1.value,lname1.value, email.value, pass.value)

                //no need to display profile
                // setTimeout(displayprofile,1000)
            }
            else {
                message.innerText = ""
                message.innerText = "Error please check all the input fields correctly"
                message.style.color = "red"
            }
        }
        else {
            message.innerText = ""
            message.innerText = "Error please check all the input fields correctly"
            message.style.color = "red"
        }
    }
    else {
        message.innerText = ""
        message.innerText = "Error please check all the input fields correctly"
        message.style.color = "red"
    }
}

// function adduser(name,email,pass)
// {

//     if(!localStorage.getItem(email))
//     {
//         var obj={id:users.length+1,name:name,email:email,pass:pass}
//         // users[obj.id]=obj
//         // console.log("first user ",users)
//         localStorage.setItem(email,obj)
//         console.log("first user ",obj)

//         message.innerText=""
//         message.innerText="Successfully Signed Up!"
//         message.style.color="green"
//         name1.value=""
//         document.getElementById("email").value=""
//         document.getElementById("pass").value=""
//         cpass.value=""

//         // setTimeout(()=>{window.open('../shop/index.html','_self');},1000)
//         localStorage.getItem(email)
//     }
//     else{

//         message.innerText=""
//         message.innerText="user with same email already exist"
//         message.style.color="red"
//         name1.value=""
//         email.value=""
//         pass.value=""
//         cpass.value=""
//     }
// }


function adduser(fname,lname, email, pass) {

    users = JSON.parse(localStorage.getItem("usersdata"))
    if (!users.email) {
        console.log(users)
        var tempopj = { id: Object.keys(users).length + 1, fname: fname, lname: lname, email: email, pass: pass ,cartitems:[]}
        users[email] = tempopj
        console.log(users)
        localStorage.setItem("usersdata", JSON.stringify(users))

        message.innerText = ""
        message.innerText = "Successfully Signed Up!"
        message.style.color = "green"
        fname1.value = ""
        lname.value=""
        document.getElementById("email").value = ""
        document.getElementById("pass").value = ""
        cpass.value = ""

        // setTimeout(()=>{window.open('../login/index.html','_self');},1000)
    }
    
    else {
        message.innerText = ""
        message.innerText = "user with same email already exist"
        message.style.color = "red"
        fname1.value = ""
        lname1.value = ""
        email.value = ""
        pass.value = ""
        cpass.value = ""
    }

}