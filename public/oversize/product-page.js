// Product Gallery
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb');
    
    // Gallery thumbnail click handler
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Update main image
            mainImage.src = thumb.src;
            mainImage.alt = thumb.alt;
            
            // Update active thumbnail
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Example product data - replace with your actual data structure
    const products = {
        '1': {
            title: 'Vintage Wool Blazer',
            price: '€890',
            description: 'Hand-tailored oversized blazer crafted from premium Italian wool. Features classic notched lapels, structured shoulders, and a relaxed fit that embodies timeless elegance with a contemporary edge.',
            images: [
                'product1.jpg',
                'product1-2.jpg',
                'product1-3.jpg',
                'product1-4.jpg'
            ],
            details: [
                '100% Italian wool',
                'Oversized fit',
                'Fully lined',
                'Made in Italy'
            ]
        }
        // Add more products here
    };

    // Populate product data if available
    if (productId && products[productId]) {
        const product = products[productId];
        
        // Update page title
        document.title = `${product.title} - KARIM HACIANE`;
        
        // Update product content
        document.querySelector('.product-title').textContent = product.title;
        document.querySelector('.product-price').textContent = product.price;
        document.querySelector('.product-description').textContent = product.description;
        
        // Update details list
        const detailsList = document.querySelector('.product-details ul');
        detailsList.innerHTML = product.details
            .map(detail => `<li>${detail}</li>`)
            .join('');
            
        // Update images
        mainImage.src = product.images[0];
        mainImage.alt = product.title;
        
        // Update thumbnails
        thumbs.forEach((thumb, index) => {
            if (product.images[index]) {
                thumb.src = product.images[index];
                thumb.alt = `${product.title} - View ${index + 1}`;
            }
        });
    }

    // Image zoom effect on hover
    const galleryMain = document.querySelector('.gallery-main');
    
    galleryMain.addEventListener('mousemove', (e) => {
        const bounds = galleryMain.getBoundingClientRect();
        const x = (e.clientX - bounds.left) / bounds.width;
        const y = (e.clientY - bounds.top) / bounds.height;
        
        mainImage.style.transform = `scale(1.1) translate(${-x * 10}px, ${-y * 10}px)`;
    });
    
    galleryMain.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1) translate(0, 0)';
    });
});