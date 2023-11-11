// Sample product data, you'll replace this with your actual product data
// Function to handle adding items to the cart
function addToCart(productId) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart page
    displayCartItems();
}


const products = [
    { id: 1, name: 'Casual T-Shirt', price: 19.99 },
    { id: 2, name: 'Awesome Hoodie', price: 29.99 },
    // Add more products as needed
];

// Function to handle adding items to the cart
function addToCart(productId) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart page (optional)
    displayCartItems();
}
