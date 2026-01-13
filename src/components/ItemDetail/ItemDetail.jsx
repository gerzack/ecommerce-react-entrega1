import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const handleOnAdd = (quantity) => {
        console.log(`Agregados ${quantity} items de ${name}`)
    }

    return (
        <article className="item-detail">
            <img src={img} alt={name} />
            <div className="info-column">
                <h1>{name}</h1>
                <p>Categoría: <strong>{category}</strong></p>
                <p>{description}</p>
                <p className="price">${price}</p>
                
                {/* Insertamos el contador aquí */}
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            </div>
        </article>
    )
}

export default ItemDetail