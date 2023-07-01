// Write your script here
var logoutbutton = document.getElementById("btn3")
var changepasswordbutton = document.getElementById("btn2")
var updatebutton = document.getElementById("btn1")
var cp = document.getElementById("cp")
var np = document.getElementById("np")
var cnp = document.getElementById("cnp")

var currentlogedin = JSON.parse(localStorage.getItem("currentloggedin"))

console.log(currentlogedin)



updatebutton.addEventListener("click", func1)
changepasswordbutton.addEventListener("click", func2)
logoutbutton.addEventListener("click", () => {
    localStorage.removeItem("currentloggedin")
    console.log("logged out successfully")
    if(!localStorage.getItem("currentloggedin"))
{
  alert("logged out sucessfully")
  setTimeout(()=>{window.open('../login/index.html','_self');},1000)
}
})

function func1(user) {
    var fname = document.getElementById("fname")
    var lname = document.getElementById("lname")
    if (fname.value.trim() != "" || lname.value.trim() != "") {
        if (fname.value.trim() != "") {
            currentlogedin.fname = fname.value
        }
        if (lname.value.trim() != "") {
            currentlogedin.lname = lname.value
        }

        console.log(currentlogedin)
        fname.value = ""
        lname.value = ""
        localStorage.setItem("currentloggedin", JSON.stringify(currentlogedin))
        alert("updated name")
    }


}

function func2(event) {
    if (cp.value === currentlogedin.pass && cnp.value === np.value) {
        currentlogedin.pass = np.value
        localStorage.setItem("currentloggedin", JSON.stringify(currentlogedin))
        cp.value=""
        cnp.value=""
        np.value=""
        console.log(currentlogedin)
        alert("updated password")
    }
    else if(cp.value != currentlogedin.pass)
    {
        alert("current password is wrong")
        cp.value=""
        cnp.value=""
        np.value=""
    }
    else if(cnp.value != np.value)
    {
        alert("new passwords did not match")
        cp.value=""
        cnp.value=""
        np.value=""
    }
}