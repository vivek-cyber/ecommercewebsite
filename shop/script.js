// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
//   colors:[{},{},{}]
// };

if(!localStorage.getItem("currentloggedin"))
{
  alert("login before shop")
  setTimeout(()=>{window.open('../login/index.html','_self');},1000)
}
console.log(JSON.parse(localStorage.getItem("currentloggedin")))
var loggeduser=JSON.parse(localStorage.getItem("currentloggedin"))
var timeout
var totalitems=[]
var url="https://fakestoreapi.com/products"
var all1=document.getElementById("all")
var men=document.getElementById("men")
var women=document.getElementById("women")
var jewellery=document.getElementById("jewellery")
var electronics=document.getElementById("electronics")
var presentdisplaylist
var searchbox=document.getElementById("searchbox")
var filterbutton=document.getElementById("filter")
var newfinallist
var filteredlist
var countfilters=0
var countitems=0
var f1=document.getElementById("f1")
var f2=document.getElementById("f2")
var f3=document.getElementById("f3")
var f4=document.getElementById("f4")
var f5=document.getElementById("f5")
var mycartname=document.getElementById("mycartname")
async function loaddata(url)
{
  const response=await fetch(url)
  const response2=await response.json()
  return response2
  //console.log(data)
 
}

async function func1(url)
{
totalitems=await loaddata(url)
console.log(totalitems)

newfinallist=totalitems.map(addcolorandsizefunc)

console.log(newfinallist)

//dispaly the newfinallist
presentdisplaylist=newfinallist
display(presentdisplaylist)
document.getElementById("allsection").style.display="block"
document.getElementById("mensection").style.display="none"
document.getElementById("womensection").style.display="none"
document.getElementById("jewelerysection").style.display="none"
document.getElementById("electronicssection").style.display="none"

//to apply filters
filterbutton.addEventListener("click",filterdisplay)

//to display the search results
searchbox.addEventListener("keyup",debounceapifun)

f1.addEventListener("click",categorydisplay)
f2.addEventListener("click",categorydisplay)
f3.addEventListener("click",categorydisplay)
f4.addEventListener("click",categorydisplay)
f5.addEventListener("click",categorydisplay)




}

function categorydisplay(event)
{
  f1.className=f1.className.split(" ")[0]
  f2.classList.remove("active")
  f3.classList.remove("active")
  f4.classList.remove("active")
  f5.classList.remove("active")
  event.target.className=event.target.className+" active" 

  if(f5.className.includes("active",0))
  {

    document.getElementById("allsection").style.display="none"
    document.getElementById("mensection").style.display="none"
    document.getElementById("womensection").style.display="none"
    document.getElementById("jewelerysection").style.display="none"
    document.getElementById("electronicssection").style.display="block"
  }
  else if(f2.className.includes("active",0))
  {
    document.getElementById("allsection").style.display="none"
    document.getElementById("mensection").style.display="inline"
    document.getElementById("womensection").style.display="none"
    document.getElementById("jewelerysection").style.display="none"
    document.getElementById("electronicssection").style.display="none"
  }
  else if(f3.className.includes("active",0))
  {
    document.getElementById("allsection").style.display="none"
    document.getElementById("mensection").style.display="none"
    document.getElementById("womensection").style.display="block"
    document.getElementById("jewelerysection").style.display="none"
    document.getElementById("electronicssection").style.display="none"
  }
  else if(f4.className.includes("active",0))
  {
    document.getElementById("allsection").style.display="none"
    document.getElementById("mensection").style.display="none"
    document.getElementById("womensection").style.display="none"
    document.getElementById("jewelerysection").style.display="block"
    document.getElementById("electronicssection").style.display="none"
  }
  // else if(f2.className.includes("active",0))
  // {
  //   document.getElementById("allsection").style.display="none"
  //   document.getElementById("mensection").style.display="block"
  //   document.getElementById("womensection").style.display="none"
  //   document.getElementById("jewelerysection").style.display="none"
  //   document.getElementById("electronicssection").style.display="none"
  // }
  else 
  {
    document.getElementById("allsection").style.display="block"
    document.getElementById("mensection").style.display="none"
    document.getElementById("womensection").style.display="none"
    document.getElementById("jewelerysection").style.display="none"
    document.getElementById("electronicssection").style.display="none"
  }
  


}
//first function call
func1(url)



const randomRgbColor = () => {
  var items=["black","red","blue","green","white"]
  var item = items[Math.floor(Math.random()*items.length)];
  return item;
};

