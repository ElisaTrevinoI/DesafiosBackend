


class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {

        if (this.products.find(producto => producto.code == product.code)) {
            return "No se incluyó el producto porque ya existe"
        } else {
            this.products.push(product)
        }

    }

    getProducts() {

        return this.products

    }

    getProductById(idBuscar) {

        const product = this.products.find(producto => producto.id == idBuscar)
       
        if (product) {
            return product
        }

        return "Not Found"

    }
}


class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.id = Product.incrementID()
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }


    static incrementID() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const newProduct1 = new Product("Laptop", "Computaodra portatil", 20000, "RutaImg1", "C-P01", 0)
const newProduct2 = new Product("Televisión", "Televisión 20 p", 25000, "RutaImg2", "C-P03", 50)
const newProduct3 = new Product("Computadora", "Computadora de escritorio", 15000, "RutaImg3", "C-P03", 30)
const newProduct4 = new Product("Celular", "Teléfono celular", 10000, "RutaImg4", "C-P02", 65)
const newProduct5 = new Product()

const productManager = new ProductManager()

console.log(newProduct1)
productManager.addProduct(newProduct1)
productManager.addProduct(newProduct2)
console.log(productManager.addProduct(newProduct3))
productManager.addProduct(newProduct4)
productManager.addProduct(newProduct5)

console.log(productManager.getProductById(1))
console.log(productManager.getProductById(6))
console.log(productManager.getProducts())


