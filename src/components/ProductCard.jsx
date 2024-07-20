import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const {
        title,
        thumbnail,
        price,
        discountPercentage,
        rating,
    } = product;

    return (
        <div className="w-56 bg-white border border-gray-200 rounded-lg shadow-md">
            <img className="w-full h-48 object-cover rounded-t-lg" src={thumbnail} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>

                <div className="flex items-center mb-2">
                    <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
                    {discountPercentage > 0 && (
                        <span className="ml-2 text-sm text-red-500">-{discountPercentage.toFixed(2)}%</span>
                    )}
                </div>

                <div className="flex items-center mb-2">
                    <span className="text-yellow-500">
                        {'⭐'.repeat(Math.round(rating))}{' '}
                        ({rating.toFixed(1)})
                    </span>
                </div>

                <div className="mt-4">
                    <Link to={`/products/${product.id}`} >
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;