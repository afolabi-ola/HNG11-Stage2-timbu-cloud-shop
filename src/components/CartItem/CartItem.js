import './CartItem.css'

const CartItem = ({item}) => {
    return (<div className="cart">
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button>Remove</button>
    </div> );
}
 
export default CartItem;