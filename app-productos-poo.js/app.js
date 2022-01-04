"use strict";

//Definimos la clase producto con sus propiedades
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Difinimos el Objeto de la interfaz

class UI {
    addProduct(product) {
        //Accedemos al elemento por id/Clase y lo guardamos en una constante
        const productList = document.getElementById("product-list");
        //Creamos el elemento HTML para mostrar el producto
        const element = document.createElement("div");
        //Diiseñamos el elemento que insertaremos en el HTML
        element.innerHTML = `
    <div class='card text-center mb-2'>
        <div class=''card-body'>
            <strong>Product</strong>: ${product.name}
            <strong>Price</strong>: ${product.price}€
            <strong>Year</strong>: ${product.year}

            <a href='#' class='btn btn-danger btn-sm m-2 ' name='delete'>eliminar</a>
        </div>
    </div>
    `;
        //Insertamos el elemento con el método .appendChild()
        productList.appendChild(element)


    }
    resetForm() {
        document.getElementById('product-form').reset()
    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado satisfactoriamente','info')
        }
    }

    showMessage(message, cssClass) {
    const div =  document.createElement('div');
    div.className =`alert alert-${cssClass} mt-2`
    div.appendChild(document.createTextNode(message));
      //Mostrando en el DOM element

    const container =  document.querySelector('.container');
    document.querySelector('#app')
    container.insertBefore(div,app);
    setTimeout(() =>{
        document.querySelector('.alert').remove();
    },2500)


    }
}

//Eventos del DOM

//Cuando el usuario inserta los datos y da CLICK al boton, capturamos el valor y lo guardamos en una constante
document.getElementById("product-form")
        .addEventListener("submit", function (e) {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

        //Guardamos el objeto en la constante product
        const product = new Product(name, price, year);

        //Debemos crear el nuevo objeto desde la interfaz UI para insertar el producto
        const ui = new UI();

        //El objeto ui obtiene los métodos addProduct,deleteProduct,showMessage... le damos el producto creado para que se muestre en pantalla
        if(name === ''||price === '' || year === ''){
            return ui.showMessage('Complete los campos porfavor', 'danger')
        }
        ui.addProduct(product);

         //Reseteamos el formulario cada vez que añadimos un producto
        ui.resetForm();
        //Mostramos el mensaje después de agregar el producto
        ui.showMessage('Producto agregado satisfactoriamente', 'success' )

        //Cancelamos el comportamiento por defecto del formulario, la pagina no se refresca con prevent default
        e.preventDefault(product);
    });

document.getElementById('product-list').addEventListener('click',function(e){
    //console.log(e.target); //Para saber el elemento que estamos capturando

    const ui = new UI();
    ui.deleteProduct(e.target)
    

});