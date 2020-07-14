// Очистку корзины сделала по ссылке "Корзина"

const products = document.querySelector('.products');
const countProducts = document.querySelector('.header-profile__count');
const cart = document.querySelector('#cart'); 
let count;

const setCount = () => {
    count = JSON.parse(localStorage.getItem('count')) || 0; 
    countProducts.textContent = count;
}

setCount();

products.addEventListener('click', function (e) {
    if (e.target['classList'].contains('products-card__btn_cart')) {
        count++;
        countProducts.textContent = count;
        localStorage.setItem('count', JSON.stringify(count));
    }
});

cart.addEventListener('click', function() {
    localStorage.removeItem('count');
    setCount();
});



