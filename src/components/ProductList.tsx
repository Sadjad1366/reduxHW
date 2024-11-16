import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import { useProducts } from "../hooks/useProducts";
import { IProduct } from "../types/product";

const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const dispatch = useDispatch();

  const handleAddToCart = (product:IProduct) => {
      dispatch(addItem({ id: product.id, title: product.title, price: product.price, quantity: 1 }));
}


if (isLoading) return <div className="text-center mt-10 text-lg">Loading...</div>;
if (error) return <div className="text-center mt-10 text-red-500">Error fetching products</div>;
console.log(products);

if (!products || products.length === 0) {
      return <div>No products available</div>;
    }
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Our Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => console.log(`Adding ${product.title} to cart`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ProductList;
