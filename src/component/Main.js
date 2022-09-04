import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

export const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div className="product-container">
      {data && data.length > 0
        ? data.map((item, index) => (
            <div className="product-item" key={index}>
              <div>Name : {item.name}</div>
              <img src={item.photo} alt="" />
              <div>category : {item.category}</div>
              <div>
                <button type="button" onClick={() => dispatch(addToCart(item))}>
                  Add to cart
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove to cart
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
