const express = require('express');
const Contenedor = require('./class');

const app = express();
const PORT = 8080;
const contenedor = new Contenedor('productos.txt');


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//1)a)
app.get('/productos', async (req, res) => {
    const products = await contenedor.getAll();
    res.end(JSON.stringify(products));
});
//1)b)
app.get('/productoRandom', async (req, res) => {
    const products = await contenedor.getAll();
    res.end(JSON.stringify(products[Math.floor(Math.random() * products.length)]));
});




