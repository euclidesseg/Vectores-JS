var productos = {
    frutas:["mango", "pera", "kiwi"],
    verduras:{
        verdura1:"tomate",
        verdura2:"cebolla",
        verdura3:"ajo"
    }
}
document.write(productos.frutas[2] + "<br>")
document.write(productos.verduras.verdura2 + "<br>")

var productos2 = [
    ["piña", "banano", "naranjas"],
    { verdura1:"tomate",verdura2:"cebolla",verdura3:"ajo"},"arroz"
];
document.write(productos2[0][2] + "<br>")
document.write(productos2[1].verdura2 + "<br>")