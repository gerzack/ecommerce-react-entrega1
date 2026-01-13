const products = [
    { id: '1', name: 'iPhone 15', price: 1200, category: 'celulares', img: 'https://placehold.co/400x400', stock: 10, description: 'El último iPhone con cámara profesional.' },
    { id: '2', name: 'Samsung S23', price: 1100, category: 'celulares', img: 'https://placehold.co/400x400', stock: 8, description: 'Pantalla AMOLED de alta resolución.' },
    { id: '3', name: 'MacBook Pro', price: 2500, category: 'notebooks', img: 'https://placehold.co/400x400', stock: 5, description: 'Potencia pura para diseño y edición.' }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};