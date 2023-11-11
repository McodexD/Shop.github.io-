// Sample product data, you'll replace this with your actual product data
const products = [
    { id: 1, name: 'Casual T-Shirt', price: 19.99 },
    // Add more products as needed
];

// Function to display items in the cart
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');

    // Check if there are items in the cart
    if (localStorage.getItem('cart')) {
        const cartItems = JSON.parse(localStorage.getItem('cart'));

        // Clear the previous content
        cartItemsContainer.innerHTML = '';

        // Display each item in the cart
        cartItems.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            const cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `<p>${product.name} - $${product.price.toFixed(2)} - Quantity: ${item.quantity}</p>`;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    } else {
        // If the cart is empty
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}

// Call the function to display initial cart items
displayCartItems();
