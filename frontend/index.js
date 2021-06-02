get("/api/product")
.then(products => {
    let listProduct = document.querySelector("#listProduct");
    products.forEach(jsonProduct => {
        let product = new Product(jsonProduct);
        listProduct.innerHTML += product.display();
    });
})