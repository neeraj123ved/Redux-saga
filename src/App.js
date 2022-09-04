import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import { Main } from './component/Main';
import { Cart } from './component/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/cart'} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
