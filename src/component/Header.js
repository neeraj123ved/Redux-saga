import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProductList } from '../redux/productAction';

export const Header = () => {
  const results = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to={'/cart'}>
        <div className="cart">
          <span>{results.length} cart</span>
        </div>
      </Link>
      <Link to={'/'}>Home</Link>
      <input
        type="text"
        onChange={(event) => dispatch(searchProductList(event.target.value))}
      />
    </div>
  );
};
