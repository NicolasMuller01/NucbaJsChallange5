const btn = document.querySelector('button');
const inputt = document.querySelector('input');
const template = document.querySelector(".pizza-contenedor");

const pizza = [

    {
        id:1,
        nombre:"nevada", 
        ingredientes:["queso","huevo","salsa"],
        precio:700,
        image:"https://cdn.pixabay.com/photo/2016/03/05/21/45/pizza-1239077_960_720.jpg"
    },
    {
        id:2,
        nombre:"cebollada", 
        ingredientes:["queso","cebolla","ajo","salsa"],
        precio:400,
        image:"https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_960_720.jpg"
    },
    {
        id:3,
        nombre:"super", 
        ingredientes:["queso","huevo","salsa","oregano","cheddar"],
        precio:400,
        image:"https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_960_720.jpg"
    },
    {
        id:4,
        nombre:"picante", 
        ingredientes:["queso","huevo","salsa extra picante","salsa mexicana"],
        precio:1000,
        image:"https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"
    }
];

let pizzaFiltrada;
let pizzaAsd;

btn.addEventListener('click',()=>{
        pizzaAsd = pizza.filter(item => item.nombre==inputt.value).map(item =>({
        id:item.id,
        nombre:item.nombre,
        ingredientes:item.ingredientes,
        precio:item.precio,
        image:item.image
    }))
    try{
        if(pizzaAsd[0].nombre == inputt.value){
            template.innerHTML=`<div class="arbol ${pizzaAsd[0].nombre} card text-bg-primary mb-3"
            <h2>id: ${pizzaAsd[0].id}</h2>
            <h2>nombre: ${pizzaAsd[0].nombre}</h2>
            <ul>Ingredientes: ${pizzaAsd[0].ingredientes.map(item =>{return`<li>${item}</li>`}).join("")}</ul>
            <h3>precio: $${pizzaAsd[0].precio}</h3>
            <img src="${pizzaAsd[0].image}"></img>
            </div>`
        }
    }   
    catch(err){
        return template.innerHTML=`<h1>No existe ese nombre pa</h1>`
    }
   }
        
);


document.addEventListener('DOMContentLoaded', () => {
    pizzaFiltrada = pizza.map(item =>({
        id:item.id,
        nombre:item.nombre,
        ingredientes:item.ingredientes,
        precio:item.precio,
        image:item.image
    }))
    localStorage.setItem('pizza', JSON.stringify(pizzaFiltrada));
    pizza.forEach(element => {
        template.innerHTML+=`<div class="arbol ${element.nombre} card text-bg-primary mb-3">
        <h2>id: ${element.id}</h2>
        <h2>nombre: ${element.nombre}</h2>
        <ul>Ingredientes: ${element.ingredientes.map(item =>{return`<li>${item}</li>`}).join("")}</ul>
        <h3>precio: $${element.precio}</h3>
        <img src="${element.image}"></img>
        </div>`
    });
})
