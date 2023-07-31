import httpclient from "./httpclient";
import ui from "./ui";

 function getProducts(){
    httpclient.get('http://localhost:8888/products')
    .then(products =>ui.showProducts(products) )
    
}

document.addEventListener('DOMContentLoaded',getProducts)
document.querySelector('.user-submit').addEventListener('click',submitPost)
document.querySelector('.user-submit').addEventListener('click',submitProduct)
document.querySelector('#products').addEventListener('click',enableEdit)

function enableEdit(e){
    if(e.target.parentElement.classList.contains('edit')){
        const id =e.target.parentElement.dataset.id
        const productName =e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const price =e.target.parentElement.previousElementSibling.textContent;
        const data = {
            id,
            productName,
            price
        }
        ui.fillForm(data)
    }

}



function submitPost(e) {
    const productName = document.querySelector('#productName').value;
    const price = document.querySelector('#price').value;
    const id = document.querySelector('#id').value;
    const data = {
    productName,
    price
    }
    // Validate input
    if(productName === '' || price === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
    ui.clearFields();
    } else {
    // Check for ID
    if(id === '') {
    // Create Product
    httpclient.post(`http://localhost:8888/products`, data)
    .then(data => {
        ui.showAlert('Product added', 'alert alert-success');
        ui.clearFields();
    getProducts();
    })
    .catch(err => console.log(err));
    } else {
    // Update Product
    httpclient.put(`http://localhost:8888/products${id}`, data)
    .then(data => {
        ui.showAlert('Product updated', 'alert alert-success');
        ui.changeFormState('add');
    getProducts();
    })
    .catch(err => console.log(err));
    }
    }
    
    }


async function submitProduct(e){
    const productName = document.querySelector('#productName').value
    const price = document.querySelector('#price').value

    const id = document.querySelector('#id').value
    const existingProduct= await httpclient.getById('http://localhost:8888/products/',id)
    const product= {productName,price}
    const updatedProduct ={...existingProduct,...product}
    httpclient.put('http://localhost:8888/products',updatedProduct)
    .then(product =>getProducts())

}