const randomsize = () => {
  var items=["s","m","l","xl"]
  var item = items[Math.floor(Math.random()*items.length)];
  return item;
};


var sizes=["S","M","L","XL"]
var colors=["black","red","blue","green","white"]


function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}


function addcolorandsizefunc(obj)
{
  //add random color array
  
  obj.color=getMultipleRandom(colors,3)
 
 
  //add random sizes array
  obj.size=getMultipleRandom(sizes,3)
  return obj
}

function display(list)
{
  all1.innerHTML=""
  men.innerHTML=""
  women.innerHTML=""
  jewellery.innerHTML=""
  electronics.innerHTML=""

  var tempdiv=""
  var allchild=""
  // console.log(list)
  for(i of list)
  {
    
    tempdiv=document.createElement("div")
    tempdiv.innerHTML='<div id="image"><img src="'+i.image+'" alt="item" /></div><div class="info">  <div class="row">  <div class="price">Rs. '+i.price+'</div>  <div class="sized">'+i.size[0]+','+i.size[1]+','+i.size[2]+'</div>  </div>  <div class="colors">  Colors:  <div class="row">  <div class="circle" style="background-color: '+i.color[0]+'"></div>  <div class="circle" style="background-color: '+i.color[1]+'"></div>  <div class="circle" style="background-color: '+i.color[2]+'"></div>  </div>  </div>  <div class="row">Rating: '+i.rating.rate+'</div>  </div> <button class="addBtn" id="btn '+i.id+'">Add to Cart</button>'
    tempdiv.className="item"

    


    allchild=document.createElement("div")
    allchild.innerHTML='<div id="image"><img src="'+i.image+'" alt="item" /></div><div class="info">  <div class="row">  <div class="price">Rs. '+i.price+'</div>  <div class="sized">'+i.size[0]+','+i.size[1]+','+i.size[2]+'</div>  </div>  <div class="colors">  Colors:  <div class="row">  <div class="circle" style="background-color: '+i.color[0]+'"></div>  <div class="circle" style="background-color: '+i.color[1]+'"></div>  <div class="circle" style="background-color: '+i.color[2]+'"></div>  </div>  </div>  <div class="row">Rating: '+i.rating.rate+'</div>  </div> <button class="addBtn" id="btn '+i.id+'">Add to Cart</button>'
    allchild.className="item"

    


    // console.log("added element to all")

    
    // console.log(tempdiv)
    
    // if(i.category=="men's clothing"||i.category=="women's clothing"||i.category=="jewelery"||i.category=="electronics")
    
    all1.appendChild(allchild)
    
    
    if(i.category=="men's clothing")
    {
        men.appendChild(tempdiv)
        // document.getElementById("addBtn").addEventListener("click",addtocart)
    }
    if(i.category=="women's clothing")
    {
        women.appendChild(tempdiv)
        // document.getElementById("addBtn").addEventListener("click",addtocart)
    }
    if(i.category=="jewelery")
    {
      jewellery.appendChild(tempdiv)
      // document.getElementById("addBtn").addEventListener("click",addtocart)
    }
    if(i.category=="electronics")
    {
      electronics.appendChild(tempdiv)
      // document.getElementById("addBtn").addEventListener("click",addtocart)
    }
  }

  var addcartbuttons=document.getElementsByClassName("addBtn")
  // console.log(addcartbuttons)
  for(i of addcartbuttons)
  {
    // console.log(i)
    i.addEventListener("click",addtocart)
  }
}

//function to debounce searching function
function debounceapifun(event)
{
  clearTimeout(timeout)
   timeout=setTimeout(searchingfunction,400,event.target.value);

}

//function to display search results
function searchingfunction(val)
{
  if(val.trim()=="")
  {
    presentdisplaylist=newfinallist
    display(presentdisplaylist)
    console.log(presentdisplaylist)
    
  }
  else{
  var find=val
  // console.log(find.toLowerCase())
  var newlist=[]
  for(i of newfinallist)
  {
      if(i.title.toLowerCase().includes(val.toLowerCase()))
      {
        newlist.push(i)
        presentdisplaylist=newlist
        display(presentdisplaylist)
        console.log(presentdisplaylist)
      }
  }

  // console.log(presentdisplaylist)
 
}

return presentdisplaylist
}

