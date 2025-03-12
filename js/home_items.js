

fetch('products.json')
.then(response => response.json())
.then(data =>{

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    let swiper_items_sale = document.getElementById('swiper_items_sale');
    let swiper_electronic = document.getElementById('swiper_electronic');
    let swiper_appliances = document.getElementById('swiper_appliances');
    let swiper_mobiles = document.getElementById('swiper_mobiles');

    data.forEach(product => {
        
        if(product.old_price){

            let isInCart = cart.some(cartItem => cartItem.id === product.id) 

            let percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
            swiper_items_sale.innerHTML += `
            
            
            
            <div class="swiper-slide product">

                        <span class="sale-precent">%${percent_disc}</span>

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product_name"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id = '${product.id}'>
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            
            
            `
        }
    });


    data.forEach(product => {


        if(product.catetory == 'electronics'){

            let isInCart = cart.some(cartItem => cartItem.id === product.id) 

            let old_price_pragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            let percent_disc_div = product.old_price ? `<span class="sale-precent">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""

            

            swiper_electronic.innerHTML += `
            
            
            
            <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product_name"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pragraph}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id = '${product.id}'>
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            
            
            `

        }

    })


    data.forEach(product =>{

        if(product.catetory == 'appliances'){

            let isInCart = cart.some(cartItem => cartItem.id === product.id) 

            let old_price_pragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            let percent_disc_div = product.old_price ? `<span class="sale-precent">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""

            swiper_appliances.innerHTML += `
            
            
            
            <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product_name"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pragraph}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id = '${product.id}'>
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            
            
            `


        }


    })

    data.forEach(product =>{

        if(product.catetory == 'mobiles'){

            let isInCart = cart.some(cartItem => cartItem.id === product.id) 

            let old_price_pragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            let percent_disc_div = product.old_price ? `<span class="sale-precent">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""

            swiper_mobiles.innerHTML += `
            
            
            
            <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product_name"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pragraph}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id = '${product.id}'>
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            
            
            `


        }


    })
})


