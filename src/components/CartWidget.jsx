import React from 'react';
import { ShoppingCart } from 'lucide-react'; // Puedes instalar 'lucide-react' o usar un ícono simple de texto/emoji

// Si no quieres instalar una librería de íconos, puedes usar un emoji como '🛒'
const CartWidget = () => {
  return (
    <div className="cart-widget">
      {/* Usando un ícono de una librería: */}
      <ShoppingCart size={24} /> 
      {/* Un indicador de contador (ejemplo) */}
      <span className="cart-count">3</span> 
    </div>
  );
};

export default CartWidget;