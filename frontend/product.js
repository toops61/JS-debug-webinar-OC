let id= new URL(window.location).searchParams.get("id");

get("/api/product/" + id)
.then(data => JSON.parse(data))
.then(jsonProduct => {
    let productDetail = document.querySelector("#product-detail");
    let product = new Product(jsonProduct);
    productDetail.innerHTML += product.displayDetail();
})