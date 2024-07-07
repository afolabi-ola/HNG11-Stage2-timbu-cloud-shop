import './ProductCard.css';
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className='product-card'>
      <div className='card-image'>
        <img src={product.image} alt={product.image} />
        {product.salesType === 'Discount Sales' && (
          <div className='discount-percent'>
            <p>-25%</p>
          </div>
        )}
      </div>
      <div className='card-text'>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <Button width='6em'>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
