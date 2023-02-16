// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;

  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  let totalPrice = 0;

  const multipleProducts = document.getElementsByClassName('product');

  for (let singleProduct of multipleProducts) {
    totalPrice += updateSubtotal(singleProduct);
  }

  document.getElementById('total-value').innerHTML = `$${totalPrice}`;
}

function removeProduct(event) {
  const target = event.currentTarget;
  let currentProduct = target.parentNode.parentNode;
  currentProduct.remove();
  calculateAll();
}

function createProduct() {
  let newProduct = document.querySelector('.create-product');
  let name = newProduct.querySelector('.newName').value;
  let price = newProduct.querySelector('.newPrice').value;
  
  if (name === '' || price === '') {
    cleanFormNewProduct(newProduct);
    return;
  }
  document.querySelector('tbody').innerHTML += 
  `
  <tr class="product">
    <td class="name">
      <span>I${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>${0}</span></td>
    <td class="action">
      <button id="remove" class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  cleanFormNewProduct(newProduct);
}

function cleanFormNewProduct(element) {
  element.querySelector('.newName').value = '';
  element.querySelector('.newPrice').value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsBtn = document.querySelectorAll('#remove');
  for (let removeButton of removeProductsBtn) {
    removeButton.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct); 
});
