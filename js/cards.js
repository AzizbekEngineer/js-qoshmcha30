const API_URL = 'https://66289a1f54afcabd073644cb.mockapi.io/shop'
const productSearch = document.querySelector('.products__search input')
console.log(productSearch.value);
let wrapper = document.querySelector('.products__cards')



async function fetchData(URL, searchText = "") {
    const data = await fetch(`${URL}/products?name=${searchText}`)
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
fetchData(API_URL)

function createCard(data) {
    let cards = ''
    console.log(data);
    data.forEach(product => {
        cards += `
            <div class="products__card">
                <div class="products__card__img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="products__card__info">
                    <h3>${product.name}</h3>
                    <p class = "desc">${product.info}</p>
                    <button data-id = "${product.id}" class = "seeMore">See more</button>
                </div>
            </div>
        `
    });
    wrapper.innerHTML = cards
}
wrapper.addEventListener('click', (e) => {
    if (e.target.className === "seeMore") {
        let id = e.target.dataset.id
        window.open(`./pages/product.html?productId=${id}`, '_self')
    }
})
productSearch.addEventListener('input', (e) => {
    let searchText = e.target.value
    fetchData(API_URL, searchText)
})

