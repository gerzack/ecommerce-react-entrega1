import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p className="price">${price}</p>
            <p>Stock: {stock}</p>
            <Link to={`/item/${id}`} className="btn-detalle">Ver Detalle</Link>
        </article>
    );
};

export default Item;