class UI{
    constructor(){
        this.products = document.getElementById('products')
        this.userSubmit = document.querySelector('.user-submit')
        this.productNameInput = document.querySelector('#productName')

        this.priceInput = document.querySelector('#price')
        this.idInput = document.querySelector('#id')
    }

    showProducts(products){
        let output = ''
        products.forEach(product =>{
            output += 
            `

<div class="card mb-3">
<div class="card-body">
<h4 class="card-title">${product.productName}</h4>
<p class="card-text">${product.price}</p>
<a href="#" class="edit card-link" data-id="${product.productId}">
<i class="fa fa-pencil"></i>
</a>
<a href="#" class="delete card-link" data-id="${product.productId}">
<i class="fa fa-remove"></i>
</a>
</div>
</div>

`
        })
        this.products.innerHTML = output
    }

changeFormState(type){
        // if(this.priceInput.value === " "  || this.productNameInput.value=== " "){
        //         alert('Fill all fields')
        //         this.userSubmit.textContent = 'Add Product'
        // }
         if(type === 'add'){
            this.userSubmit.textContent = 'Add Product'
            this.userSubmit.className = 'user-submit btn btn-primary btn-block'
            const button = document.createElement('button')
            button.className = 'user-cancel btn btn-light btn-block'
             button.appendChild(document.createTextNode('Cancel Add'));
              }


        if(type === 'edit'){
            this.userSubmit.textContent = 'Update Product'
            this.userSubmit.className = 'user-submit btn btn-warning btn-block'
            const button = document.createElement('button')
            button.className = 'user-cancel btn btn-light btn-block'
            button.appendChild(document.createTextNode('Cancel Edit'))

        }
        else{
            this.postProduct = 'Create Product'
            this.postProduct.className = 'user-submit btn btn-primary btn-block'
            if(document.querySelector('.user-cancel')){
                document.querySelector('.user-cancel').remove()
            }
        }

    }
    clearFields(){
            this.productNameInput.value =''
            this.priceInput.value =''
            
    }
    fillForm(data){
        this.productNameInput.value = data.productName
        this.priceInput.value = data.price
        this.idInput.value = data.id
        this.changeFormState('add')
    }
    // showForm(message,className){

    //     const div = document.createElement('div')
    //     div.className = className
    //     div.appendChild(document.createTextNode(message))
    //     const container = document.querySelector('.productsContainer')
    //     const products = document.querySelector('#products')
    //     container.insertBefore(div,products)
    // } 
    showAlert(message, className) {
        this.clearFields();
        
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.productsContainer');
        
        const products = document.querySelector('#products');
        // Insert alert div
        container.insertBefore(div, products);
        
        // Timeout
        setTimeout(function() {
       div.remove();
            // Remove div
        }, 1500);
        }
   
}

export default new UI()