function findCommonElements2(arr1, arr2) {
  // Create an empty object
  let obj = {};
  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) {
      // Check if element from first array
      // already exist in object or not
      if (!obj[arr1[i]]) {

          // If it doesn't exist assign the
          // properties equals to the
          // elements in the array
          const element = arr1[i];
          obj[element] = true;
      }
  }

  // Loop through the second array
  for (let j = 0; j < arr2.length; j++) {
      // Check elements from second array exist
      // in the created object or not
      if (obj[arr2[j]]) {
          return true;
      }
  }
  return false;
}


function filterdisplay()
{

  
  countfilters=0
  // console.log("inside filtereddisplayfunction")
  filteredlist=searchingfunction(searchbox.value)
  let templist=[]
  //check based on selected colors

  let colors=[]
  if(document.getElementById("red").checked==true)
  {
    countfilters++
    colors.push("red")
  }
  if(document.getElementById("blue").checked==true)
  {
    countfilters++
    colors.push("blue")
  }
  if(document.getElementById("green").checked==true)
  {
    countfilters++
    colors.push("green")
  }
  if(document.getElementById("black").checked==true)
  {
    countfilters++
    colors.push("black")
  }
  if(document.getElementById("white").checked==true)
  {
    countfilters++
    colors.push("white")
  }

  // console.log(filteredlist)
  for(i of filteredlist)
  {
      if(findCommonElements2(colors,i.color))
      {
        templist.push(i)
      }
  }

  if(templist.length!=0)
  {
  filteredlist=templist
  templist=[]
  }

  // console.log("entering sizes part")

  // display(filteredlist)

  //check based on selected sizes
  let sizes=[]
  if(document.getElementById("s").checked==true)
  {
    countfilters++
    sizes.push("S")
    console.log("pushed a size s")
  }

  if(document.getElementById("m").checked==true)
  {
    countfilters++
    sizes.push("M")
    console.log("pushed a size m")
  }

  if(document.getElementById("l").checked==true)
  {
    countfilters++
    sizes.push("L")
    console.log("pushed a size l")
  }

  if(document.getElementById("xl").checked==true)
  {
    countfilters++
    sizes.push("XL")
    console.log("pushed a size xl")
  }

  // templist=filteredlist
  for(i of filteredlist)
  {
      if(findCommonElements2(sizes,i.size))
      {
        templist.push(i)
      }
  }

  if(templist.length!=0)
  {
    // console.log("found matching sizes")
  filteredlist=templist
  templist=[]
  }
//ratings filter
// templist=filteredlist
if(document.getElementById("range").value!=0)
{
  countfilters++
}
for(i of filteredlist)
  {
    console.log(document.getElementById("range").value)
      if(document.getElementById("range").value<=Math.floor(i.rating.rate))
      {
        // console.log("rating found")
        templist.push(i)
      }
  }
  if(templist.length!=0)
  {
  filteredlist=templist
  templist=[]
  }
  // display(filteredlist)

  
  //price range
  
  if(document.getElementById("0-25").checked==true)
  {
    countfilters++
    for(i of filteredlist)
  {
    if(i.price>=0&&i.price<=25)
    {
      // console.log("0 to 25 found")
      templist.push(i)
    }
  }
  }
  if(document.getElementById("25-50").checked==true)
  {
    countfilters++
    for(i of filteredlist)
  {
    if(i.price>=25&&i.price<=50)
    {
      // console.log("25 to 50 found")
      templist.push(i)
    }
  }
  }
  if(document.getElementById("50-100").checked==true)
  {
    countfilters++
    for(i of filteredlist)
  {
    if(i.price>=50&&i.price<=100)
    {
      // console.log("50 to 100 found")
      templist.push(i)
    }
  }
  }
  if(document.getElementById("100on").checked==true)
  {
    countfilters++
    for(i of filteredlist)
  {
    if(i.price>=100)
    {
      // console.log("100 above found")
      templist.push(i)
    }
  }
  }
  if(templist.length!=0)
  {

  filteredlist=templist
  templist=[]
  // console.log(filteredlist)

  }
  
  display(filteredlist)
  console.log(filteredlist)

}

function addtocart(event)
{
  // alert("item added to cart")

  let tempid=event.target.id.split(" ")[1]-1
  console.log("Added to cart " +event.target.id)
  loggeduser.cartitems.push(newfinallist[tempid])
  console.log(loggeduser.cartitems)
  localStorage.setItem("currentloggedin", JSON.stringify(loggeduser))
  countitems++
  mycartname.innerText="My Cart "+countitems
}