import { useSelector } from 'react-redux';

export const Cart = () => {
  const cartList = useSelector((state) => state.cartData);
  const amount =
    cartList &&
    cartList.length > 0 &&
    cartList.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <h1>Cart</h1>
      <div className="cartTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>color</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartList &&
              cartList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <div>Amount : {amount}</div>
          <div>Discount : {amount / 10}</div>
          <div>Tax : {amount * 0.2}</div>
          <div>Total Amount : {amount + amount * 0.2 - amount / 10}</div>
        </div>
      </div>
    </div>
  );
};
