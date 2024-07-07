import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ products, productHeading }) => {
  return (
    <div className='products-overall'>
      <h1>{productHeading}</h1>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
