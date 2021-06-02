class Product{
    constructor(product){
        product && Object.assign(this,product);
    }

    display(){
        return `<article class="product">
                    <a class="card" href="product.html?id=${this.id}">
                        <img src="${this.imageUrl}" title="${this.name}">
                        <div class="product-body">
                            <span class="title">${this.name}</span>
                            <div class="details">
                                <div class="content">
                                    <span class="category">${this.category}</span>
                                    <span class="description">${this.description}</span>
                                </div>
                                <div class="price">
                                    <span>${this.price/100} €</span>
                                </div>
                            </div>
                        </div>
                        <button class="addProduct">
                            Acheter
                        </button>
                    </a>
                </article>`;
    }

    displayDetail(){
        return `<div class="product">
                    <div class="card">
                        <img src="${this.imageUrl}" title="${this.name}">
                        <div class="product-body">
                            <span class="title">${this.name}</span>
                            <div class="details">
                                <div class="content">
                                    <span class="category">${this.category}</span>
                                    <span class="description">${this.description}</span>
                                </div>
                                <div class="price">
                                    <span>${this.price/100} €</span>
                                </div>
                            </div>
                            <button class="addProduct">
                                Acheter
                            </button>
                        </div>

                    </div>
                </div>`;
    }
}