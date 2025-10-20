import ProductCard from './ProductCard.jsx';
import { useProducts } from '../context/ProductContext.jsx';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-gray-400 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product, index) => (
          <ProductCard key={product.id ?? index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
