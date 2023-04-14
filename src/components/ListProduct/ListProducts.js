
const products = [
    
    {"id" : 1, nombre: "Veggie", precio: 1800, detalle : "Pan de espinaca, medallon vegetariano, tomate, queso, cebolla.", imagen : "ecommerce/public/image/veggie.jfif"},
    {"id" : 2, nombre: "Italiana" , precio: 2050, detalle: "Burger, muzzarella, tomate asado, rucula y alioli verde.", imagen: "ecommerce/image/italiana.jpg"},
    {"id" : 3, nombre: "Queso Grillado", precio:2100, detalle: "Burger con provoleta a la plancha, morrones asados, cebolla frita, rucula.", imagen: "image/Queso-grillado.jpg"},
    {"id" : 4, nombre: "Queso azul", precio: 1920, detalle: "Burger, cebolla dulce, mayonesa, queso azul, sesamo tostado.", imagen: "image/Queso-azul.jpg"},
    {"id" : 5, nombre: "Big kiro", precio:1700 ,detalle: "Doble burger, cheddar, cebolla caramelizada.", imagen: "image/big-kiro.jfif"},
    {"id" : 6, nombre: "Classic", precio: 1750, detalle: "Burger, pepinillos, tomate, lechuga, mayonesa de morrones" ,imagen: "image/classic.jpg" },
    {"id" : 7, nombre: "Agua", precio: 300, detalle: "Agua", imagen: "image/Agua.png"},
    {"id" : 8, nombre: "Gaseosa", precio:380 , detalle: "Pepsi, fanta, sprite.", imagen:"image/pepsi.jpg" },
    {"id" : 9, nombre: "Cerveza", precio: 500, detalle: "Brahama, Heinneken, Andes." , imagen: "image/cerveza.jpg"},
    {"id": 10, nombre: "Tiramisú", precio: 700, detalle: "Tiramisu", imagen:"image/tiramisu.png"},
    {"id": 11, nombre: "Chocotorta", precio: 400, detalle: "Chocotorta", imagen: "image/chocotorta.png"},
    {"id": 12, nombre: "Flan", precio: 500, detalle: "Flan con dulce de leche", imagen: "image/flan.jpg"}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( ()=>{
            resolve(products)
        }
        )
    })
}