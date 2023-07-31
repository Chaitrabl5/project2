/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _httpclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpclient */ \"./src/httpclient.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\n function getProducts(){\r\n    _httpclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('http://localhost:8888/products')\r\n    .then(products =>_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showProducts(products) )\r\n    \r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded',getProducts)\r\ndocument.querySelector('.user-submit').addEventListener('click',submitProduct)\r\ndocument.querySelector('#products').addEventListener('click',enableEdit)\r\n\r\nfunction enableEdit(e){\r\n    if(e.target.parentElement.classList.contains('edit')){\r\n        const id =e.target.parentElement.dataset.id\r\n        const productName =e.target.parentElement.previousElementSibling.previousElementSibling.textContent;\r\n        const price =e.target.parentElement.previousElementSibling.textContent;\r\n        const data = {\r\n            id,\r\n            productName,\r\n            price\r\n        }\r\n        _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fillForm(data)\r\n    }\r\n\r\n}\r\nasync function submitProduct(e){\r\n    const productName = document.querySelector('#productName').value\r\n    const price = document.querySelector('#price').value\r\n\r\n    const id = document.querySelector('#id').value\r\n    const existingProduct= await _httpclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getById('http://localhost:8888/products/',id)\r\n    const product= {productName,price}\r\n    const updatedProduct ={...existingProduct,...product}\r\n    _httpclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put('http://localhost:8888/products',updatedProduct)\r\n    .then(product =>getProducts())\r\n\r\n}\n\n//# sourceURL=webpack://es2015/./src/app.js?");

/***/ }),

/***/ "./src/httpclient.js":
/*!***************************!*\
  !*** ./src/httpclient.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HttpClient{\r\n    async get(url){\r\n        const response = await fetch(url)\r\n        return await response.json()\r\n    }\r\n\r\n    async getById(url,id){\r\n        const response = await fetch(`${url}/${id}`)\r\n        return await response.json()\r\n    }\r\n\r\n    async post(url,data){\r\n        const response = await fetch(url,{\r\n            method:'POST',\r\n            headers:{\r\n                'Content-Type':'application/json'\r\n            },\r\n            body:JSON.stringify(data)\r\n        })\r\n        return await response.json()\r\n    }\r\n    async put(url,data){\r\n        const response = await fetch(`${url}/${data.productId}`,{\r\n            method:'PUT',\r\n            headers:{\r\n                'Content-Type':'application/json'\r\n            },\r\n            body:JSON.stringify(data)\r\n        })\r\n        return await response.json()\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HttpClient());\r\n\r\n//export default  HttpClient\n\n//# sourceURL=webpack://es2015/./src/httpclient.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass UI{\r\n    constructor(){\r\n        this.products = document.getElementById('products')\r\n        this.userSubmit = document.querySelector('.user-submit')\r\n        this.productNameInput = document.querySelector('#productName')\r\n\r\n        this.priceInput = document.querySelector('#price')\r\n        this.idInput = document.querySelector('#id')\r\n    }\r\n\r\n    showProducts(products){\r\n        let output = ''\r\n        products.forEach(product =>{\r\n            output += \r\n            `\r\n\r\n<div class=\"card mb-3\">\r\n<div class=\"card-body\">\r\n<h4 class=\"card-title\">${product.productName}</h4>\r\n<p class=\"card-text\">${product.price}</p>\r\n<a href=\"#\" class=\"edit card-link\" data-id=\"${product.productId}\">\r\n<i class=\"fa fa-pencil\"></i>\r\n</a>\r\n<a href=\"#\" class=\"delete card-link\" data-id=\"${product.productId}\">\r\n<i class=\"fa fa-remove\"></i>\r\n</a>\r\n</div>\r\n</div>\r\n\r\n`\r\n        })\r\n        this.products.innerHTML = output\r\n    }\r\n\r\n    changeFormState(type){\r\n        if(type === 'edit'){\r\n            this.userSubmit.textContent = 'Update Product'\r\n            this.userSubmit.className = 'user-submit btn btn-warning btn-block'\r\n            const button = document.createElement('button')\r\n            button.className = 'user-cancel btn btn-light btn-block'\r\n            button.appendChild(document.createTextNode('Cancel Edit'))\r\n\r\n        }\r\n        else{\r\n            this.postProduct = 'Create Product'\r\n            this.postProduct.className = 'user-submit btn btn-primary btn-block'\r\n            if(document.querySelector('.user-cancel')){\r\n                document.querySelector('.user-cancel').remove()\r\n            }\r\n        }\r\n\r\n    }\r\n    clearFields(){\r\n            this.productNameInput.value =''\r\n            this.priceInput.value =''\r\n            \r\n    }\r\n    fillForm(data){\r\n        this.productNameInput.value = data.productName\r\n        this.priceInput.value = data.price\r\n        this.idInput.value = data.id\r\n        this.changeFormState('edit')\r\n    }\r\n    showForm(message,className){\r\n\r\n        const div = document.createElement('div')\r\n        div.className = className\r\n        div.appendChild(document.createTextNode(message))\r\n        const container = document.querySelector('.productsContainer')\r\n        const products = document.querySelector('#products')\r\n        container.insertBefore(div,products)\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UI());\n\n//# sourceURL=webpack://es2015/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;