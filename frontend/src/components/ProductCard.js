const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card shadow-sm p-2">
      {/* Image render karne ke liye agar product.images array hai to first image use kar lo */}
      <img
        src={product.images && product.images[0] ? product.images[0] : "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
