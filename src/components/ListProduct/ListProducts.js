
const products = [
    
    {"id" : 1, stock: 12, nombre: "Veggie", precio: 1800, detalle : "Pan de espinaca, medallon vegetariano, tomate, queso, cebolla.", imagen : "image/veggie.jfif", category : "Comida" },
    {"id" : 2, stock: 33, nombre: "Italiana" , precio: 2050, detalle: "Burger, muzzarella, tomate asado, rucula y alioli verde.", imagen: "image/italiana.jpg", category : "Comida"},
    {"id" : 3, stock: 21, nombre: "Queso Grillado", precio:2100, detalle: "Burger con provoleta a la plancha, morrones asados, cebolla frita, rucula.", imagen: "image/Queso-grillado.jpg", category : "Comida"},
    {"id" : 4, stock: 25, nombre: "Queso azul", precio: 1920, detalle: "Burger, cebolla dulce, mayonesa, queso azul, sesamo tostado.", imagen: "image/Queso-azul.jpg", category : "Comida"},
    {"id" : 5, stock: 22, nombre: "Big kiro", precio:1700 ,detalle: "Doble burger, cheddar, cebolla caramelizada.", imagen: "image/big-kiro.jfif", category : "Comida"},
    {"id" : 6, stock: 20, nombre: "Classic", precio: 1750, detalle: "Burger, pepinillos, tomate, lechuga, mayonesa de morrones." ,imagen: "image/classic.jpg" , category : "Comida"},
    {"id" : 7, stock: 50, nombre: "Agua", precio: 300, detalle: "Agua.", imagen: "image/Agua.png", category : "Bebida"},
    {"id" : 8, stock: 60, nombre: "Gaseosa", precio:380 , detalle: "Pepsi, fanta, sprite.", imagen:"image/pepsi.jpg" , category : "Bebida"},
    {"id" : 9, stock: 40, nombre: "Cerveza", precio: 500, detalle: "Brahama, Heinneken, Andes." , imagen: "image/cerveza.jpg", category : "Bebida"},
    {"id": 10, stock: 18, nombre: "Tiramisú", precio: 700, detalle: "Tiramisu.", imagen:"image/tiramisu.png", category : "Postre"},
    {"id": 11, stock: 10, nombre: "Chocotorta", precio: 400, detalle: "Chocotorta.", imagen: "image/chocotorta.jpg", category : "Postre"},
    {"id": 12, stock: 12, nombre: "Flan", precio: 500, detalle: "Flan con dulce de leche.", imagen: "image/flan.jpg", category : "Postre"}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( ()=>{
            resolve(products)
        },500)
    })
}

export const getProductsById = (productId) =>{
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find (prod=> prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter (prod => prod.category ===categoryId))
        }, 500)
    })
} 