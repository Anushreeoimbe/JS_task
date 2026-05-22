let products = []

let cart = []

let wishlist = []


// ELEMENTS

let productContainer =
document.getElementById("productContainer")

let cartCount =
document.getElementById("cartCount")

let total =
document.getElementById("total")

let message =
document.getElementById("message")

let search =
document.getElementById("search")


// DARK MODE

let darkBtn =
document.getElementById("darkBtn")

darkBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("dark")

})




// LOADING MESSAGE

message.innerHTML = "Loading..."




// FETCH API

fetch("https://fakestoreapi.com/products")

.then((res)=>{

  return res.json()

})

.then((data)=>{

  products = data

  message.innerHTML = ""

  displayProducts(products)

})

.catch(()=>{

  message.innerHTML =
  "Error Fetching Data"

})




// DISPLAY PRODUCTS

function displayProducts(data){

  productContainer.innerHTML = ""

  data.forEach((item)=>{

    productContainer.innerHTML += `

      <div class="card">

        <!-- WISHLIST -->

        <div class="wishlist"
        onclick="addWishlist(${item.id})">

          ❤️

        </div>


        <!-- IMAGE -->

        <img src="${item.image}"
        onclick="openModal(${item.id})">


        <!-- TITLE -->

        <h3>

          ${item.title.slice(0,20)}

        </h3>


        <!-- DESCRIPTION -->

        <p>

          ${item.description.slice(0,50)}

        </p>


        <!-- PRICE -->

        <h2 class="price">

          $${item.price}

        </h2>


        <!-- RATING -->

        <div class="rating">

          ⭐⭐⭐⭐☆

        </div>


        <!-- QUANTITY -->

        <div class="quantity">

          <button onclick="decrease(${item.id})">
            -
          </button>

          <span id="qty-${item.id}">
            1
          </span>

          <button onclick="increase(${item.id})">
            +
          </button>

        </div>


        <!-- BUTTONS -->

        <button onclick="addToCart(${item.id})">

          Add To Cart

        </button>


        <button onclick="removeFromCart(${item.id})">

          Remove

        </button>

      </div>

    `
  })

}




// SEARCH FEATURE

search.addEventListener("keyup", ()=>{

  let value =
  search.value.toLowerCase()

  let filteredData =
  products.filter((item)=>{

    return item.title
    .toLowerCase()
    .includes(value)

  })

  displayProducts(filteredData)

})




// CATEGORY FILTER

function filterCategory(category){

  if(category == "all"){

    displayProducts(products)

    return

  }

  let filtered =
  products.filter((item)=>{

    return item.category == category

  })

  displayProducts(filtered)

}




// ADD TO CART

function addToCart(id){

  let product =
  products.find((item)=>{

    return item.id == id

  })

  cart.push(product)

  updateCart()

}




// REMOVE FROM CART

function removeFromCart(id){

  let index =
  cart.findIndex((item)=>{

    return item.id == id

  })

  if(index != -1){

    cart.splice(index,1)

  }

  updateCart()

}




// UPDATE CART

function updateCart(){

  cartCount.innerHTML = cart.length

  let totalPrice = 0

  cart.forEach((item)=>{

    totalPrice += item.price

  })

  total.innerHTML =
  totalPrice.toFixed(2)

}




// WISHLIST

function addWishlist(id){

  wishlist.push(id)

  alert("Added To Wishlist ❤️")

}




// QUANTITY

function increase(id){

  let qty =
  document.getElementById(`qty-${id}`)

  qty.innerHTML++

}


function decrease(id){

  let qty =
  document.getElementById(`qty-${id}`)

  if(qty.innerHTML > 1){

    qty.innerHTML--

  }

}




// MODAL

let modal =
document.getElementById("modal")

let modalImg =
document.getElementById("modalImg")

let modalTitle =
document.getElementById("modalTitle")

let modalDesc =
document.getElementById("modalDesc")

let modalPrice =
document.getElementById("modalPrice")

let closeBtn =
document.getElementById("closeBtn")



function openModal(id){

  let product =
  products.find((item)=>{

    return item.id == id

  })

  modal.style.display = "flex"

  modalImg.src = product.image

  modalTitle.innerHTML =
  product.title

  modalDesc.innerHTML =
  product.description

  modalPrice.innerHTML =
  "$" + product.price

}



closeBtn.addEventListener("click", ()=>{

  modal.style.display = "none"

})