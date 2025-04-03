

let category_nav_list = document.querySelector('.category_nav_list')

function open_category_list(){

  category_nav_list.classList.toggle('active');

}


// open and close header menu

function open_close_menu(){

 let nav_links = document.querySelector('.nav_links')
 
 nav_links.classList.toggle('active')

}


// open and close cart

let cart = document.querySelector('.cart');

function open_close_cart(){

  cart.classList.toggle('active');

}

//change product img

let target = document.getElementById('target')
function changeImage(img){

  target.src = img

}


// cart products

fetch('products.json')
.then(response => response.json())
.then(data => {

  let addToCartButton = document.querySelectorAll('.btn_add_cart')
  
  addToCartButton.forEach(button => {


    button.addEventListener('click' , (event) => {

      let productId = event.target.getAttribute('data-id')

      let selectedProduct = data.find(product => product.id == productId)

      addToCart(selectedProduct)

      let allMatchingButton = document.querySelectorAll(`.btn_add_cart[data-id = '${productId}']`) 

      allMatchingButton.forEach(btn =>{

        btn.classList.add('active')

        btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> item in cart`
                                

      })


    })

  })  
})


function addToCart(product){

  let cart = JSON.parse(localStorage.getItem('cart')) || []

  cart.push({...product , quantity: 1})

  localStorage.setItem('cart' , JSON.stringify(cart))

  updateCart()

  
}


function updateCart(){

  let CartItemsContainer = document.getElementById('cart_items') 
  

  let cart = JSON.parse(localStorage.getItem('cart')) || []

  let total_price = 0;
  let total_count = 0;

  CartItemsContainer.innerHTML = ''
  cart.forEach((item , index) => {

    let total_price_item = item.price * item.quantity

    total_price += total_price_item

    total_count += item.quantity

    CartItemsContainer.innerHTML += `
    
      <div class="item_cart">
                <img src="${item.img}" alt="">

                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_price_item}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-index = ${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-index = ${index}>+</button>
                    </div>
    
                    
                </div>

                <button class="delete_item" data-index = "${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
    
    `

  })


  // cart price total

  let price_cart_total = document.querySelector('.price_cart_total')
  let count_item_cart = document.querySelector('.count_item_cart')
  let count_item_header = document.querySelector('.count_item_header')


  price_cart_total.innerHTML = `$${total_price}`

  count_item_cart.innerHTML = total_count

  count_item_header.innerHTML = total_count

  // increase and decrease quantity

  let increaseButtons = document.querySelectorAll('.increase_quantity')
  let decreaseButtons = document.querySelectorAll('.decrease_quantity')


  increaseButtons.forEach(button => {

    button.addEventListener('click' , (event) => {


      let itemIndex = event.target.getAttribute('data-index')
      increaseQuantuty(itemIndex)
    })
  })


  decreaseButtons.forEach(button => {

    button.addEventListener('click' , (event) => {


      let itemIindex = event.target.getAttribute('data-index')
      
      decreaseQuantuty(itemIindex)
    })
  })


  function increaseQuantuty(index){

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart[index].quantity += 1

    localStorage.setItem('cart' , JSON.stringify(cart))

    updateCart()

  }

  function decreaseQuantuty(index){

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    if(cart[index].quantity > 1){

      cart[index].quantity -= 1
    }
    

    localStorage.setItem('cart' , JSON.stringify(cart))

    updateCart()

  }



  // delete items from cart

  let deleteButton = document.querySelectorAll('.delete_item')
  
  
  deleteButton.forEach(button => {

    button.addEventListener('click' , (event) => {

      let  itemIndex = event.target.closest('button').getAttribute('data-index')

      removeFromCart(itemIndex)
    })

  })
}


function removeFromCart(index){

  let cart = JSON.parse(localStorage.getItem('cart')) || []

  let removeProduct = cart.splice(index , 1)[0]
  localStorage.setItem('cart' , JSON.stringify(cart))

  updateCart()

  updateButtonsState(removeProduct.id)

}


// update buttons states

function updateButtonsState(productId){


  let allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id = '${productId}']`)
  allMatchingButtons.forEach(button => {

    button.classList.remove('active')

    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`
  })
}

updateCart()




    
























