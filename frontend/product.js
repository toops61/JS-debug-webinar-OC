let id= new URL(window.location).searchParams.get("id");

ajax("/api/product/" + id)
.then(data => data.json())
.then(jsonProduct => {
    let productDetail = document.querySelector("#product-detail");
    let product = new Product(jsonProduct);
    productDetail.innerHTML += product.displayDetail();
})