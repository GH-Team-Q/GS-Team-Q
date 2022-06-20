import React, { useEffect } from "react";
import { fetchProducts } from "../store/allProducts";
import { addToCart } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AllProducts(props) {
  const products = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    props.history.push("/cart");
  };

  return (
    <div className="all-products">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.imageURL} alt="image of cookie" />
            <h4>{product.name}</h4>
            <p>{product.price}</p>

          </Link>
          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>

        </div>
      ))}
    </div>
  );
}

export default AllProducts;
