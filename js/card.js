const API_URL = 'https://66289a1f54afcabd073644cb.mockapi.io/shop'
let items = document.querySelector('.products__items')


async function fetchData(URL) {
    let param = new URLSearchParams(window.location.search)
    let id = param.get('productId')
    console.log('ok');

    const data = await fetch(`${URL}/products/${id}`)
    console.log(data);
    data
        .json()
        .then(res => createContent(res))
        .catch(err => console.log(err))
}
fetchData(API_URL)

function createContent(data) {
    console.log(data);
    items.innerHTML = `
                <div class="products__item">
                    <div class="products__item__img">
                        <img src="${data.img}"
                        alt="">
                    </div>
                    <div class="products__item__infos">
                        <h3>${data.name}</h3>
                        <p>${data.price}</p>
                        <p>${data.size}</p>
                        <p>${data.unit}</p>
                        <p>${data.info}</p>
                    </div>
                </div>
    `
}