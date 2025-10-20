import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {AddtoCart} = useCart()
  return (
    <div
      className="bg-gray-300 p-4 rounded-lg shadow-md p-4 flex flex-col "
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
      <button onClick={() => AddtoCart(product)} className="bg-blue-500 text-white px-4 py-1 mt-1 rounded transition hover:bg-blue-400">Add To Cart</button>
    </div>
  );
}

export default ProductCard;