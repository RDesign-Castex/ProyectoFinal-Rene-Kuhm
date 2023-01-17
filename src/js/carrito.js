//
function addToCart(productId) {
  // Obtener el producto desde la base de datos o la página web
  var product = getProductById(productId);

  // Crear un objeto para almacenar la información del producto en el carrito
  var cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  };

  // Verificar si el carrito ya existe en la sesión del navegador
  if (sessionStorage.getItem('cart') === null) {
    // Si no existe, crear un nuevo array para almacenar los elementos del carrito
    var cart = [];
    // Agregar el producto al carrito
    cart.push(cartItem);
    // Almacenar el carrito en la sesión del navegador
    sessionStorage.setItem('cart', JSON.stringify(cart));
  } else {
    // Si el carrito ya existe, obtenerlo de la sesión del navegador
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    // Verificar si el producto ya está en el carrito
    var index = -1;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      // Si el producto no está en el carrito, agregarlo
      cart.push(cartItem);
    } else {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[index].quantity++;
    }
    // Almacenar el carrito en la sesión del navegador
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
}


