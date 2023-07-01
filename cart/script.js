if(!localStorage.getItem("currentloggedin"))
{
  alert("login before shop")
  setTimeout(()=>{window.open('../login/index.html','_self');},1000)
}

var currentlogedin=JSON.parse(localStorage.getItem("currentloggedin"))
console.log(currentlogedin)

var selecteditems=currentlogedin.cartitems
var billlist=document.getElementById("list")
var checkoutbtn=document.getElementById("checkoutbtn")

display(selecteditems)

function display(list)
{
    document.getElementById("items").innerHTML=""
    console.log(list)
    for(i in list)
    {
      var l=i
      i=list[i]
      tempdiv=document.createElement("div")
      tempdiv.innerHTML='<div id="image"><img src="'+i.image+'" alt="item" /></div><div class="info">  <div class="row">  <div class="price">RS. '+i.price+'</div>  <div class="sized">'+i.size[0]+','+i.size[1]+','+i.size[2]+'</div>  </div>  <div class="colors">  Colors:  <div class="row">  <div class="circle" style="background-color: '+i.color[0]+'"></div>  <div class="circle" style="background-color: '+i.color[1]+'"></div>  <div class="circle" style="background-color: '+i.color[2]+'"></div>  </div>  </div>  <div class="row">Rating: '+i.rating.rate+'</div>  </div> <button class="addBtn" id="btn '+l+'">Remove from Cart</button>'
      tempdiv.className="item"
      document.getElementById("items").appendChild(tempdiv)
}

var removebuttons=document.getElementsByClassName("addBtn")
  // console.log(addcartbuttons)
  for(i of removebuttons)
  {
    // console.log(i)
    i.addEventListener("click",removefromcart)
  }

  updatebill(list)

  checkoutbtn.addEventListener("click",checkoutfunc)
}

function removefromcart(event)
{
    let tempid=event.target.id.split(" ")[1]-1
    currentlogedin.cartitems.splice(tempid,1)
    display(currentlogedin.cartitems)
    localStorage.setItem("currentloggedin", JSON.stringify(currentlogedin))
}


function updatebill(list)
{
  var sum=0
  console.log("inside update bill")
  document.getElementById("list").innerHTML=""
  for(i in list)
  {
    var sno=Number(i)+1
    i=list[i]
    var tempdiv=document.createElement("div")
    tempdiv.className="anitem"

    var itemname=document.createElement("div")
    itemname.className="name1"

    itemname.innerText=sno+".  "+i.title

    var itemprice=document.createElement("div")
    itemprice.className="cost"
    itemprice.innerText="RS "+i.price

    tempdiv.appendChild(itemname)
    tempdiv.appendChild(itemprice)
    billlist.appendChild(tempdiv)
    sum=sum+Number(i.price)
    currentlogedin.bill=sum
  }
  
    document.getElementById("amount").innerText="Rs "+sum

}

function checkoutfunc()
{
  alert("items purchased for sample purpose items are being removed even if not paid")

  
  currentlogedin.cartitems=[]
  selecteditems=currentlogedin.cartitems
  display(selecteditems)
  updatebill(selecteditems)
  console.log(currentlogedin)
  localStorage.setItem("currentloggedin", JSON.stringify(currentlogedin))
  // window.open('../razorpay/index.html','_self');
}


