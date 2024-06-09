// Product data: An array of objects where each object represents a product
const products = [
    {
        name: 'Product 1',
        price: '$19.99',
        description: 'This is the first product.',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Product 2',
        price: '$29.99',
        description: 'This is the second product.',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Product 3',
        price: '$39.99',
        description: 'This is the third product.',
        imageUrl: 'https://via.placeholder.com/150'
    }
];

// Function to create and insert product elements into the DOM
function displayProducts(products) {
    // Select the target container
    const productList = document.getElementById('product-list');

    // Loop through each product and create HTML elements
    products.forEach(product => {
        // Create a new div element for the product
        const productElement = document.createElement('div');
        productElement.className = 'product';

        // Set the inner HTML of the product element
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;

        // Append the product element to the product list container
        productList.appendChild(productElement);
    });
}

// Call the function to display the products
displayProducts(products);
