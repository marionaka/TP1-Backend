class ProductManager {
    #id = 0;

	constructor() {
		this.products = [];
	}

    getProducts() {
		return this.products;
	}

    addProduct(title, description, price, thumbnail, code, stock) {
		let filtro = this.products.filter((prod) => prod.title === title);
		if (filtro.length > 0) {
			console.log(`El ${title} ya existe`);
			return;
		}

		const product = {
			title,
			description,
			price,
			thumbnail,
			code,
            stock,
		};

		// le agrego el ID al evento
		product.id = this.#getID();

		// Agrego el evento a la lista de productos
		this.products.push(product);
	}

    #getID() {
	// Incremento en 1 el valor de id
        this.#id++;
        return this.#id;
	}

    getProductById (idProducto) {
        const productoIndex = this.products.findIndex(
			(product) => product.id === idProducto
		)
        
        if (productoIndex === -1) {
			console.log('No existe el producto');
			return; // Este return impide que se siga ejecutando el codigo de abajo
		} else{
            let product = this.products[productoIndex];
            console.log(product);
            return;
        }
    }
}

const productManager = new ProductManager();
console.log(productManager.getProducts());
productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.log(productManager.getProducts());
productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);productManager.addProduct("Producto prueba2", "Este es un producto prueba2", 222, "Sin imagen", "abc1234", 33);
console.log(productManager.getProducts());

productManager.getProductById(0);
productManager.getProductById(1);
productManager.getProductById(2);
productManager.getProductById(3);
productManager.getProductById(4);