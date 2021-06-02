get("/api/product")
.then(data => JSON.parse(data))
.then(products => {
    let listProduct = document.querySelector("#listProduct");
    products.forEach(jsonProduct => {
        let product = new Product(jsonProduct);
        listProduct.innerHTML += product.display();
    });
})